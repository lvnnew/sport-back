#!/bin/bash

set -e
set -v


yarn global add runlify
yarn add -D runlify@latest
yarn
yarn prisma:gen

yarn runlify login --ifNotLeggedin
yarn runlify init
yarn runlify pullEnvs
