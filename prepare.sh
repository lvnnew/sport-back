#!/bin/bash

set -e
set -v

yarn
yarn prisma:gen
yarn global add runlify
yarn runlify login --ifNotLeggedin
yarn runlify init
yarn runlify pullEnvs
