FROM registry.gitlab.com/making.ventures/images/prisma-cli AS builder

# docker build -t agr-back .
# docker build -t registry.gitlab.com/avia-loyalty/agr-back:latest .
# docker push registry.gitlab.com/avia-loyalty/agr-back:latest
# docker run -it --rm --entrypoint sh registry.gitlab.com/making.ventures/images/prisma-cli
# docker run -it --rm --entrypoint sh node:14-buster
# docker run \
#   -it \
#   --rm \
#   -e AGR_SMTP_FROM=${AGR_SMTP_FROM} \
#   -e AGR_SMTP_HOST=${AGR_SMTP_HOST} \
#   -e AGR_SMTP_PASS=${AGR_SMTP_PASS} \
#   -e AGR_SMTP_PORT=${AGR_SMTP_PORT} \
#   -e AGR_SMTP_USER=${AGR_SMTP_USER} \
#   --entrypoint sh \
#   --name agr-back \
#   agr-back 

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock ./
RUN npm i
COPY . .

RUN npm run prisma:gen
RUN npm run build

# Actual image (this version of node required for email sending by email-templates, not booster)
FROM node:14

RUN mkdir -p /usr/src/app/back
WORKDIR /usr/src/app/back

COPY --from=builder /app /usr/src/app/back

EXPOSE 3000

ENTRYPOINT ["node"]
CMD ["dist/index.js"]
