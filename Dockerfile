FROM registry.gitlab.com/making.ventures/images/prisma-cli AS builder

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock ./
# RUN npm i --legacy-peer-deps
RUN npm i
# RUN npm i && npm cache clean
COPY . .

# RUN npm run prisma:gen && npm run build
RUN npm run prisma:gen
RUN npm run build

# Actual image
FROM node:14-buster

RUN mkdir -p /usr/src/app/back
WORKDIR /usr/src/app/back

COPY --from=builder /app /usr/src/app/back

EXPOSE 3000

ENTRYPOINT ["node"]
CMD ["dist/index.js"]
