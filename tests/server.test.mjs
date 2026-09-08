import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('server is reachable from Docker and allows HTTP LAN upstreams', async () => {
  const source = await readFile(new URL('../server.py', import.meta.url), 'utf8');
  assert.match(source, /ThreadingTCPServer\(\('0\.0\.0\.0', PORT\), Handler\)/);
  assert.doesNotMatch(source, /host in \('localhost', '127\.0\.0\.1'\)/);
});
