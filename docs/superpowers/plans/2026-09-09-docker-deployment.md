# Docker Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Package DailyGerman as a single, LAN-reachable Docker Compose service.

**Architecture:** A Python slim image runs the existing static-file and `/api/*` proxy server. Compose maps host port 8420 to container port 8420. The Python server binds all interfaces and accepts HTTP or HTTPS upstream URLs without allowlisting.

**Tech Stack:** Docker, Docker Compose, Python standard library, Node.js test runner.

## Global Constraints

- Do not add Nginx, TLS, authentication, upstream allowlisting, or other network hardening.
- Publish `8420:8420` and start the existing server with `python server.py`.
- `/api/*` must accept any valid HTTP or HTTPS upstream base URL.
- Preserve existing `npm run check` behavior.

---

### Task 1: Make the Python server container-reachable and LAN-upstream-compatible

**Files:**
- Create: `tests/server.test.mjs`
- Modify: `server.py:18-34,97-100`
- Test: `tests/server.test.mjs`

**Interfaces:**
- Consumes: `server.py` starts an HTTP server on port 8420.
- Produces: The server listens on `0.0.0.0`; `_upstream()` returns valid HTTP(S) header values and rejects other schemes.

- [ ] **Step 1: Write the failing test**

Create `tests/server.test.mjs` with a Node test that reads `server.py` and asserts it contains `ThreadingTCPServer(('0.0.0.0', PORT), Handler)` and does not contain the localhost-only `if host in ('localhost', '127.0.0.1'):` condition.

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('server is reachable from Docker and allows HTTP LAN upstreams', async () => {
  const source = await readFile(new URL('../server.py', import.meta.url), 'utf8');
  assert.match(source, /ThreadingTCPServer\(\('0\.0\.0\.0', PORT\), Handler\)/);
  assert.doesNotMatch(source, /host in \('localhost', '127\.0\.0\.1'\)/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/server.test.mjs`

Expected: FAIL because `server.py` binds `127.0.0.1` and contains the localhost-only condition.

- [ ] **Step 3: Write minimal implementation**

In `server.py`, simplify `_upstream()` so it accepts bases starting with either `http://` or `https://`, then change the `ThreadingTCPServer` bind address from `127.0.0.1` to `0.0.0.0`.

```python
if base.startswith(('http://', 'https://')):
    return base
return None

# Later in the module:
with socketserver.ThreadingTCPServer(('0.0.0.0', PORT), Handler) as httpd:
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/server.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add server.py tests/server.test.mjs
git commit -m "feat: expose server for container deployment"
```

### Task 2: Add Docker build and Compose configuration

**Files:**
- Create: `Dockerfile`
- Create: `docker-compose.yml`
- Create: `.dockerignore`
- Test: `Dockerfile`, `docker-compose.yml`

**Interfaces:**
- Consumes: `server.py` serves HTTP on `0.0.0.0:8420`.
- Produces: `docker compose up --build -d` starts service `dailygerman` at `http://localhost:8420`.

- [ ] **Step 1: Write the failing configuration test**

Create assertions in `tests/server.test.mjs` that `Dockerfile` uses a Python slim base image, exposes 8420, and runs `python server.py`; assert that `docker-compose.yml` declares the `dailygerman` service, port mapping `8420:8420`, and `restart: unless-stopped`.

```js
const dockerfile = await readFile(new URL('../Dockerfile', import.meta.url), 'utf8');
const compose = await readFile(new URL('../docker-compose.yml', import.meta.url), 'utf8');
assert.match(dockerfile, /^FROM python:3\.\d+-slim/m);
assert.match(dockerfile, /EXPOSE 8420/);
assert.match(dockerfile, /CMD \["python", "server\.py"\]/);
assert.match(compose, /^  dailygerman:/m);
assert.match(compose, /- "8420:8420"/);
assert.match(compose, /restart: unless-stopped/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/server.test.mjs`

Expected: FAIL with `ENOENT` because the Docker files do not exist.

- [ ] **Step 3: Write minimal configuration**

Create `Dockerfile` with this content:

```dockerfile
FROM python:3.13-slim

WORKDIR /app
COPY . .

EXPOSE 8420

CMD ["python", "server.py"]
```

Create `docker-compose.yml` with this content:

```yaml
services:
  dailygerman:
    build: .
    ports:
      - "8420:8420"
    restart: unless-stopped
```

Create `.dockerignore` excluding Git metadata, Node dependencies, test artifacts, and the local `docs/` workflow records:

```text
.git
node_modules
coverage
.DS_Store
docs
```

- [ ] **Step 4: Run configuration and build verification**

Run: `node --test tests/server.test.mjs && docker compose config && docker compose build`

Expected: all Node tests pass, Compose renders without errors, and Docker builds the `dailygerman` image.

- [ ] **Step 5: Commit**

```bash
git add Dockerfile docker-compose.yml .dockerignore tests/server.test.mjs
git commit -m "feat: add Docker Compose deployment"
```

### Task 3: Verify the full application regression suite

**Files:**
- Modify: none
- Test: `tests/*.test.mjs`, `tools/content-lint.mjs`

**Interfaces:**
- Consumes: completed server and Docker configuration.
- Produces: verified Docker deployment and existing application checks.

- [ ] **Step 1: Start the Compose service**

Run: `docker compose up --build -d`

Expected: service `dailygerman` starts successfully.

- [ ] **Step 2: Verify HTTP delivery through the published port**

Run: `curl --fail --silent --show-error http://localhost:8420/ > /dev/null`

Expected: exit code 0.

- [ ] **Step 3: Run the existing checks**

Run: `npm run check`

Expected: content lint and all Node tests pass.

- [ ] **Step 4: Stop the test service**

Run: `docker compose down`

Expected: the Compose-created container and network are removed.

- [ ] **Step 5: Commit verification-ready state**

```bash
git status --short
```

Expected: no uncommitted changes.
