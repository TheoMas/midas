# ── Stage 1 : build ───────────────────────────────────────────────────────────
FROM docker.io/library/node:22.13-alpine3.21 AS builder
WORKDIR /app
RUN npm install -g pnpm@9
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN printf "\npackages:\n  - '.'\n" >> pnpm-workspace.yaml
RUN pnpm run build

# ── Stage 2 : runner ──────────────────────────────────────────────────────────
FROM docker.io/library/node:22.13-alpine3.21 AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENV HOSTNAME=0.0.0.0
EXPOSE 3000
ENTRYPOINT ["/entrypoint.sh"]
CMD ["node", "server.js"]
