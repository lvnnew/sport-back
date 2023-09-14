#!/bin/bash

set -e
set -v

yarn global add runlify
yarn add -D runlify@latest

yarn

yarn runlify init

yarn prisma:gen

yarn runlify start env=local yarn prisma:deploy

yarn runlify start env=local yarn init:base
yarn runlify start env=local yarn init:dev