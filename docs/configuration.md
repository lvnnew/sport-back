
# Configuration

Project takes configurations from two places: from config files in `projectRoot/config` folder and from environment variables.

Environment variables takes precedence.

## Loading from files

There is two files, configuration will be loaded from: `default.json` and `${ENV}.json` where `${ENV}` is `ENV` environment variable or `dev` if `ENV` environment variable is not set.

If both files exists they will be merged. `${ENV}.json` takes precedence.

> **_WARNING:_**  `default.json` stored in git so do not put secret information in there (database credentials, passwords, etc.)

## Configuration variables

| Key in file        | Environment          | Description                                                 |
| ------------------ | -------------------- | ----------------------------------------------------------- |
| adm.jwt.secret     | ADM_JWT_SECRET       | Секрет для подписи JWT-токенов приложения админки           |
| app.jwt.secret     | APP_JWT_SECRET       | Секрет для подписи JWT-токенов приложения пользователей     |
| appName            | APP_NAME             | Техническое название приложения                             |
| appTitle           | APP_TITLE            | Человеческое название приложения                            |
| database.uri       | DATABASE_URI         | Строка подключения к основной базе данных                   |
| s3.accessKeyId     | S3_ACCESS_KEY_ID     | Идентификатор доступа для авторизации в S3                  |
| s3.secretAccessKey | S3_SECRET_ACCESS_KEY | Секретный ключ для авторизации в S3                         |
| smtp.from          | SMTP_FROM            | Почтовый адрес, от имени которого следует отправлять письма |
| smtp.host          | SMTP_HOST            | Хост почтового сервера                                      |
| smtp.pass          | SMTP_PASS            | Пароль пользователя для авторизации на почтовом сервере     |
| smtp.port          | SMTP_PORT            | Порт почтового сервера                                      |
| smtp.user          | SMTP_USER            | Имя пользователя для авторизации на почтовом сервере        |
