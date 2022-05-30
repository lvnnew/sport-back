#!/bin/bash

set -e
set -v

npm i -g runlify

runlify env dev npx prisma migrate deploy --preview-feature

runlify env test npx prisma migrate deploy --preview-feature
runlify env stage npx prisma migrate deploy --preview-feature

runlify env prod npx prisma migrate deploy --preview-feature
