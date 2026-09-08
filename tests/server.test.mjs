import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('server is reachable from Docker and allows HTTP LAN upstreams', async () => {
  const source = await readFile(new URL('../server.py', import.meta.url), 'utf8');
  assert.match(source, /ThreadingTCPServer\(\('0\.0\.0\.0', PORT\), Handler\)/);
  assert.doesNotMatch(source, /host in \('localhost', '127\.0\.0\.1'\)/);
});

test('Docker configuration exposes the Daily German service', async () => {
  const dockerfile = await readFile(new URL('../Dockerfile', import.meta.url), 'utf8');
  const compose = await readFile(new URL('../docker-compose.yml', import.meta.url), 'utf8');
  assert.match(dockerfile, /^FROM python:3\.\d+-slim/m);
  assert.match(dockerfile, /EXPOSE 8420/);
  assert.match(dockerfile, /CMD \["python", "server\.py"\]/);
  assert.match(compose, /^  dailygerman:/m);
  assert.match(compose, /- "8420:8420"/);
  assert.match(compose, /restart: unless-stopped/);
});
