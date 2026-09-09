# Docker Deployment Design

## Goal

Run DailyGerman as one Docker container that is reachable on a LAN.

## Architecture

The image uses a slim Python runtime and runs the existing `server.py`. Docker Compose publishes container port 8420 to port 8420 on the host. No reverse proxy, TLS, authentication, or network restrictions are added.

## Changes

- Add a `Dockerfile` that copies the application into a Python image, exposes port 8420, and starts `python server.py`.
- Add `docker-compose.yml` with one `dailygerman` service, port mapping `8420:8420`, and automatic restart.
- Update `server.py` to listen on `0.0.0.0` so Docker can forward LAN traffic to it.
- Permit any syntactically valid `http://` or `https://` upstream base URL for `/api/*`, including LAN services.

## Behavior and Limits

The container is intentionally suitable only for a trusted LAN. It exposes the app and its API proxy without authentication, TLS, or upstream allowlisting. Application data remains in each browser's local storage.

## Verification

Build and start the Compose service, then request the app through `http://localhost:8420`. Run `npm run check` to retain the existing content and JavaScript regression checks.
