#!/bin/bash

set -e
set -v

DATABASE_URI=$AGR_DATABASE_URI npx prisma migrate deploy --preview-feature

DATABASE_URI=$AGR_TEST_DATABASE_URI npx prisma migrate deploy --preview-feature
DATABASE_URI=$AGR_STAGE_DATABASE_URI npx prisma migrate deploy --preview-feature

DATABASE_URI=$AGR_DEV_KARIMOVA_DATABASE_URI npx prisma migrate deploy --preview-feature

DATABASE_URI=$AGR_PROD_DATABASE_URI npx prisma migrate deploy --preview-feature
