
# First Start

1. Выполнить команду

```sh
./prepare.sh
```

Проверить что в файле runlify.developer.json параметр "defaultEnvironment": "твой логин" или отредактировать его вручную.

2. Накатить миграции
```
yarn prisma:deploy
```

3. Выполнить иниты
```
yarn init:base
yarn init:dev
```

# Windows
If you use window next commnd may be required:
```sh
npm install --global windows-build-tools
```

# Migrations

## Create migrations
```
yarn prisma:newMigration
```

## Run migrations
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
yarn init:base
```

## Init for dev db
```
yarn init:base
yarn init:dev
```
