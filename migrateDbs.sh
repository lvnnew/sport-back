#!/bin/bash

set -e
set -v

yarn global add runlify

filenames=$(ls ./config -I 'prod.json' -I 'default.json' -I 'migration.json' -I '*copy*' -I '*.json_')
echo $filenames

for filename in $filenames; do
  env="${filename//.json/}"
  echo env: $env
  command="yarn runlify start env=$env npx prisma migrate deploy --schema prisma/deployConnection.prisma"
  echo command: $command
  $command
done

yarn runlify start env=prod npx prisma migrate deploy --schema prisma/deployConnection.prisma
