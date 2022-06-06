#!/bin/bash

set -e
set -v

yarn global add runlify

# initRoles

yarn ts-node:withContext src/init/permissions/initRoles.ts
runlify start env=test yarn ts-node:withContext src/init/permissions/initRoles.ts
runlify start env=stage yarn ts-node:withContext src/init/permissions/initRoles.ts

runlify start env=prod yarn ts-node:withContext src/init/permissions/initRoles.ts
