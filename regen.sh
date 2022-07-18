#!/bin/bash

set -e
set -v

yarn ts-node src/meta/regenBasedOnMeta.ts
