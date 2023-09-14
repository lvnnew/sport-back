### Первый запуск с выполнением инита
```sh
yarn compose:start && ./initLocal.sh && yarn dev
```

### Обычный запуск
```sh
yarn compose:start && yarn dev
```

#### Остановка
```sh
yarn compose:stop
```

## Удаление
```sh
yarn compose:delete
```

## Окружение
Для работы с локально поднятым окружением подготовлен конфиг `local`. Для того, чтобы бекенд и скрипты были направлены на локальные сервисы, команды нужно запускать через `yarn runlify start env=local`, например `yarn runlify start env=local yarn prisma:deploy`