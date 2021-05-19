#!/bin/bash

set -e
set -v

prisma migrate deploy --preview-feature
