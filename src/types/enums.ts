export enum Role {
  Admin = 'admin',
  Manager = 'manager',
}

export enum Language {
  Russian = 'ru',
  English = 'en',
}

export enum RegistrarType {
}

export enum AppErrorCode {
  Unauthenticated = 'unauthenticated',
  BadCardNumber = 'badCardNumber',
  PasswordsDoNotMatch = 'passwordsDoNotMatch',
  ErrorOccurred = 'errorOccurred',
}

export enum MessageTemplate {
  Hello = 'hello',
  Custom = 'custom',
  NewRegistration = 'newRegistration',
  ResetPassword = 'resetPassword',
  PasswordChange = 'passwordChange',
  RestorePassword = 'restorePassword',
}
