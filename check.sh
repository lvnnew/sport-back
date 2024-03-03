#!/bin/bash

set -e
set -v

yarn global add runlify

# Static checks
yarn prisma:gen
yarn lint
yarn build
# runlify start env=test yarn test
