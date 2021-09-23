#!/bin/bash

set -e
set -v

npx prisma migrate deploy --preview-feature

AGR_PG_URI=$AGR_TEST_PG_URI npx prisma migrate deploy --preview-feature
AGR_PG_URI=$AGR_STAGE_PG_URI npx prisma migrate deploy --preview-feature

AGR_PG_URI=$AGR_DEV_KARIMOVA_PG_URI npx prisma migrate deploy --preview-feature

AGR_PG_URI=$AGR_PROD_PG_URI npx prisma migrate deploy --preview-feature
