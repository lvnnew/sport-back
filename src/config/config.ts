/* eslint-disable max-len */
import {EnvVarConfig} from './types';

// DO NOT EDIT! THIS IS GENERATED FILE

export interface Config {
  env: string;
  admJwtSecret?: string;
  adminRecaptchaRequiredScore?: number;
  adminRecaptchaSecretKey?: string;
  adminUiUrl?: string;
  appEnvironment: string;
  appJwtSecret?: string;
  appName: string;
  appTitle?: string;
  appUiUrl?: string;
  authorizationBackendChecksEnabled?: boolean;
  bootstrapEnabled?: boolean;
  customerRecaptchaRequiredScore?: string;
  customerRecaptchaSecretKey?: string;
  databaseMainMigrationUri: string;
  databaseMainReadOnlyEnabled: boolean;
  databaseMainReadOnlyUri?: string;
  databaseMainWriteUri: string;
  esCloudId?: string;
  esEnabled?: boolean;
  esNode?: string;
  esPassword?: string;
  esTlsRejectUnauthorized?: boolean;
  esUsername?: string;
  graphqlPlaygroundEnabled?: boolean;
  kafkaAuthEnabled: boolean;
  kafkaBrokers?: string;
  kafkaEnabled?: boolean;
  kafkaPassword?: string;
  kafkaQueueAcks?: number;
  kafkaQueueDefaultRetryTime?: number;
  kafkaQueueMaxAttemptsSize?: number;
  kafkaQueueStackSize?: number;
  kafkaQueueSupportedVersion?: string;
  kafkaQueueWaitingInterruptTime?: number;
  kafkaSslEnabled: boolean;
  kafkaSslRejectUnauthorized?: boolean;
  kafkaUsername?: string;
  keycloakAdmClientId?: string;
  keycloakAdmRealm?: string;
  keycloakAdmUrl?: string;
  keycloakAppClientId?: string;
  keycloakAppRealm?: string;
  keycloakAppUrl?: string;
  logsFormat?: string;
  lokiUrl?: string;
  s3AccessKeyId: string;
  s3BucketEmailFiles: string;
  s3BucketTmpFilesToDownload: string;
  s3Endpoint: string;
  s3Region: string;
  s3SecretAccessKey: string;
  sentryDsn?: string;
  smtpFrom?: string;
  smtpHost?: string;
  smtpPass?: string;
  smtpPort?: number;
  smtpRejectUnauthorized?: boolean;
  smtpSecure?: boolean;
  smtpUser?: string;
}

export const envVarsConfig: EnvVarConfig[] = [{
  id: 'adm.jwt.secret',
  type: 'string',
  title: 'Секрет для подписи JWT-токенов приложения админки',
  required: false,
  hidden: true,
  editable: false,
}, {
  id: 'admin.recaptcha.requiredScore',
  type: 'float',
  title: 'Требуемый уровень доверия к пользователю',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'admin.recaptcha.secretKey',
  type: 'string',
  title: 'Секретный токен рекапчи приложения админки',
  required: false,
  hidden: true,
  editable: false,
}, {
  id: 'admin.ui.url',
  type: 'string',
  title: 'Урл административного интерфейса (без конечного слеша)',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'app.environment',
  type: 'string',
  title: 'Название окружения',
  required: true,
  hidden: false,
  editable: true,
}, {
  id: 'app.jwt.secret',
  type: 'string',
  title: 'Секрет для подписи JWT-токенов приложения пользователей',
  required: false,
  hidden: true,
  editable: false,
}, {
  id: 'app.name',
  type: 'string',
  title: 'Техническое название приложения',
  required: true,
  hidden: false,
  editable: true,
}, {
  id: 'app.title',
  type: 'string',
  title: 'Пользовательское название приложения',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'app.ui.url',
  type: 'string',
  title: 'Урл интерфейса конечного пользователя (без конечного слеша)',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'authorization.backendChecks.enabled',
  type: 'bool',
  title: 'Проверка авторизации на бекенде включены',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'bootstrap.enabled',
  type: 'bool',
  title: 'Подготавливать окружеине при запуске',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'customer.recaptcha.requiredScore',
  type: 'string',
  title: 'Требуемый уровень доверия к пользователю',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'customer.recaptcha.secretKey',
  type: 'string',
  title: 'Секретный токен рекапчи приложения пользователя',
  required: false,
  hidden: true,
  editable: false,
}, {
  id: 'database.main.migration.uri',
  type: 'string',
  title: 'Строка подключения к основной базе для миграций (должна быть прямой строкой подключения к бд минуя pgbouncer, если он используется)',
  required: true,
  hidden: true,
  editable: false,
}, {
  id: 'database.main.readOnly.enabled',
  type: 'bool',
  title: 'Включена ли работа с запросами на чтение через отдельное подключение',
  required: true,
  hidden: false,
  editable: true,
}, {
  id: 'database.main.readOnly.uri',
  type: 'string',
  title: 'Строка подключения к основной базе только для чтения',
  required: false,
  hidden: true,
  editable: false,
}, {
  id: 'database.main.write.uri',
  type: 'string',
  title: 'Строка подключения к основной базе данных для записи',
  required: true,
  hidden: true,
  editable: false,
}, {
  id: 'es.cloudId',
  type: 'string',
  title: 'Идентификатор аккаунта в облачном сервисе ElasticSearch',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'es.enabled',
  type: 'bool',
  title: 'Эластик включен',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'es.node',
  type: 'string',
  title: 'Нода эластика',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'es.password',
  type: 'string',
  title: 'Пароль для авторизации в облачном сервисе ElasticSearch',
  required: false,
  hidden: true,
  editable: false,
}, {
  id: 'es.tls.rejectUnauthorized',
  type: 'bool',
  title: 'Запрещать невалидный ssl сертификат',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'es.username',
  type: 'string',
  title: 'Пользователь для авторизации в облачном сервисе ElasticSearch',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'graphql.playground.enabled',
  type: 'bool',
  title: 'Включение graphql playground (true | false)',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'kafka.auth.enabled',
  type: 'bool',
  title: 'Включена проверка аутентификации',
  required: true,
  hidden: false,
  editable: true,
}, {
  id: 'kafka.brokers',
  type: 'string',
  title: 'Список kafka блокеров',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'kafka.enabled',
  type: 'bool',
  title: 'Кафка включена',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'kafka.password',
  type: 'string',
  title: 'Пароль доступа в kafka',
  required: false,
  hidden: true,
  editable: false,
}, {
  id: 'kafka.queue.acks',
  type: 'int',
  title: '`-1`(all) все несинхронизированные реплики должны подтвердить (по умолчанию), `0` нет подтверждений, `1` только ждет подтверждения лидера',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'kafka.queue.defaultRetryTime',
  type: 'int',
  title: 'Время паузы после первой ошибки, например 20000 мс, потом оно увеличивается экспоненциально с мультипликатором 1.5',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'kafka.queue.maxAttemptsSize',
  type: 'int',
  title: 'Максимальное количество попыток обработки ошибки на сообщение',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'kafka.queue.stackSize',
  type: 'int',
  title: 'Количество сообщений, обрабатываемых параллельно',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'kafka.queue.supportedVersion',
  type: 'string',
  title: 'Поддерживаемые версии сообщения',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'kafka.queue.waitingInterruptTime',
  type: 'int',
  title: 'Время паузы в очереди ожидания, когда она прошла все сообщения, это чтобы она не крутила сообщения покругу без остановки ',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'kafka.ssl.enabled',
  type: 'bool',
  title: 'Включена работа по ssl',
  required: true,
  hidden: false,
  editable: true,
}, {
  id: 'kafka.ssl.rejectUnauthorized',
  type: 'bool',
  title: 'Запрещать невалидный ssl сертификат',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'kafka.username',
  type: 'string',
  title: 'Username доступа в kafka',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'keycloak.adm.clientId',
  type: 'string',
  title: 'ИДентификатор клиента keycloak для админки',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'keycloak.adm.realm',
  type: 'string',
  title: 'Реалм keycloak для админки',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'keycloak.adm.url',
  type: 'string',
  title: 'Хост keycloak для админки',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'keycloak.app.clientId',
  type: 'string',
  title: 'ИДентификатор клиента keycloak для приложения пользователя',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'keycloak.app.realm',
  type: 'string',
  title: 'Реалм keycloak для приложения пользователя',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'keycloak.app.url',
  type: 'string',
  title: 'Хост keycloak для приложения пользователя',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'logs.format',
  type: 'string',
  title: 'Формат логов (plain | json)',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'loki.url',
  type: 'string',
  title: 'Урл для доступа в Loki. Используется для запроса бизнес-логов',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 's3.accessKeyId',
  type: 'string',
  title: 'Идентификатор доступа для авторизации в S3',
  required: true,
  hidden: false,
  editable: true,
}, {
  id: 's3.bucket.emailFiles',
  type: 'string',
  title: 'Имя бакета для хранения файлов, отправленных на почту',
  required: true,
  hidden: false,
  editable: true,
}, {
  id: 's3.bucket.tmpFilesToDownload',
  type: 'string',
  title: 'Имя бакета для хранения временных файлов, созданных для скачивания пользователями',
  required: true,
  hidden: false,
  editable: true,
}, {
  id: 's3.endpoint',
  type: 'string',
  title: 'Эндпоинт S3, который использует бекенд',
  required: true,
  hidden: true,
  editable: false,
}, {
  id: 's3.region',
  type: 'string',
  title: 'Идентификатор доступа для авторизации в S3',
  required: true,
  hidden: false,
  editable: true,
}, {
  id: 's3.secretAccessKey',
  type: 'string',
  title: 'Секретный ключ для авторизации в S3',
  required: true,
  hidden: true,
  editable: false,
}, {
  id: 'sentry.dsn',
  type: 'string',
  title: 'Sentry dsn',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'smtp.from',
  type: 'string',
  title: 'Почтовый адрес, от имени которого следует отправлять письма',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'smtp.host',
  type: 'string',
  title: 'Хост почтового сервера',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'smtp.pass',
  type: 'string',
  title: 'Пароль пользователя для авторизации на почтовом сервере',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'smtp.port',
  type: 'int',
  title: 'Порт почтового сервера',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'smtp.rejectUnauthorized',
  type: 'bool',
  title: 'Реджектить ли невалидные сертификаты',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'smtp.secure',
  type: 'bool',
  title: 'Использовать ли tls',
  required: false,
  hidden: false,
  editable: true,
}, {
  id: 'smtp.user',
  type: 'string',
  title: 'Имя пользователя для авторизации на почтовом сервере',
  required: false,
  hidden: false,
  editable: true,
}];
