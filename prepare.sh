#!/bin/bash

set -e
set -v

yarn
yarn prisma:gen
yarn global add runlify
runlify login --ifNotLeggedin
runlify init
runlify pullEnvs
