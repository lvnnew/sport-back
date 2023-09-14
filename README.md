# Local start
Инструкция по локальному запуску проекта `docs/localComposeEnvironment.md`

# Migrations
## Создание новой миграции
Для создания новой миграции на локальном окружении, необходимо добавить конфиг migration.json со следующим содержимым
```js
{
  "database.main.migration.uri": "postgresql://postgres:password@localhost:5432"
}
```

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
runlify start env=stage npx prisma migrate resolve --rolled-back "20210624212115_required_on_update_level_mod" --preview-feature
```

## Generate `resolvers` types from `typeDefs` files

```
yarn ts-node ./src/gen/genGQSchemes.ts