#### Запускает контейнеры Docker с использованием docker-compose
```sh
yarn compose:start
```

#### Останавливает контейнеры Docker, запущенные с использованием docker-compose
```sh
yarn compose:stop
```

#### Удаляет контейнеры Docker и связанные с ними тома с использованием docker-compose
```sh
yarn compose:delete
```

#### Запускает локальный веб-сервер с использованием пакета serve и предоставляет содержимое папки public на локальном сервере
```sh
yarn serve
```

#### Удаляет папку dist (если она существует) и затем компилирует TypeScript-файлы в папку dist с помощью компилятора TypeScript (tsc)
```sh
yarn build
```

#### Запускает приложение с помощью пакета runlify
```sh
yarn start
```

#### Запускает приложение в режиме разработки
```sh
yarn dev
```

#### Запускает приложение в режиме разработки stage
```sh
yarn dev:dev
```

#### Запускает приложение в режиме разработки local
```sh
yarn dev:local
```

#### Запускает приложение в режиме разработки prod
```sh
yarn dev:prod
```

#### Запускает линтер ESLint для проверки синтаксиса и стиля кода в файлах в папке src
```sh
yarn lint
```

#### Запускает генерацию схем GraphQL с использованием файлаsrc/gen/genGQSchemes.ts
```sh
yarn gen
```

#### Запускает тесты с использованием фреймворка для тестирования Jest. Флаг --maxWorkers 2 указывает на использование двух рабочих процессов для выполнения тестов
```sh
yarn test
```

#### Генерирует код Prisma ORM на основе файлов миграции и моделей в папке prisma
```sh
yarn prisma:gen
```

#### Создает новую миграцию базы данных с использованием Prisma ORM
##### Для создания новой миграции на локальном окружении, необходим конфиг migration.json
```sh
yarn prisma:newMigration
```

#### Выполняет развертывание миграций базы данных с использованием Prisma ORM
```sh
yarn prisma:deploy
```
##### При необходимости отката миграции
```sh
yarn runlify start npx prisma migrate resolve --rolled-back "20210629114134_levels" --preview-feature
yarn runlify start env=local npx prisma migrate resolve --rolled-back "20210624212115_required_on_update_level_mod" --preview-feature
```

#### Запускает команду Prisma CLI для работы с базой данных
```sh
yarn prisma
```

#### Запускает файл ./src/init/wrap.ts с помощью ts-node
```sh
yarn ts-node:withContext
```

#### Запускает файл инициализации baseInit.ts с помощью ts-node
```sh
yarn init:base
```

#### Запускает файл инициализации ролей и разрешений initRolesWithPermissions.ts с помощью ts-node
```sh
yarn init:permissions
```

#### Запускает файл инициализации initDev.ts с помощью ts-node
```sh
yarn init:dev
```

#### Запускает файл regenBasedOnMeta.ts с помощью ts-node, а затем выполняет команду runlify regen
```sh
yarn regen
```

#### Предотвращает использование менеджера пакетов, отличного от Yarn, для установки зависимостей
```sh
yarn preinstall
```

#### Выполняет проверку типов TypeScript
```sh
yarn typecheck
```

#### Выполняет непрерывную проверку типов TypeScript
```sh
yarn typecheck:watch
```