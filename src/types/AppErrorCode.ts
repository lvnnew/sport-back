enum AppErrorCode {
  Unauthenticated = 'unauthenticated',
  BadCardNumber = 'badCardNumber',
  PasswordsDoNotMatch = 'passwordsDoNotMatch',
  ErrorOccurred = 'errorOccurred',

  Duplication = 'duplication',
  EmailNotVerified = 'emailNotVerified',
}

export default AppErrorCode;
