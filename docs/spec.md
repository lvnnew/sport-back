
# Общие сведения

* Название: test
* Нужен для: undefined
* Префикс: test

# Оглавление

* [Каталоги](#каталоги)
  * [UI Токены обновления](#ui-токены-обновления)
  * [Логины пользователей](#логины-пользователей)
  * [App refresh tokens](#app-refresh-tokens)
  * [Типы событий аудита](#типы-событий-аудита)
  * [Аудит](#аудит)
  * [Истории автогенерации](#истории-автогенерации)
  * [Правило автогенерации](#правило-автогенерации)
  * [Конфигурационные переменные](#конфигурационные-переменные)
  * [Делегирования](#делегирования)
  * [Сущности](#сущности)
  * [Файлы](#файлы)
  * [Languages](#languages)
  * [Статус рассылок](#статус-рассылок)
  * [Рассылки](#рассылки)
  * [Статусы сообщений массовой рассылки](#статусы-сообщений-массовой-рассылки)
  * [Сообщения рассылки](#сообщения-рассылки)
  * [Типы рассылок](#типы-рассылок)
  * [Manager login types](#manager-login-types)
  * [Логины менеджеров](#логины-менеджеров)
  * [Менеджеры](#менеджеры)
  * [Разрешения менеджеров](#разрешения-менеджеров)
  * [Роли менеджеров](#роли-менеджеров)
  * [Языковые варианты шаблонов сообщений](#языковые-варианты-шаблонов-сообщений)
  * [Шаблоны сообщений](#шаблоны-сообщений)
  * [Типы сообщений](#типы-сообщений)
  * [Разрешения](#разрешения)
  * [Роли](#роли)
  * [Разрешения ролей](#разрешения-ролей)
  * [Stats](#stats)
  * [Tags](#tags)
  * [Стили шаблонов](#стили-шаблонов)
  * [Тенанты](#тенанты)
  * [Подразделения](#подразделения)
  * [Пользователи](#пользователи)
* [Информационные регистры](#информационные-регистры)
  * [Отслеживание агрегатов](#отслеживание-агрегатов)
* [Языки](#языки)

# Каталоги

## UI Токены обновления

`admRefreshTokens`

Нужен для: Хранилище рефреш токенов для админа

На сущность нет ссылок

| Имя поля  | Наименование | Тип данных | Обязательное | Справочник                             |
| --------- | ------------ | ---------- | ------------ | -------------------------------------- |
| id        | Ид           | int        | Обязательное |                                        |
| create    | Создать      | datetime   | Обязательное |                                        |
| managerId | Менеджер     | int        | Обязательное | ссылается на [`Менеджеры`](#менеджеры) |
| token     | Токен        | string     | Обязательное |                                        |

### Методы

### admRefreshTokens.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### admRefreshTokens.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### admRefreshTokens.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### admRefreshTokens.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.admRefreshTokens.title.plural
* catalogs.admRefreshTokens.title.singular
* catalogs.admRefreshTokens.fields.search
* catalogs.admRefreshTokens.fields.create
* catalogs.admRefreshTokens.fields.token

## Логины пользователей

`appLogins`

Нужен для: Аккаунты (информация по логинам) обычных пользователей (не админов)

На сущность нет ссылок

| Имя поля     | Наименование | Тип данных | Обязательное | Справочник                                   |
| ------------ | ------------ | ---------- | ------------ | -------------------------------------------- |
| id           | Ид           | int        | Обязательное |                                              |
| login        | Логин        | string     | Обязательное |                                              |
| passwordHash | Пароль       | string     | Обязательное |                                              |
| userId       | Пользователь | int        | Обязательное | ссылается на [`Пользователи`](#пользователи) |

### Ограничения уникальности

* `login`

### Методы

### appLogins.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### appLogins.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### appLogins.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### appLogins.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.appLogins.title.plural
* catalogs.appLogins.title.singular
* catalogs.appLogins.fields.search
* catalogs.appLogins.fields.login
* catalogs.appLogins.fields.passwordHash

## App refresh tokens

`appRefreshTokens`

Нужен для: Хранилище рефреш токенов для app

На сущность нет ссылок

| Имя поля | Наименование | Тип данных | Обязательное | Справочник                                   |
| -------- | ------------ | ---------- | ------------ | -------------------------------------------- |
| id       | Ид           | int        | Обязательное |                                              |
| create   | Создать      | datetime   | Обязательное |                                              |
| userId   | Пользователь | int        | Обязательное | ссылается на [`Пользователи`](#пользователи) |
| token    | Токен        | string     | Обязательное |                                              |

### Методы

### appRefreshTokens.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### appRefreshTokens.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### appRefreshTokens.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### appRefreshTokens.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.appRefreshTokens.title.plural
* catalogs.appRefreshTokens.title.singular
* catalogs.appRefreshTokens.fields.search
* catalogs.appRefreshTokens.fields.create
* catalogs.appRefreshTokens.fields.token

## Типы событий аудита

`auditLogActionTypes`

Нужен для: Учета типов событий аудита

На сущность ссылаются: [`Аудит`](#аудит)

| Имя поля | Наименование | Тип данных | Обязательное    | Справочник |
| -------- | ------------ | ---------- | --------------- | ---------- |
| id       | Ид           | string     | Обязательное    |            |
| title    | Название     | string     | Не обязательное |            |

### Предопределенные элементы

| id     | title              |
| ------ | ------------------ |
| create | Создание сущности  |
| update | Изменение сущности |
| delete | Удаление сущности  |

### Методы

### auditLogActionTypes.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### auditLogActionTypes.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### auditLogActionTypes.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### auditLogActionTypes.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.auditLogActionTypes.title.plural
* catalogs.auditLogActionTypes.title.singular
* catalogs.auditLogActionTypes.fields.search
* catalogs.auditLogActionTypes.fields.title

## Аудит

`auditLogs`

Нужен для: Аудит системы

На сущность нет ссылок

| Имя поля          | Наименование         | Тип данных | Обязательное    | Справочник                                                 |
| ----------------- | -------------------- | ---------- | --------------- | ---------------------------------------------------------- |
| id                | Ид                   | int        | Обязательное    |                                                            |
| date              | Дата                 | datetime   | Обязательное    |                                                            |
| title             | Название             | string     | Обязательное    |                                                            |
| success           | Успешно              | bool       | Не обязательное |                                                            |
| error             | Ошибка               | string     | Не обязательное |                                                            |
| entityTypeId      | Сущность             | string     | Обязательное    | ссылается на [`Сущности`](#сущности)                       |
| entityId          | ID сущности          | string     | Обязательное    |                                                            |
| actionTypeId      | Тип операции         | string     | Обязательное    | ссылается на [`Типы событий аудита`](#типы-событий-аудита) |
| managerId         | Менеджер             | int        | Не обязательное | ссылается на [`Менеджеры`](#менеджеры)                     |
| managerLogin      | Логин                | string     | Не обязательное |                                                            |
| userId            | Пользователь         | int        | Не обязательное | ссылается на [`Пользователи`](#пользователи)               |
| foreign           | Внешняя сущность     | bool       | Не обязательное |                                                            |
| foreignEntityType | Тип внешней сущности | string     | Не обязательное |                                                            |
| foreignEntityId   | ID внешней сущности  | string     | Не обязательное |                                                            |
| actionData        | Данные о действии    | string     | Не обязательное |                                                            |

### Методы

### auditLogs.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### auditLogs.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### auditLogs.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### auditLogs.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.auditLogs.title.plural
* catalogs.auditLogs.title.singular
* catalogs.auditLogs.fields.search
* catalogs.auditLogs.fields.date
* catalogs.auditLogs.fields.title
* catalogs.auditLogs.fields.success
* catalogs.auditLogs.fields.error
* catalogs.auditLogs.fields.entityId
* catalogs.auditLogs.fields.managerLogin
* catalogs.auditLogs.fields.foreign
* catalogs.auditLogs.fields.foreignEntityType
* catalogs.auditLogs.fields.foreignEntityId
* catalogs.auditLogs.fields.actionData

## Истории автогенерации

`autogenerationHistoryEntries`

Нужен для: История применения правил автогенерации к сущностям

На сущность нет ссылок

| Имя поля             | Наименование                                           | Тип данных | Обязательное    | Справочник                                                     |
| -------------------- | ------------------------------------------------------ | ---------- | --------------- | -------------------------------------------------------------- |
| id                   | Ид                                                     | int        | Обязательное    |                                                                |
| date                 | Дату проверки                                          | datetime   | Обязательное    |                                                                |
| originalEntityType   | Тип сущности, на которой запускалось правило           | string     | Обязательное    |                                                                |
| originalEntityId     | Идентификатор сущности, на котором запускалось правило | string     | Обязательное    |                                                                |
| autogenerationRuleId | Правило автогенерации, которое запускалось             | string     | Обязательное    | ссылается на [`Правило автогенерации`](#правило-автогенерации) |
| version              | Версия запускаемого правила                            | date       | Обязательное    |                                                                |
| errorOccurred        | Произошла ли ошибка                                    | bool       | Обязательное    |                                                                |
| error                | Текст ошибки                                           | string     | Не обязательное |                                                                |

### Методы

### autogenerationHistoryEntries.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### autogenerationHistoryEntries.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### autogenerationHistoryEntries.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### autogenerationHistoryEntries.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.autogenerationHistoryEntries.title.plural
* catalogs.autogenerationHistoryEntries.title.singular
* catalogs.autogenerationHistoryEntries.fields.search
* catalogs.autogenerationHistoryEntries.fields.date
* catalogs.autogenerationHistoryEntries.fields.originalEntityType
* catalogs.autogenerationHistoryEntries.fields.originalEntityId
* catalogs.autogenerationHistoryEntries.fields.version
* catalogs.autogenerationHistoryEntries.fields.errorOccurred
* catalogs.autogenerationHistoryEntries.fields.error

## Правило автогенерации

`autogenerationRules`

Нужен для: Правила автогенерации сущностей

На сущность ссылаются: [`Истории автогенерации`](#истории-автогенерации)

| Имя поля                          | Наименование                                                                                                              | Тип данных | Обязательное    | Справочник |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------- | --------------- | ---------- |
| id                                | Ид                                                                                                                        | string     | Обязательное    |            |
| title                             | Название правила                                                                                                          | string     | Обязательное    |            |
| version                           | Дата последнего изменения правила                                                                                         | date       | Не обязательное |            |
| originalEntityType                | На основе какой сущности производится генерация                                                                           | string     | Обязательное    |            |
| generatingEntityType              | Какую сущность генерируем                                                                                                 | string     | Обязательное    |            |
| originalEntityFilter              | Объект с информацией, как отобрать среди первоначальных сущностей те, по которым следует произвести генерацию             | string     | Обязательное    |            |
| generatingEntityConstructionRules | Объект с информацией, как заполнить поля генерируемой сущности. На основе полей исходной сущности, констант или выражений | string     | Обязательное    |            |
| ignoreVersionOnHistory            | Нужно ли учитывать версию при поиске сущностей ещё не обработанных правилом                                               | bool       | Обязательное    |            |

### Методы

### autogenerationRules.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### autogenerationRules.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### autogenerationRules.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### autogenerationRules.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.autogenerationRules.title.plural
* catalogs.autogenerationRules.title.singular
* catalogs.autogenerationRules.fields.search
* catalogs.autogenerationRules.fields.title
* catalogs.autogenerationRules.fields.version
* catalogs.autogenerationRules.fields.originalEntityType
* catalogs.autogenerationRules.fields.generatingEntityType
* catalogs.autogenerationRules.fields.originalEntityFilter
* catalogs.autogenerationRules.fields.generatingEntityConstructionRules
* catalogs.autogenerationRules.fields.ignoreVersionOnHistory

## Конфигурационные переменные

`configurationVariables`

На сущность нет ссылок

| Имя поля | Наименование | Тип данных | Обязательное | Справочник |
| -------- | ------------ | ---------- | ------------ | ---------- |
| id       | Ид           | string     | Обязательное |            |
| value    | Значение     | string     | Обязательное |            |

### Методы

### configurationVariables.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### configurationVariables.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### configurationVariables.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### configurationVariables.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.configurationVariables.title.plural
* catalogs.configurationVariables.title.singular
* catalogs.configurationVariables.fields.value

## Делегирования

`delegations`

Нужен для: Делегирование прав между пользователями

На сущность нет ссылок

| Имя поля  | Наименование | Тип данных | Обязательное    | Справочник                             |
| --------- | ------------ | ---------- | --------------- | -------------------------------------- |
| id        | Ид           | int        | Обязательное    |                                        |
| fromId    | От           | int        | Обязательное    | ссылается на [`Менеджеры`](#менеджеры) |
| toId      | К            | int        | Обязательное    | ссылается на [`Менеджеры`](#менеджеры) |
| expiresAt | Истекает     | date       | Не обязательное |                                        |
| active    | Активно      | bool       | Обязательное    |                                        |

### Методы

### delegations.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### delegations.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### delegations.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### delegations.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.delegations.title.plural
* catalogs.delegations.title.singular
* catalogs.delegations.fields.search
* catalogs.delegations.fields.expiresAt
* catalogs.delegations.fields.active

## Сущности

`entities`

Нужен для: Список всех сущностей проекта

На сущность ссылаются: [`Аудит`](#аудит), [`Отслеживание агрегатов`](#отслеживание-агрегатов)

| Имя поля | Наименование | Тип данных | Обязательное    | Справочник |
| -------- | ------------ | ---------- | --------------- | ---------- |
| id       | Ид           | string     | Обязательное    |            |
| title    | Название     | string     | Не обязательное |            |

### Методы

### entities.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### entities.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### entities.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### entities.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.entities.title.plural
* catalogs.entities.title.singular
* catalogs.entities.fields.search
* catalogs.entities.fields.title

## Файлы

`files`

На сущность ссылаются: [`Менеджеры`](#менеджеры)

| Имя поля     | Наименование  | Тип данных | Обязательное    | Справочник |
| ------------ | ------------- | ---------- | --------------- | ---------- |
| id           | Ид            | int        | Обязательное    |            |
| originalName | Original name | string     | Обязательное    |            |
| url          | Url           | string     | Обязательное    |            |
| mimetype     | Mimetype      | string     | Обязательное    |            |
| s3Key        | S3 key        | string     | Обязательное    |            |
| eTag         | E tag         | string     | Обязательное    |            |
| bytes        | Bytes         | int        | Не обязательное |            |

### Методы

### files.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### files.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### files.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### files.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.files.title.plural
* catalogs.files.title.singular
* catalogs.files.fields.search
* catalogs.files.fields.originalName
* catalogs.files.fields.url
* catalogs.files.fields.mimetype
* catalogs.files.fields.s3Key
* catalogs.files.fields.eTag
* catalogs.files.fields.bytes

## Languages

`languages`

На сущность ссылаются: [`Сообщения рассылки`](#сообщения-рассылки), [`Менеджеры`](#менеджеры), [`Языковые варианты шаблонов сообщений`](#языковые-варианты-шаблонов-сообщений)

| Имя поля | Наименование | Тип данных | Обязательное    | Справочник |
| -------- | ------------ | ---------- | --------------- | ---------- |
| id       | Ид           | string     | Обязательное    |            |
| title    | Название     | string     | Не обязательное |            |

### Предопределенные элементы

| id | title   |
| -- | ------- |
| ru | Russian |
| en | English |

### Методы

### languages.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### languages.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### languages.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### languages.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.languages.title.plural
* catalogs.languages.title.singular
* catalogs.languages.fields.search
* catalogs.languages.fields.title

## Статус рассылок

`mailingCampaignStatuses`

Нужен для: Статусы рассылок

На сущность ссылаются: [`Рассылки`](#рассылки)

| Имя поля | Наименование | Тип данных | Обязательное | Справочник |
| -------- | ------------ | ---------- | ------------ | ---------- |
| id       | Ид           | string     | Обязательное |            |
| title    | Title        | string     | Обязательное |            |

### Предопределенные элементы

| id        | title     |
| --------- | --------- |
| draft     | Draft     |
| preparing | Preparing |
| sending   | Sending   |
| finished  | Finished  |

### Методы

### mailingCampaignStatuses.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### mailingCampaignStatuses.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### mailingCampaignStatuses.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### mailingCampaignStatuses.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.mailingCampaignStatuses.title.plural
* catalogs.mailingCampaignStatuses.title.singular
* catalogs.mailingCampaignStatuses.fields.search
* catalogs.mailingCampaignStatuses.fields.title

## Рассылки

`mailingCampaigns`

На сущность ссылаются: [`Сообщения рассылки`](#сообщения-рассылки)

| Имя поля                | Наименование            | Тип данных | Обязательное    | Справочник                                             |
| ----------------------- | ----------------------- | ---------- | --------------- | ------------------------------------------------------ |
| id                      | Ид                      | int        | Обязательное    |                                                        |
| title                   | Title                   | string     | Обязательное    |                                                        |
| mailingTypeId           | Mailing type            | string     | Обязательное    | ссылается на [`Типы рассылок`](#типы-рассылок)         |
| priority                | Priority                | int        | Обязательное    |                                                        |
| date                    | Date                    | date       | Не обязательное |                                                        |
| mailingCampaignStatusId | Mailing campaign status | string     | Не обязательное | ссылается на [`Статус рассылок`](#статус-рассылок)     |
| messageTemplateId       | Message template        | string     | Обязательное    | ссылается на [`Шаблоны сообщений`](#шаблоны-сообщений) |

### Методы

### mailingCampaigns.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### mailingCampaigns.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### mailingCampaigns.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### mailingCampaigns.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.mailingCampaigns.title.plural
* catalogs.mailingCampaigns.title.singular
* catalogs.mailingCampaigns.fields.search
* catalogs.mailingCampaigns.fields.title
* catalogs.mailingCampaigns.fields.priority
* catalogs.mailingCampaigns.fields.date

## Статусы сообщений массовой рассылки

`mailingMessageStatuses`

На сущность ссылаются: [`Сообщения рассылки`](#сообщения-рассылки)

| Имя поля | Наименование | Тип данных | Обязательное    | Справочник |
| -------- | ------------ | ---------- | --------------- | ---------- |
| id       | Ид           | string     | Обязательное    |            |
| title    | Title        | string     | Не обязательное |            |
| final    | Final        | bool       | Обязательное    |            |

### Предопределенные элементы

| id       | title    | final |
| -------- | -------- | ----- |
| draft    | Draft    | false |
| stopped  | Stopped  | false |
| pending  | Pending  | false |
| sent     | Sent     | true  |
| canceled | Canceled | true  |
| errored  | Errored  | true  |

### Методы

### mailingMessageStatuses.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### mailingMessageStatuses.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### mailingMessageStatuses.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### mailingMessageStatuses.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.mailingMessageStatuses.title.plural
* catalogs.mailingMessageStatuses.title.singular
* catalogs.mailingMessageStatuses.fields.search
* catalogs.mailingMessageStatuses.fields.title
* catalogs.mailingMessageStatuses.fields.final

## Сообщения рассылки

`mailingMessages`

На сущность нет ссылок

| Имя поля                     | Наименование                  | Тип данных | Обязательное    | Справочник                                                                                   |
| ---------------------------- | ----------------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------- |
| id                           | Ид                            | int        | Обязательное    |                                                                                              |
| mailingCampaignId            | Mailing campaign              | int        | Обязательное    | ссылается на [`Рассылки`](#рассылки)                                                         |
| templateId                   | Template                      | string     | Обязательное    | ссылается на [`Шаблоны сообщений`](#шаблоны-сообщений)                                       |
| languageId                   | Language                      | string     | Обязательное    | ссылается на [`Languages`](#languages)                                                       |
| to                           | To                            | string     | Обязательное    |                                                                                              |
| locals                       | Locals                        | string     | Обязательное    |                                                                                              |
| localsHash                   | Locals hash                   | string     | Обязательное    |                                                                                              |
| priority                     | Priority                      | int        | Обязательное    |                                                                                              |
| dateCreated                  | Date created                  | datetime   | Обязательное    |                                                                                              |
| dateSent                     | Date sent                     | datetime   | Не обязательное |                                                                                              |
| error                        | Error                         | string     | Не обязательное |                                                                                              |
| html                         | Html                          | string     | Не обязательное |                                                                                              |
| text                         | Text                          | string     | Не обязательное |                                                                                              |
| uniqueKey                    | Unique key                    | string     | Не обязательное |                                                                                              |
| subject                      | Subject                       | string     | Не обязательное |                                                                                              |
| mailingMessageStatusId       | Mailing message status        | string     | Обязательное    | ссылается на [`Статусы сообщений массовой рассылки`](#статусы-сообщений-массовой-рассылки)   |
| messageTemplateLangVariantId | Message template lang variant | int        | Обязательное    | ссылается на [`Языковые варианты шаблонов сообщений`](#языковые-варианты-шаблонов-сообщений) |

### Ограничения уникальности

* `mailingCampaignId`, `to`, `uniqueKey`

### Методы

### mailingMessages.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### mailingMessages.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### mailingMessages.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### mailingMessages.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.mailingMessages.title.plural
* catalogs.mailingMessages.title.singular
* catalogs.mailingMessages.fields.search
* catalogs.mailingMessages.fields.to
* catalogs.mailingMessages.fields.locals
* catalogs.mailingMessages.fields.localsHash
* catalogs.mailingMessages.fields.priority
* catalogs.mailingMessages.fields.dateCreated
* catalogs.mailingMessages.fields.dateSent
* catalogs.mailingMessages.fields.error
* catalogs.mailingMessages.fields.html
* catalogs.mailingMessages.fields.text
* catalogs.mailingMessages.fields.uniqueKey
* catalogs.mailingMessages.fields.subject

## Типы рассылок

`mailingTypes`

На сущность ссылаются: [`Рассылки`](#рассылки)

| Имя поля | Наименование | Тип данных | Обязательное | Справочник |
| -------- | ------------ | ---------- | ------------ | ---------- |
| id       | Ид           | string     | Обязательное |            |
| title    | Title        | string     | Обязательное |            |

### Предопределенные элементы

| id    | title |
| ----- | ----- |
| email | Email |

### Методы

### mailingTypes.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### mailingTypes.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### mailingTypes.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### mailingTypes.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.mailingTypes.title.plural
* catalogs.mailingTypes.title.singular
* catalogs.mailingTypes.fields.search
* catalogs.mailingTypes.fields.title

## Manager login types

`managerLoginTypes`

На сущность ссылаются: [`Логины менеджеров`](#логины-менеджеров)

| Имя поля | Наименование | Тип данных | Обязательное    | Справочник |
| -------- | ------------ | ---------- | --------------- | ---------- |
| id       | Ид           | string     | Обязательное    |            |
| title    | Название     | string     | Не обязательное |            |

### Предопределенные элементы

| id       | title           |
| -------- | --------------- |
| internal | Internal        |
| oidc     | Open Id Connect |

### Методы

### managerLoginTypes.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### managerLoginTypes.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### managerLoginTypes.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### managerLoginTypes.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.managerLoginTypes.title.plural
* catalogs.managerLoginTypes.title.singular
* catalogs.managerLoginTypes.fields.search
* catalogs.managerLoginTypes.fields.title

## Логины менеджеров

`managerLogins`

Нужен для: Аккаунты (информация по логинам) пользователей бек-офиса (админы, менеджеры)

На сущность нет ссылок

| Имя поля           | Наименование      | Тип данных | Обязательное    | Справочник                                                 |
| ------------------ | ----------------- | ---------- | --------------- | ---------------------------------------------------------- |
| id                 | Ид                | int        | Обязательное    |                                                            |
| managerLoginTypeId | Тил логина        | string     | Обязательное    | ссылается на [`Manager login types`](#manager-login-types) |
| login              | Логин             | string     | Обязательное    |                                                            |
| passwordHash       | Хэш пароля        | string     | Не обязательное |                                                            |
| emailVerified      | Email подтвержден | bool       | Не обязательное |                                                            |
| locked             | Заблокирован      | bool       | Обязательное    |                                                            |
| managerId          | Менеджеры         | int        | Обязательное    | ссылается на [`Менеджеры`](#менеджеры)                     |

### Ограничения уникальности

* `managerLoginTypeId`, `login`

### Методы

### managerLogins.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### managerLogins.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### managerLogins.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### managerLogins.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.managerLogins.title.plural
* catalogs.managerLogins.title.singular
* catalogs.managerLogins.fields.search
* catalogs.managerLogins.fields.login
* catalogs.managerLogins.fields.passwordHash
* catalogs.managerLogins.fields.emailVerified
* catalogs.managerLogins.fields.locked

## Менеджеры

`managers`

Нужен для: Менеджерские (административные) аккаунты

На сущность ссылаются: [`UI Токены обновления`](#ui-токены-обновления), [`Аудит`](#аудит), [`Делегирования`](#делегирования), [`Логины менеджеров`](#логины-менеджеров), [`Разрешения менеджеров`](#разрешения-менеджеров), [`Роли менеджеров`](#роли-менеджеров)

| Имя поля      | Наименование        | Тип данных | Обязательное    | Справочник                                     |
| ------------- | ------------------- | ---------- | --------------- | ---------------------------------------------- |
| id            | Ид                  | int        | Обязательное    |                                                |
| title         | Название            | string     | Не обязательное |                                                |
| lastName      | Фамилия             | string     | Обязательное    |                                                |
| firstName     | Имя                 | string     | Обязательное    |                                                |
| languageId    | Язык                | string     | Не обязательное | ссылается на [`Languages`](#languages)         |
| email         | Email               | string     | Обязательное    |                                                |
| phone         | Телефон             | string     | Не обязательное |                                                |
| photoId       | Фото                | int        | Не обязательное | ссылается на [`Файлы`](#файлы)                 |
| telegramLogin | Логин в Telegram    | string     | Не обязательное |                                                |
| unitId        | Подразделение       | int        | Не обязательное | ссылается на [`Подразделения`](#подразделения) |
| headOfUnit    | Глава подразделения | bool       | Обязательное    |                                                |
| active        | Активный            | bool       | Обязательное    |                                                |
| tenantId      | Tenant              | int        | Не обязательное | ссылается на [`Тенанты`](#тенанты)             |

### Ограничения уникальности

* `email`

### Методы

### managers.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### managers.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### managers.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### managers.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.managers.title.plural
* catalogs.managers.title.singular
* catalogs.managers.fields.search
* catalogs.managers.fields.title
* catalogs.managers.fields.lastName
* catalogs.managers.fields.firstName
* catalogs.managers.fields.email
* catalogs.managers.fields.phone
* catalogs.managers.fields.telegramLogin
* catalogs.managers.fields.headOfUnit
* catalogs.managers.fields.active

## Разрешения менеджеров

`managersToPermissions`

Нужен для: Соединение, которым менеджерам назначаются пермишны в обход ролей

На сущность нет ссылок

| Имя поля     | Наименование | Тип данных | Обязательное    | Справочник                               |
| ------------ | ------------ | ---------- | --------------- | ---------------------------------------- |
| id           | Ид           | int        | Обязательное    |                                          |
| managerId    | Менеджер     | int        | Обязательное    | ссылается на [`Менеджеры`](#менеджеры)   |
| permissionId | Разрешение   | string     | Обязательное    | ссылается на [`Разрешения`](#разрешения) |
| expiresAt    | Истекает     | date       | Не обязательное |                                          |

### Методы

### managersToPermissions.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### managersToPermissions.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### managersToPermissions.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### managersToPermissions.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.managersToPermissions.title.plural
* catalogs.managersToPermissions.title.singular
* catalogs.managersToPermissions.fields.search
* catalogs.managersToPermissions.fields.expiresAt

## Роли менеджеров

`managersToRoles`

Нужен для: Соединение, которым менеджерам назначаются роли

На сущность нет ссылок

| Имя поля  | Наименование | Тип данных | Обязательное    | Справочник                             |
| --------- | ------------ | ---------- | --------------- | -------------------------------------- |
| id        | Ид           | int        | Обязательное    |                                        |
| managerId | Менеджер     | int        | Обязательное    | ссылается на [`Менеджеры`](#менеджеры) |
| roleId    | Роль         | string     | Обязательное    | ссылается на [`Роли`](#роли)           |
| expiresAt | Истекает     | date       | Не обязательное |                                        |

### Ограничения уникальности

* `managerId`, `roleId`, `expiresAt`

### Методы

### managersToRoles.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### managersToRoles.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### managersToRoles.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### managersToRoles.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.managersToRoles.title.plural
* catalogs.managersToRoles.title.singular
* catalogs.managersToRoles.fields.search
* catalogs.managersToRoles.fields.expiresAt

## Языковые варианты шаблонов сообщений

`messageTemplateLangVariants`

Нужен для: Языковой вариант шаблона сообщения

На сущность ссылаются: [`Сообщения рассылки`](#сообщения-рассылки)

| Имя поля          | Наименование     | Тип данных | Обязательное    | Справочник                                             |
| ----------------- | ---------------- | ---------- | --------------- | ------------------------------------------------------ |
| id                | Ид               | int        | Обязательное    |                                                        |
| title             | Title            | string     | Не обязательное |                                                        |
| subjectTemplate   | Subject template | string     | Обязательное    |                                                        |
| bodyTemplate      | Body template    | string     | Обязательное    |                                                        |
| messageTemplateId | Message template | string     | Обязательное    | ссылается на [`Шаблоны сообщений`](#шаблоны-сообщений) |
| languageId        | Language         | string     | Обязательное    | ссылается на [`Languages`](#languages)                 |
| additionalStyle   | Additional style | string     | Не обязательное |                                                        |

### Ограничения уникальности

* `messageTemplateId`, `languageId`

### Методы

### messageTemplateLangVariants.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### messageTemplateLangVariants.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### messageTemplateLangVariants.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### messageTemplateLangVariants.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.messageTemplateLangVariants.title.plural
* catalogs.messageTemplateLangVariants.title.singular
* catalogs.messageTemplateLangVariants.fields.search
* catalogs.messageTemplateLangVariants.fields.title
* catalogs.messageTemplateLangVariants.fields.subjectTemplate
* catalogs.messageTemplateLangVariants.fields.bodyTemplate
* catalogs.messageTemplateLangVariants.fields.additionalStyle

## Шаблоны сообщений

`messageTemplates`

Нужен для: Шаблоны сообщений

На сущность ссылаются: [`Рассылки`](#рассылки), [`Сообщения рассылки`](#сообщения-рассылки), [`Языковые варианты шаблонов сообщений`](#языковые-варианты-шаблонов-сообщений)

| Имя поля        | Наименование   | Тип данных | Обязательное    | Справочник                                       |
| --------------- | -------------- | ---------- | --------------- | ------------------------------------------------ |
| id              | Ид             | string     | Обязательное    |                                                  |
| title           | Title          | string     | Обязательное    |                                                  |
| secretData      | Secret data    | bool       | Обязательное    |                                                  |
| messageTypeId   | Message type   | string     | Обязательное    | ссылается на [`Типы сообщений`](#типы-сообщений) |
| dataExample     | Data example   | string     | Не обязательное |                                                  |
| templateStyleId | Template style | int        | Не обязательное | ссылается на [`Стили шаблонов`](#стили-шаблонов) |

### Методы

### messageTemplates.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### messageTemplates.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### messageTemplates.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### messageTemplates.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.messageTemplates.title.plural
* catalogs.messageTemplates.title.singular
* catalogs.messageTemplates.fields.search
* catalogs.messageTemplates.fields.title
* catalogs.messageTemplates.fields.secretData
* catalogs.messageTemplates.fields.dataExample

## Типы сообщений

`messageTypes`

Нужен для: Типы сообщений

На сущность ссылаются: [`Шаблоны сообщений`](#шаблоны-сообщений)

| Имя поля    | Наименование | Тип данных | Обязательное    | Справочник |
| ----------- | ------------ | ---------- | --------------- | ---------- |
| id          | Ид           | string     | Обязательное    |            |
| title       | Title        | string     | Обязательное    |            |
| description | Description  | string     | Не обязательное |            |

### Предопределенные элементы

| id    | title | description |
| ----- | ----- | ----------- |
| plain | Plain |             |

### Методы

### messageTypes.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### messageTypes.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### messageTypes.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### messageTypes.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.messageTypes.title.plural
* catalogs.messageTypes.title.singular
* catalogs.messageTypes.fields.search
* catalogs.messageTypes.fields.title
* catalogs.messageTypes.fields.description

## Разрешения

`permissions`

Нужен для: Разрешение на совершение той или иной операции

На сущность ссылаются: [`Разрешения менеджеров`](#разрешения-менеджеров), [`Разрешения ролей`](#разрешения-ролей)

| Имя поля | Наименование | Тип данных | Обязательное    | Справочник |
| -------- | ------------ | ---------- | --------------- | ---------- |
| id       | Ид           | string     | Обязательное    |            |
| title    | Название     | string     | Не обязательное |            |

### Методы

### permissions.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### permissions.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### permissions.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### permissions.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.permissions.title.plural
* catalogs.permissions.title.singular
* catalogs.permissions.fields.search
* catalogs.permissions.fields.title

## Роли

`roles`

Нужен для: Роли, определющие права на те или иные операции

На сущность ссылаются: [`Роли менеджеров`](#роли-менеджеров), [`Разрешения ролей`](#разрешения-ролей)

| Имя поля            | Наименование            | Тип данных | Обязательное    | Справочник |
| ------------------- | ----------------------- | ---------- | --------------- | ---------- |
| id                  | Ид                      | string     | Обязательное    |            |
| title               | Название                | string     | Не обязательное |            |
| hasAllPermissions   | Доступны все разрешения | bool       | Обязательное    |            |
| allTenantsAvailable | Доступны все арендаторы | bool       | Обязательное    |            |

### Предопределенные элементы

| id      | title    | hasAllPermissions | allTenantsAvailable |
| ------- | -------- | ----------------- | ------------------- |
| admin   | Админ    | true              | true                |
| manager | Менеджер | false             | false               |

### Методы

### roles.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### roles.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### roles.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### roles.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.roles.title.plural
* catalogs.roles.title.singular
* catalogs.roles.fields.search
* catalogs.roles.fields.title
* catalogs.roles.fields.hasAllPermissions
* catalogs.roles.fields.allTenantsAvailable

## Разрешения ролей

`rolesToPermissions`

Нужен для: Соединение, которым в роли наполняются разрешениями на те или иные операции

На сущность нет ссылок

| Имя поля     | Наименование | Тип данных | Обязательное | Справочник                               |
| ------------ | ------------ | ---------- | ------------ | ---------------------------------------- |
| id           | Ид           | int        | Обязательное |                                          |
| roleId       | Роль         | string     | Обязательное | ссылается на [`Роли`](#роли)             |
| permissionId | Разрешение   | string     | Обязательное | ссылается на [`Разрешения`](#разрешения) |

### Ограничения уникальности

* `roleId`, `permissionId`

### Методы

### rolesToPermissions.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### rolesToPermissions.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### rolesToPermissions.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### rolesToPermissions.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.rolesToPermissions.title.plural
* catalogs.rolesToPermissions.title.singular
* catalogs.rolesToPermissions.fields.search

## Stats

`stats`

Нужен для: Статистика

На сущность нет ссылок

| Имя поля   | Наименование | Тип данных | Обязательное    | Справочник |
| ---------- | ------------ | ---------- | --------------- | ---------- |
| id         | Ид           | string     | Обязательное    |            |
| updated    | Updated      | datetime   | Не обязательное |            |
| helloCount | Hello count  | int        | Не обязательное |            |

### Методы

### stats.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### stats.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### stats.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### stats.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.stats.title.plural
* catalogs.stats.title.singular
* catalogs.stats.fields.search
* catalogs.stats.fields.updated
* catalogs.stats.fields.helloCount

## Tags

`tags`

На сущность нет ссылок

| Имя поля | Наименование | Тип данных | Обязательное    | Справочник |
| -------- | ------------ | ---------- | --------------- | ---------- |
| id       | Ид           | int        | Обязательное    |            |
| comment  | Comment      | string     | Не обязательное |            |

### Методы

### tags.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### tags.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### tags.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### tags.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.tags.title.plural
* catalogs.tags.title.singular
* catalogs.tags.fields.search
* catalogs.tags.fields.comment

## Стили шаблонов

`templateStyles`

Нужен для: Стили шаблонов

На сущность ссылаются: [`Шаблоны сообщений`](#шаблоны-сообщений)

| Имя поля | Наименование | Тип данных | Обязательное | Справочник |
| -------- | ------------ | ---------- | ------------ | ---------- |
| id       | Ид           | int        | Обязательное |            |
| title    | Title        | string     | Обязательное |            |
| style    | Style        | string     | Обязательное |            |

### Методы

### templateStyles.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### templateStyles.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### templateStyles.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### templateStyles.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.templateStyles.title.plural
* catalogs.templateStyles.title.singular
* catalogs.templateStyles.fields.search
* catalogs.templateStyles.fields.title
* catalogs.templateStyles.fields.style

## Тенанты

`tenants`

На сущность ссылаются: [`Менеджеры`](#менеджеры), [`Пользователи`](#пользователи)

| Имя поля  | Наименование    | Тип данных | Обязательное    | Справочник |
| --------- | --------------- | ---------- | --------------- | ---------- |
| id        | Ид              | int        | Обязательное    |            |
| title     | Название        | string     | Не обязательное |            |
| utcOffset | Смещение по UTC | int        | Обязательное    |            |

### Методы

### tenants.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### tenants.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### tenants.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### tenants.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.tenants.title.plural
* catalogs.tenants.title.singular
* catalogs.tenants.fields.search
* catalogs.tenants.fields.title
* catalogs.tenants.fields.utcOffset

## Подразделения

`units`

На сущность ссылаются: [`Менеджеры`](#менеджеры), [`Подразделения`](#подразделения)

| Имя поля | Наименование               | Тип данных | Обязательное    | Справочник                                     |
| -------- | -------------------------- | ---------- | --------------- | ---------------------------------------------- |
| id       | Ид                         | int        | Обязательное    |                                                |
| title    | Название                   | string     | Обязательное    |                                                |
| parentId | Родительское подразделение | int        | Не обязательное | ссылается на [`Подразделения`](#подразделения) |

### Методы

### units.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### units.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### units.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### units.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.units.title.plural
* catalogs.units.title.singular
* catalogs.units.fields.search
* catalogs.units.fields.title

## Пользователи

`users`

На сущность ссылаются: [`Логины пользователей`](#логины-пользователей), [`App refresh tokens`](#app-refresh-tokens), [`Аудит`](#аудит)

| Имя поля  | Наименование | Тип данных | Обязательное    | Справочник                         |
| --------- | ------------ | ---------- | --------------- | ---------------------------------- |
| id        | Ид           | int        | Обязательное    |                                    |
| title     | Title        | string     | Не обязательное |                                    |
| lastname  | Lastname     | string     | Обязательное    |                                    |
| firstname | Firstname    | string     | Обязательное    |                                    |
| email     | Email        | string     | Обязательное    |                                    |
| tenantId  | Tenant       | int        | Не обязательное | ссылается на [`Тенанты`](#тенанты) |

### Методы

### users.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### users.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### users.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### users.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.users.title.plural
* catalogs.users.title.singular
* catalogs.users.fields.search
* catalogs.users.fields.title
* catalogs.users.fields.lastname
* catalogs.users.fields.firstname
* catalogs.users.fields.email


# Информационные регистры

## Отслеживание агрегатов

`aggregateTrackings`

Нужен для: Данные на основе которых можно понять, для каких сущностей нужно пересчитать агрегаты

На сущность нет ссылок

| Имя поля                | Наименование                                        | Тип данных | Обязательное    | Справочник                           |
| ----------------------- | --------------------------------------------------- | ---------- | --------------- | ------------------------------------ |
| id                      | Ид                                                  | int        | Обязательное    |                                      |
| entityTypeId            | Тип сущности                                        | string     | Обязательное    | ссылается на [`Сущности`](#сущности) |
| entityId                | Сущность                                            | string     | Обязательное    |                                      |
| lastAggregatesComputed  | Агрегаты последний раз вычислены                    | datetime   | Обязательное    |                                      |
| lastAggregatesScheduled | Последний раз было добавлено в очередь на обработку | datetime   | Не обязательное |                                      |
| lastEntityUpdate        | Последнее обновление сущности                       | datetime   | Обязательное    |                                      |
| aggregateVersion        | Версия агрегата                                     | int        | Обязательное    |                                      |

### Ограничения уникальности

* `entityTypeId`, `entityId`

### Методы

### aggregateTrackings.all

all

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `query`

### aggregateTrackings.create

create

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### aggregateTrackings.update

update

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`

### aggregateTrackings.delete

delete

Экспортируется через апи: да

Можно запускать через очередь: нет

Тип: `mutation`


### Лейблы

* catalogs.aggregateTrackings.title.plural
* catalogs.aggregateTrackings.title.singular

# Языки

* English (en)
* Russian (ru)
