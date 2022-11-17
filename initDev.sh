#!/bin/bash

set -e
set -v

yarn global add runlify

filenames=$(ls ./config -I 'prod.json' -I 'default.json' -I 'migration.json' -I '*copy*' -I '*.json_')
echo $filenames

for filename in $filenames; do
  env="${filename//.json/}"
  echo env: $env
  
  baseDevCommand="yarn runlify start env=$env yarn ts-node src/init/baseInit.ts"
  echo baseDevCommand: $baseDevCommand
  $baseDevCommand

  initDevCommand="yarn runlify start env=$env yarn ts-node src/init/initDev.ts"
  echo initDevCommand: $initDevCommand
  $initDevCommand
done

