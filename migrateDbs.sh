#!/bin/bash

set -e
set -v

DATABASE_URI=$MTBASE_DEV_DATABASE_URI npx prisma migrate deploy --preview-feature

DATABASE_URI=$MTBASE_TEST_DATABASE_URI npx prisma migrate deploy --preview-feature
DATABASE_URI=$MTBASE_STAGE_DATABASE_URI npx prisma migrate deploy --preview-feature

DATABASE_URI=$MTBASE_PROD_DATABASE_URI npx prisma migrate deploy --preview-feature
