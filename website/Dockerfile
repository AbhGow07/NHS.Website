FROM node:17-alpine AS builder
WORKDIR /app
COPY "frontend" .

RUN npm install

ENTRYPOINT npm run dev -- --host

