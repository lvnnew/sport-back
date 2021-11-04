FROM registry.gitlab.com/making.ventures/images/prisma-cli AS builder

RUN mkdir /app
WORKDIR /app
COPY yarn.lock package.json ./
RUN rm -rf /root/.cache/prisma/
RUN rm -fr node_modules && yarn install --frozen-lockfile
COPY . .

RUN npm run prisma:gen
RUN npm run build

# Actual image (this version of node required for email sending by email-templates, not booster)
FROM node:16-stretch

RUN mkdir -p /usr/src/app/back
WORKDIR /usr/src/app/back

USER node
COPY --chown=node:node --from=builder /app /usr/src/app/back

EXPOSE 3000

CMD ["node", "dist/index.js"]
