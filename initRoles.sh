#!/bin/bash

set -e
set -v

yarn global add runlify

filenames=$(ls ./config -I 'default.json' -I 'migration.json' -I '*copy*' -I '*.json_')
echo $filenames

for filename in $filenames; do
  env="${filename//.json/}"
  echo env: $env
  command="yarn runlify start env=$env yarn ts-node:withContext src/init/roles/initRolesWithPermissions.ts"
  echo command: $command
  $command
done
