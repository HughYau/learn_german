FROM python:3.13-slim

WORKDIR /app
COPY . .

EXPOSE 8420

CMD ["python", "server.py"]
