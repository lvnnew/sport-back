#!/bin/bash

set -e
set -v

yarn global add runlify

runlify start dev npx prisma migrate deploy --preview-feature

runlify start test npx prisma migrate deploy --preview-feature
runlify start stage npx prisma migrate deploy --preview-feature

runlify start prod npx prisma migrate deploy --preview-feature
