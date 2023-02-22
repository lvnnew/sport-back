#!/bin/bash

set -e
set -v

yarn global add runlify

filenames=$(ls ./config -I 'prod.json' -I 'default.json' -I 'local.json' -I 'migration.json' -I '*copy*' -I '*.json_')
echo $filenames

for filename in $filenames; do
  env="${filename//.json/}"
  echo env: $env
  command="yarn runlify start env=$env yarn prisma:deploy"
  echo command: $command
  $command
done

yarn runlify start env=prod yarn prisma:deploy
