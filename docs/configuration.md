
# Configuration

Project takes configurations from two places: from config files in `projectRoot/config` folder and from environment variables.

Environment variables takes precedence.

## Loading from files

There is two files, configuration will be loaded from: `default.json` and `${ENV}.json` where `${ENV}` is `ENV` environment variable or `dev` if `ENV` environment variable is not set.

If both files exists they will be merged. `${ENV}.json` takes precedence.

> **_WARNING:_**  `default.json` stored in git so do not put secret information in there (database credentials, passwords, etc.)

## Configuration variables

| Key in file                      | Environment                        | Description                                                                                                                               |
| -------------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| adm.jwt.secret                   | ADM_JWT_SECRET                     | Секрет для подписи JWT-токенов приложения админки                                                                                         |
| admin.recaptcha.requiredScore    | ADMIN_RECAPTCHA_REQUIRED_SCORE     | Требуемый уровень доверия к пользователю                                                                                                  |
| admin.recaptcha.secretKey        | ADMIN_RECAPTCHA_SECRET_KEY         | Секретный токен рекапчи приложения админки                                                                                                |
| app.environment                  | APP_ENVIRONMENT                    | Название окружения                                                                                                                        |
| app.jwt.secret                   | APP_JWT_SECRET                     | Секрет для подписи JWT-токенов приложения пользователей                                                                                   |
| app.name                         | APP_NAME                           | Техническое название приложения                                                                                                           |
| app.title                        | APP_TITLE                          | Человеческое название приложения                                                                                                          |
| customer.recaptcha.requiredScore | CUSTOMER_RECAPTCHA_REQUIRED_SCORE  | Требуемый уровень доверия к пользователю                                                                                                  |
| customer.recaptcha.secretKey     | CUSTOMER_RECAPTCHA_SECRET_KEY      | Секретный токен рекапчи приложения пользователя                                                                                           |
| database.uri                     | DATABASE_URI                       | Строка подключения к основной базе данных                                                                                                 |
| graphql.playground.enabled       | GRAPHQL_PLAYGROUND_ENABLED         | Включение graphql playground (true | false)                                                                                               |
| kafka.brokers                    | KAFKA_BROKERS                      | Список kafka блокеров                                                                                                                     |
| kafka.password                   | KAFKA_PASSWORD                     | Пароль доступа в kafka                                                                                                                    |
| kafka.queue.acks                 | KAFKA_QUEUE_ACKS                   | `-1`(all) все несинхронизированные реплики должны подтвердить (по умолчанию), `0` нет подтверждений, `1` только ждет подтверждения лидера |
| kafka.queue.autoCommitInterval   | KAFKA_QUEUE_AUTO_COMMIT_INTERVAL   | Потребитель будет фиксировать смещения по истечении заданного периода, например, пяти секунд. Значение в миллисекундах                    |
| kafka.queue.autoCommitThreshold  | KAFKA_QUEUE_AUTO_COMMIT_THRESHOLD  | Потребитель будет фиксировать смещения после разрешения заданного количества сообщений, например тысячи сообщений                         |
| kafka.queue.defaultRetryTime     | KAFKA_QUEUE_DEFAULT_RETRY_TIME     | Время паузы после первой ошибки, например 20000 мс, потом оно увеличывается экспоненциально с мультипликатором 1.5                        |
| kafka.queue.maxAttemptsSize      | KAFKA_QUEUE_MAX_ATTEMPTS_SIZE      | Максимальное количество попыток обработки ошибки на сообщение                                                                             |
| kafka.queue.stackSize            | KAFKA_QUEUE_STACK_SIZE             | Количество сообщений, обрабатываемых параллельно                                                                                          |
| kafka.queue.supportedVersion     | KAFKA_QUEUE_SUPPORTED_VERSION      | Поддерживаемые версии сообщения                                                                                                           |
| kafka.queue.waitingInterruptTime | KAFKA_QUEUE_WAITING_INTERRUPT_TIME | Время паузы в очереди ожидания, когда она прошла все сообщения, это чтобы она не крутила сообщения покругу без остановки                  |
| kafka.username                   | KAFKA_USERNAME                     | Username доступа в kafka                                                                                                                  |
| logs.format                      | LOGS_FORMAT                        | Формат логов (plain | json)                                                                                                               |
| loki.url                         | LOKI_URL                           | Урл для доступа в Loki. Используется для запроса бизнес-логов                                                                             |
| s3.accessKeyId                   | S3_ACCESS_KEY_ID                   | Идентификатор доступа для авторизации в S3                                                                                                |
| s3.secretAccessKey               | S3_SECRET_ACCESS_KEY               | Секретный ключ для авторизации в S3                                                                                                       |
| smtp.from                        | SMTP_FROM                          | Почтовый адрес, от имени которого следует отправлять письма                                                                               |
| smtp.host                        | SMTP_HOST                          | Хост почтового сервера                                                                                                                    |
| smtp.pass                        | SMTP_PASS                          | Пароль пользователя для авторизации на почтовом сервере                                                                                   |
| smtp.port                        | SMTP_PORT                          | Порт почтового сервера                                                                                                                    |
| smtp.user                        | SMTP_USER                          | Имя пользователя для авторизации на почтовом сервере                                                                                      |
