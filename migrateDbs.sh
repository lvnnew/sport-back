#!/bin/bash

set -e
set -v

npx prisma migrate deploy --preview-feature

AGR_DATABASE_URI=$AGR_TEST_DATABASE_URI npx prisma migrate deploy --preview-feature
AGR_DATABASE_URI=$AGR_STAGE_DATABASE_URI npx prisma migrate deploy --preview-feature

AGR_DATABASE_URI=$AGR_DEV_KARIMOVA_DATABASE_URI npx prisma migrate deploy --preview-feature

AGR_DATABASE_URI=$AGR_PROD_DATABASE_URI npx prisma migrate deploy --preview-feature
