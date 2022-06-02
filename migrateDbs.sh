#!/bin/bash

set -e
set -v

yarn global add runlify

runlify start npx prisma migrate deploy --preview-feature

runlify start env=test npx prisma migrate deploy --preview-feature
runlify start env=stage npx prisma migrate deploy --preview-feature

runlify start env=prod npx prisma migrate deploy --preview-feature
