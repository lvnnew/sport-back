
# Windows
If you use window next commnd may be required:
```sh
npm install --global windows-build-tools
```

# Migrations

## Create migrations
```
yarn prisma:migrate
```

## Run main migration
```
yarn prisma:deploy
```

## Run all migrations
```
./migrateDbs.sh
```

## Rollback migration
```
runlify start npx prisma migrate resolve --rolled-back "20210629114134_levels" --preview-feature
runlify start env=anna_laznia npx prisma migrate resolve --rolled-back "20210629105906_files" --preview-feature
runlify start env=prod npx prisma migrate resolve --rolled-back "20210624212115_required_on_update_level_mod" --preview-feature
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
