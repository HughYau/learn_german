# README Docker Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Document Docker Compose deployment in the README.

**Architecture:** Add one concise Chinese-language section after the existing local-start instructions. It documents the existing Compose commands and LAN URL without changing runtime behavior.

**Tech Stack:** Markdown, Docker Compose.

## Global Constraints

- Modify only `README.md`.
- Place the Docker section after the local startup instructions.
- Include the start command, LAN URL format, stop command, and trusted-LAN warning.

---

### Task 1: Document Docker Compose deployment

**Files:**
- Modify: `README.md:30`
- Test: `README.md`

**Interfaces:**
- Consumes: `docker-compose.yml` exposes the application at host port 8420.
- Produces: readers can start, access, and stop the Docker deployment.

- [ ] **Step 1: Add the Docker section**

Insert this text after the local URL paragraph:

    ## Docker 部署

    在项目目录运行：

    docker compose up -d --build

    然后在局域网内打开 `http://<主机局域网 IP>:8420`。停止服务：

    docker compose down

    该部署没有认证，仅适合可信的局域网环境。

- [ ] **Step 2: Verify the rendered source content**

Run: `rg -n "Docker 部署|docker compose up -d --build|主机局域网 IP|docker compose down|没有认证" README.md`

Expected: one matching Docker section containing all required instructions.

- [ ] **Step 3: Commit**

Run: `git add README.md && git commit -m "docs: document Docker deployment"`
