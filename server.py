# Alltag 本地服务器：`python3 server.py` 启动，浏览器打开 http://localhost:8420
# 职责：1) 提供静态文件  2) 把 /api/* 代理到 OpenAI 兼容（或 Anthropic 原生）的 AI 端点（绕过学术网关的 CORS 限制）
import http.server
import json
import mimetypes
import socketserver
import urllib.error
import urllib.parse
import urllib.request

# Windows 注册表有时会给 .js 错误的 MIME 类型，这里强制修正（ES module 必需）
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('image/svg+xml', '.svg')

PORT = 8420
DEFAULT_UPSTREAM = 'https://chat-ai.academiccloud.de/v1'


class Handler(http.server.SimpleHTTPRequestHandler):
    protocol_version = 'HTTP/1.1'

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    # ---- /api/* 代理 ----
    def _upstream(self):
        base = self.headers.get('X-Upstream-Base', DEFAULT_UPSTREAM).rstrip('/')
        if base.startswith(('http://', 'https://')):
            return base
        return None

    def _proxy(self, method):
        base = self._upstream()
        if not base:
            return self._json_error(400, 'invalid upstream base url')
        path = self.path[len('/api'):]  # /api/models -> /models
        url = base + path
        body = None
        if method == 'POST':
            length = int(self.headers.get('Content-Length') or 0)
            body = self.rfile.read(length) if length else b''
        req = urllib.request.Request(url, data=body, method=method)
        req.add_header('Content-Type', 'application/json')
        req.add_header('Accept', 'application/json')
        auth = self.headers.get('Authorization')
        if auth:
            req.add_header('Authorization', auth)
        api_key = self.headers.get('x-api-key')
        if api_key:
            req.add_header('x-api-key', api_key)
        anthropic_version = self.headers.get('anthropic-version')
        if anthropic_version:
            req.add_header('anthropic-version', anthropic_version)
        try:
            with urllib.request.urlopen(req, timeout=180) as resp:
                data = resp.read()
                self._send_raw(resp.status, data)
        except urllib.error.HTTPError as e:
            self._send_raw(e.code, e.read())
        except Exception as e:
            self._json_error(502, f'upstream error: {e.__class__.__name__}')

    def _send_raw(self, status, data):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def _json_error(self, status, msg):
        self._send_raw(status, json.dumps({'error': {'message': msg}}).encode())

    def do_GET(self):
        if self.path.startswith('/api/'):
            return self._proxy('GET')
        return super().do_GET()

    def do_POST(self):
        if self.path.startswith('/api/'):
            return self._proxy('POST')
        self._json_error(404, 'not found')

    def log_message(self, fmt, *args):
        pass  # 安静模式


if __name__ == '__main__':
    with socketserver.ThreadingTCPServer(('0.0.0.0', PORT), Handler) as httpd:
        httpd.daemon_threads = True
        print(f'Alltag running: http://localhost:{PORT}')
        httpd.serve_forever()
