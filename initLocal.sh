#!/bin/bash

set -e
set -v

# Если аргумент env передан, используем его значение, иначе устанавливаем значение по умолчанию
if [ -n "$1" ]; then
    env=$1
else
    env=local
fi

export env=$env

yarn global add runlify
yarn add -D runlify@latest

yarn

#yarn runlify init

yarn prisma:gen

yarn runlify start env=$env yarn prisma:deploy

yarn runlify start env=$env yarn init:base
yarn runlify start env=$env yarn init:dev
