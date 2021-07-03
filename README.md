
# Windows
If you use window next commnd may be required:
```sh
npm install --global windows-build-tools
```

# Migrations

## Create migrations
```
AGR_PG_URI=$AGR_MIGRATION_PG_URI prisma migrate dev --preview-feature
```

## Run main migration
```
prisma migrate deploy --preview-feature
```

## Run all migrations
```
./migrateDbs.sh
```

## Rollback migration
```
prisma migrate resolve --rolled-back "20210629114134_levels" --preview-feature
AGR_PG_URI=$AGR_DEV_TUNIK_PG_URI prisma migrate resolve --rolled-back "20210629105906_files" --preview-feature
AGR_PG_URI=$AGR_PROD_PG_URI prisma migrate resolve --rolled-back "20210624212115_required_on_update_level_mod" --preview-feature
```

## Install pgcrypto extension
```
CREATE EXTENSION IF NOT EXISTS pgcrypto;
```

# Init databases

## Init for prod db
```
yarn ts-node src/init/baseInit.ts
```

## Init for dev db
```
yarn ts-node src/init/baseInit.ts
yarn ts-node src/init/initDev.ts
```
