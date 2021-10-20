import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
  /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  UtcOffset: any;
  /**
   * A string representing a duration conforming to the ISO8601 standard,
   * such as: P1W1DT13H23M34S
   * P is the duration designator (for period) placed at the start of the duration representation.
   * Y is the year designator that follows the value for the number of years.
   * M is the month designator that follows the value for the number of months.
   * W is the week designator that follows the value for the number of weeks.
   * D is the day designator that follows the value for the number of days.
   * T is the time designator that precedes the time components of the representation.
   * H is the hour designator that follows the value for the number of hours.
   * M is the minute designator that follows the value for the number of minutes.
   * S is the second designator that follows the value for the number of seconds.
   *
   * Note the time designator, T, that precedes the time value.
   *
   * Matches moment.js, Luxon and DateFns implementations
   * ,/. is valid for decimal places and +/- is a valid prefix
   */
  Duration: any;
  /**
   * A string representing a duration conforming to the ISO8601 standard,
   * such as: P1W1DT13H23M34S
   * P is the duration designator (for period) placed at the start of the duration representation.
   * Y is the year designator that follows the value for the number of years.
   * M is the month designator that follows the value for the number of months.
   * W is the week designator that follows the value for the number of weeks.
   * D is the day designator that follows the value for the number of days.
   * T is the time designator that precedes the time components of the representation.
   * H is the hour designator that follows the value for the number of hours.
   * M is the minute designator that follows the value for the number of minutes.
   * S is the second designator that follows the value for the number of seconds.
   *
   * Note the time designator, T, that precedes the time value.
   *
   * Matches moment.js, Luxon and DateFns implementations
   * ,/. is valid for decimal places and +/- is a valid prefix
   */
  ISO8601Duration: any;
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block. */
  LocalEndTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** Floats that will have a value less than 0. */
  NegativeFloat: any;
  /** Integers that will have a value less than 0. */
  NegativeInt: any;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any;
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: any;
  /** Floats that will have a value of 0 or less. */
  NonPositiveFloat: any;
  /** Integers that will have a value of 0 or less. */
  NonPositiveInt: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
  /** Floats that will have a value greater than 0. */
  PositiveFloat: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: any;
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: any;
  /** Floats that will have a value of 0 or more. */
  UnsignedFloat: any;
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: any;
  /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
  Hexadecimal: any;
  /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
  HexColorCode: any;
  /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSL: any;
  /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSLA: any;
  /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
  IPv4: any;
  /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
  IPv6: any;
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: any;
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: any;
  /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
  MAC: any;
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: any;
  /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGB: any;
  /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGBA: any;
  /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
  SafeInt: any;
  /** A currency string, such as $21.25 */
  USCurrency: any;
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
  IBAN: any;
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: any;
  /** Represents NULL values */
  Void: any;
};

export type AppLogin = {
  __typename?: 'AppLogin';
  id: Scalars['Int'];
  login: Scalars['String'];
  passwordHash: Scalars['String'];
  userId: Scalars['Int'];
};

export type AppLoginFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  login?: Maybe<Scalars['String']>;
  login_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordHash?: Maybe<Scalars['String']>;
  passwordHash_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  userId?: Maybe<Scalars['Int']>;
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  AppLogin?: Maybe<AppLogin>;
  allAppLogins?: Maybe<Array<Maybe<AppLogin>>>;
  _allAppLoginsMeta?: Maybe<ListMetadata>;
  AuditLog?: Maybe<AuditLog>;
  allAuditLogs?: Maybe<Array<Maybe<AuditLog>>>;
  _allAuditLogsMeta?: Maybe<ListMetadata>;
  Delegation?: Maybe<Delegation>;
  allDelegations?: Maybe<Array<Maybe<Delegation>>>;
  _allDelegationsMeta?: Maybe<ListMetadata>;
  File?: Maybe<File>;
  allFiles?: Maybe<Array<Maybe<File>>>;
  _allFilesMeta?: Maybe<ListMetadata>;
  Language?: Maybe<Language>;
  allLanguages?: Maybe<Array<Maybe<Language>>>;
  _allLanguagesMeta?: Maybe<ListMetadata>;
  ManagerLogin?: Maybe<ManagerLogin>;
  allManagerLogins?: Maybe<Array<Maybe<ManagerLogin>>>;
  _allManagerLoginsMeta?: Maybe<ListMetadata>;
  Manager?: Maybe<Manager>;
  allManagers?: Maybe<Array<Maybe<Manager>>>;
  _allManagersMeta?: Maybe<ListMetadata>;
  ManagersToPermission?: Maybe<ManagersToPermission>;
  allManagersToPermissions?: Maybe<Array<Maybe<ManagersToPermission>>>;
  _allManagersToPermissionsMeta?: Maybe<ListMetadata>;
  ManagersToRole?: Maybe<ManagersToRole>;
  allManagersToRoles?: Maybe<Array<Maybe<ManagersToRole>>>;
  _allManagersToRolesMeta?: Maybe<ListMetadata>;
  MessageTemplate?: Maybe<MessageTemplate>;
  allMessageTemplates?: Maybe<Array<Maybe<MessageTemplate>>>;
  _allMessageTemplatesMeta?: Maybe<ListMetadata>;
  Meta?: Maybe<Scalars['JSONObject']>;
  Permission?: Maybe<Permission>;
  allPermissions?: Maybe<Array<Maybe<Permission>>>;
  _allPermissionsMeta?: Maybe<ListMetadata>;
  getPermissions: Array<Scalars['String']>;
  getPermissionsWithMeta: Array<Maybe<PermissionsWithMeta>>;
  getPermissionsOfManagerWithMeta: Array<Maybe<PermissionsWithMeta>>;
  Role?: Maybe<Role>;
  allRoles?: Maybe<Array<Maybe<Role>>>;
  _allRolesMeta?: Maybe<ListMetadata>;
  RolesToPermission?: Maybe<RolesToPermission>;
  allRolesToPermissions?: Maybe<Array<Maybe<RolesToPermission>>>;
  _allRolesToPermissionsMeta?: Maybe<ListMetadata>;
  Stat?: Maybe<Stat>;
  allStats?: Maybe<Array<Maybe<Stat>>>;
  _allStatsMeta?: Maybe<ListMetadata>;
  Tag?: Maybe<Tag>;
  allTags?: Maybe<Array<Maybe<Tag>>>;
  _allTagsMeta?: Maybe<ListMetadata>;
  Unit?: Maybe<Unit>;
  allUnits?: Maybe<Array<Maybe<Unit>>>;
  _allUnitsMeta?: Maybe<ListMetadata>;
  User?: Maybe<User>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  _allUsersMeta?: Maybe<ListMetadata>;
};


export type QueryAppLoginArgs = {
  id: Scalars['Int'];
};


export type QueryAllAppLoginsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<AppLoginFilter>;
};


export type Query_AllAppLoginsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<AppLoginFilter>;
};


export type QueryAuditLogArgs = {
  id: Scalars['Int'];
};


export type QueryAllAuditLogsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<AuditLogFilter>;
};


export type Query_AllAuditLogsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<AuditLogFilter>;
};


export type QueryDelegationArgs = {
  id: Scalars['Int'];
};


export type QueryAllDelegationsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<DelegationFilter>;
};


export type Query_AllDelegationsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<DelegationFilter>;
};


export type QueryFileArgs = {
  id: Scalars['Int'];
};


export type QueryAllFilesArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<FileFilter>;
};


export type Query_AllFilesMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FileFilter>;
};


export type QueryLanguageArgs = {
  id: Scalars['ID'];
};


export type QueryAllLanguagesArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<LanguageFilter>;
};


export type Query_AllLanguagesMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<LanguageFilter>;
};


export type QueryManagerLoginArgs = {
  id: Scalars['Int'];
};


export type QueryAllManagerLoginsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<ManagerLoginFilter>;
};


export type Query_AllManagerLoginsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<ManagerLoginFilter>;
};


export type QueryManagerArgs = {
  id: Scalars['Int'];
};


export type QueryAllManagersArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<ManagerFilter>;
};


export type Query_AllManagersMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<ManagerFilter>;
};


export type QueryManagersToPermissionArgs = {
  id: Scalars['Int'];
};


export type QueryAllManagersToPermissionsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<ManagersToPermissionFilter>;
};


export type Query_AllManagersToPermissionsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<ManagersToPermissionFilter>;
};


export type QueryManagersToRoleArgs = {
  id: Scalars['Int'];
};


export type QueryAllManagersToRolesArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<ManagersToRoleFilter>;
};


export type Query_AllManagersToRolesMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<ManagersToRoleFilter>;
};


export type QueryMessageTemplateArgs = {
  id: Scalars['ID'];
};


export type QueryAllMessageTemplatesArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<MessageTemplateFilter>;
};


export type Query_AllMessageTemplatesMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<MessageTemplateFilter>;
};


export type QueryPermissionArgs = {
  id: Scalars['ID'];
};


export type QueryAllPermissionsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<PermissionFilter>;
};


export type Query_AllPermissionsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<PermissionFilter>;
};


export type QueryGetPermissionsOfManagerWithMetaArgs = {
  managerId: Scalars['Int'];
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryAllRolesArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<RoleFilter>;
};


export type Query_AllRolesMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<RoleFilter>;
};


export type QueryRolesToPermissionArgs = {
  id: Scalars['Int'];
};


export type QueryAllRolesToPermissionsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<RolesToPermissionFilter>;
};


export type Query_AllRolesToPermissionsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<RolesToPermissionFilter>;
};


export type QueryStatArgs = {
  id: Scalars['ID'];
};


export type QueryAllStatsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<StatFilter>;
};


export type Query_AllStatsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<StatFilter>;
};


export type QueryTagArgs = {
  id: Scalars['Int'];
};


export type QueryAllTagsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<TagFilter>;
};


export type Query_AllTagsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<TagFilter>;
};


export type QueryUnitArgs = {
  id: Scalars['Int'];
};


export type QueryAllUnitsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<UnitFilter>;
};


export type Query_AllUnitsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<UnitFilter>;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryAllUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<UserFilter>;
};


export type Query_AllUsersMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<UserFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAppLogin?: Maybe<AppLogin>;
  updateAppLogin?: Maybe<AppLogin>;
  removeAppLogin?: Maybe<Scalars['Boolean']>;
  createAuditLog?: Maybe<AuditLog>;
  updateAuditLog?: Maybe<AuditLog>;
  removeAuditLog?: Maybe<Scalars['Boolean']>;
  createDelegation?: Maybe<Delegation>;
  updateDelegation?: Maybe<Delegation>;
  removeDelegation?: Maybe<Scalars['Boolean']>;
  createFile?: Maybe<File>;
  updateFile?: Maybe<File>;
  removeFile?: Maybe<Scalars['Boolean']>;
  createLanguage?: Maybe<Language>;
  updateLanguage?: Maybe<Language>;
  removeLanguage?: Maybe<Scalars['Boolean']>;
  createManagerLogin?: Maybe<ManagerLogin>;
  updateManagerLogin?: Maybe<ManagerLogin>;
  removeManagerLogin?: Maybe<Scalars['Boolean']>;
  createManager?: Maybe<Manager>;
  updateManager?: Maybe<Manager>;
  removeManager?: Maybe<Scalars['Boolean']>;
  createManagersToPermission?: Maybe<ManagersToPermission>;
  updateManagersToPermission?: Maybe<ManagersToPermission>;
  removeManagersToPermission?: Maybe<Scalars['Boolean']>;
  createManagersToRole?: Maybe<ManagersToRole>;
  updateManagersToRole?: Maybe<ManagersToRole>;
  removeManagersToRole?: Maybe<Scalars['Boolean']>;
  createMessageTemplate?: Maybe<MessageTemplate>;
  updateMessageTemplate?: Maybe<MessageTemplate>;
  removeMessageTemplate?: Maybe<Scalars['Boolean']>;
  createPermission?: Maybe<Permission>;
  updatePermission?: Maybe<Permission>;
  removePermission?: Maybe<Scalars['Boolean']>;
  createRole?: Maybe<Role>;
  updateRole?: Maybe<Role>;
  removeRole?: Maybe<Scalars['Boolean']>;
  createRolesToPermission?: Maybe<RolesToPermission>;
  updateRolesToPermission?: Maybe<RolesToPermission>;
  removeRolesToPermission?: Maybe<Scalars['Boolean']>;
  recalculateStat?: Maybe<Scalars['Void']>;
  createStat?: Maybe<Stat>;
  updateStat?: Maybe<Stat>;
  removeStat?: Maybe<Scalars['Boolean']>;
  createTag?: Maybe<Tag>;
  updateTag?: Maybe<Tag>;
  removeTag?: Maybe<Scalars['Boolean']>;
  createUnit?: Maybe<Unit>;
  updateUnit?: Maybe<Unit>;
  removeUnit?: Maybe<Scalars['Boolean']>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  removeUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateAppLoginArgs = {
  login: Scalars['String'];
  passwordHash: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationUpdateAppLoginArgs = {
  id: Scalars['Int'];
  login: Scalars['String'];
  passwordHash: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationRemoveAppLoginArgs = {
  id: Scalars['Int'];
};


export type MutationCreateAuditLogArgs = {
  date: Scalars['Date'];
  title: Scalars['String'];
  entityType: Scalars['String'];
  entityId: Scalars['String'];
  action: Scalars['String'];
  managerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  foreign?: Maybe<Scalars['Boolean']>;
  foreignEntityType?: Maybe<Scalars['String']>;
  foreignEntityId?: Maybe<Scalars['String']>;
  actionData?: Maybe<Scalars['String']>;
};


export type MutationUpdateAuditLogArgs = {
  id: Scalars['Int'];
  date: Scalars['Date'];
  title: Scalars['String'];
  entityType: Scalars['String'];
  entityId: Scalars['String'];
  action: Scalars['String'];
  managerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  foreign?: Maybe<Scalars['Boolean']>;
  foreignEntityType?: Maybe<Scalars['String']>;
  foreignEntityId?: Maybe<Scalars['String']>;
  actionData?: Maybe<Scalars['String']>;
};


export type MutationRemoveAuditLogArgs = {
  id: Scalars['Int'];
};


export type MutationCreateDelegationArgs = {
  fromId: Scalars['Int'];
  toId: Scalars['Int'];
  expiresAt?: Maybe<Scalars['Date']>;
  active: Scalars['Boolean'];
};


export type MutationUpdateDelegationArgs = {
  id: Scalars['Int'];
  fromId: Scalars['Int'];
  toId: Scalars['Int'];
  expiresAt?: Maybe<Scalars['Date']>;
  active: Scalars['Boolean'];
};


export type MutationRemoveDelegationArgs = {
  id: Scalars['Int'];
};


export type MutationCreateFileArgs = {
  originalName: Scalars['String'];
  url: Scalars['String'];
  mimetype: Scalars['String'];
  s3Key: Scalars['String'];
  eTag: Scalars['String'];
};


export type MutationUpdateFileArgs = {
  id: Scalars['Int'];
  originalName: Scalars['String'];
  url: Scalars['String'];
  mimetype: Scalars['String'];
  s3Key: Scalars['String'];
  eTag: Scalars['String'];
};


export type MutationRemoveFileArgs = {
  id: Scalars['Int'];
};


export type MutationCreateLanguageArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type MutationUpdateLanguageArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type MutationRemoveLanguageArgs = {
  id: Scalars['ID'];
};


export type MutationCreateManagerLoginArgs = {
  login: Scalars['String'];
  passwordHash: Scalars['String'];
  role: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  initialPasswordChanged: Scalars['Boolean'];
  locked: Scalars['Boolean'];
  managerId: Scalars['Int'];
};


export type MutationUpdateManagerLoginArgs = {
  id: Scalars['Int'];
  login: Scalars['String'];
  passwordHash: Scalars['String'];
  role: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  initialPasswordChanged: Scalars['Boolean'];
  locked: Scalars['Boolean'];
  managerId: Scalars['Int'];
};


export type MutationRemoveManagerLoginArgs = {
  id: Scalars['Int'];
};


export type MutationCreateManagerArgs = {
  title?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  languageId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  telegramLogin?: Maybe<Scalars['String']>;
  unitId?: Maybe<Scalars['Int']>;
  headOfUnit: Scalars['Boolean'];
  active: Scalars['Boolean'];
};


export type MutationUpdateManagerArgs = {
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  languageId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  telegramLogin?: Maybe<Scalars['String']>;
  unitId?: Maybe<Scalars['Int']>;
  headOfUnit: Scalars['Boolean'];
  active: Scalars['Boolean'];
};


export type MutationRemoveManagerArgs = {
  id: Scalars['Int'];
};


export type MutationCreateManagersToPermissionArgs = {
  managerId: Scalars['Int'];
  permissionId: Scalars['String'];
};


export type MutationUpdateManagersToPermissionArgs = {
  id: Scalars['Int'];
  managerId: Scalars['Int'];
  permissionId: Scalars['String'];
};


export type MutationRemoveManagersToPermissionArgs = {
  id: Scalars['Int'];
};


export type MutationCreateManagersToRoleArgs = {
  managerId: Scalars['Int'];
  roleId: Scalars['String'];
};


export type MutationUpdateManagersToRoleArgs = {
  id: Scalars['Int'];
  managerId: Scalars['Int'];
  roleId: Scalars['String'];
};


export type MutationRemoveManagersToRoleArgs = {
  id: Scalars['Int'];
};


export type MutationCreateMessageTemplateArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  secretData: Scalars['Boolean'];
};


export type MutationUpdateMessageTemplateArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  secretData: Scalars['Boolean'];
};


export type MutationRemoveMessageTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePermissionArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type MutationRemovePermissionArgs = {
  id: Scalars['ID'];
};


export type MutationCreateRoleArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  hasFullAccess?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  hasFullAccess?: Maybe<Scalars['Boolean']>;
};


export type MutationRemoveRoleArgs = {
  id: Scalars['ID'];
};


export type MutationCreateRolesToPermissionArgs = {
  roleId: Scalars['String'];
  permissionId: Scalars['String'];
};


export type MutationUpdateRolesToPermissionArgs = {
  id: Scalars['Int'];
  roleId: Scalars['String'];
  permissionId: Scalars['String'];
};


export type MutationRemoveRolesToPermissionArgs = {
  id: Scalars['Int'];
};


export type MutationCreateStatArgs = {
  id: Scalars['ID'];
  updated?: Maybe<Scalars['DateTime']>;
  helloCount?: Maybe<Scalars['Int']>;
};


export type MutationUpdateStatArgs = {
  id: Scalars['ID'];
  updated?: Maybe<Scalars['DateTime']>;
  helloCount?: Maybe<Scalars['Int']>;
};


export type MutationRemoveStatArgs = {
  id: Scalars['ID'];
};


export type MutationCreateTagArgs = {
  comment?: Maybe<Scalars['String']>;
};


export type MutationUpdateTagArgs = {
  id: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
};


export type MutationRemoveTagArgs = {
  id: Scalars['Int'];
};


export type MutationCreateUnitArgs = {
  title?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
};


export type MutationUpdateUnitArgs = {
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
};


export type MutationRemoveUnitArgs = {
  id: Scalars['Int'];
};


export type MutationCreateUserArgs = {
  title?: Maybe<Scalars['String']>;
  lastname: Scalars['String'];
  firstname: Scalars['String'];
  email: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  lastname: Scalars['String'];
  firstname: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};

export type AuditLog = {
  __typename?: 'AuditLog';
  id: Scalars['Int'];
  date: Scalars['Date'];
  title: Scalars['String'];
  entityType: Scalars['String'];
  entityId: Scalars['String'];
  action: Scalars['String'];
  managerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  foreign?: Maybe<Scalars['Boolean']>;
  foreignEntityType?: Maybe<Scalars['String']>;
  foreignEntityId?: Maybe<Scalars['String']>;
  actionData?: Maybe<Scalars['String']>;
};

export type AuditLogFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  date_lte?: Maybe<Scalars['Date']>;
  date_gte?: Maybe<Scalars['Date']>;
  date_lt?: Maybe<Scalars['Date']>;
  date_gt?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  entityType?: Maybe<Scalars['String']>;
  entityType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  entityId?: Maybe<Scalars['String']>;
  entityId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  action?: Maybe<Scalars['String']>;
  action_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  managerId?: Maybe<Scalars['Int']>;
  managerId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  userId?: Maybe<Scalars['Int']>;
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  foreign?: Maybe<Scalars['Boolean']>;
  foreignEntityType?: Maybe<Scalars['String']>;
  foreignEntityType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  foreignEntityId?: Maybe<Scalars['String']>;
  foreignEntityId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  actionData?: Maybe<Scalars['String']>;
  actionData_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Delegation = {
  __typename?: 'Delegation';
  id: Scalars['Int'];
  fromId: Scalars['Int'];
  toId: Scalars['Int'];
  expiresAt?: Maybe<Scalars['Date']>;
  active: Scalars['Boolean'];
};

export type DelegationFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  fromId?: Maybe<Scalars['Int']>;
  fromId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toId?: Maybe<Scalars['Int']>;
  toId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  expiresAt?: Maybe<Scalars['Date']>;
  expiresAt_lte?: Maybe<Scalars['Date']>;
  expiresAt_gte?: Maybe<Scalars['Date']>;
  expiresAt_lt?: Maybe<Scalars['Date']>;
  expiresAt_gt?: Maybe<Scalars['Date']>;
  active?: Maybe<Scalars['Boolean']>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['Int'];
  originalName: Scalars['String'];
  url: Scalars['String'];
  mimetype: Scalars['String'];
  s3Key: Scalars['String'];
  eTag: Scalars['String'];
};

export type FileFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  originalName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  mimetype?: Maybe<Scalars['String']>;
  mimetype_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  s3Key?: Maybe<Scalars['String']>;
  s3Key_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eTag?: Maybe<Scalars['String']>;
  eTag_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type LanguageFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ManagerLogin = {
  __typename?: 'ManagerLogin';
  id: Scalars['Int'];
  login: Scalars['String'];
  passwordHash: Scalars['String'];
  role: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  initialPasswordChanged: Scalars['Boolean'];
  locked: Scalars['Boolean'];
  managerId: Scalars['Int'];
};

export type ManagerLoginFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  login?: Maybe<Scalars['String']>;
  login_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordHash?: Maybe<Scalars['String']>;
  passwordHash_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  role?: Maybe<Scalars['String']>;
  role_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  initialPasswordChanged?: Maybe<Scalars['Boolean']>;
  locked?: Maybe<Scalars['Boolean']>;
  managerId?: Maybe<Scalars['Int']>;
  managerId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Manager = {
  __typename?: 'Manager';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  languageId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  telegramLogin?: Maybe<Scalars['String']>;
  unitId?: Maybe<Scalars['Int']>;
  headOfUnit: Scalars['Boolean'];
  active: Scalars['Boolean'];
};

export type ManagerFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  languageId?: Maybe<Scalars['String']>;
  languageId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  telegramLogin?: Maybe<Scalars['String']>;
  telegramLogin_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  unitId?: Maybe<Scalars['Int']>;
  unitId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  headOfUnit?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
};

export type ManagersToPermission = {
  __typename?: 'ManagersToPermission';
  id: Scalars['Int'];
  managerId: Scalars['Int'];
  permissionId: Scalars['String'];
};

export type ManagersToPermissionFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  managerId?: Maybe<Scalars['Int']>;
  managerId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  permissionId?: Maybe<Scalars['String']>;
  permissionId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ManagersToRole = {
  __typename?: 'ManagersToRole';
  id: Scalars['Int'];
  managerId: Scalars['Int'];
  roleId: Scalars['String'];
};

export type ManagersToRoleFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  managerId?: Maybe<Scalars['Int']>;
  managerId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  roleId?: Maybe<Scalars['String']>;
  roleId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MessageTemplate = {
  __typename?: 'MessageTemplate';
  id: Scalars['ID'];
  title: Scalars['String'];
  secretData: Scalars['Boolean'];
};

export type MessageTemplateFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  secretData?: Maybe<Scalars['Boolean']>;
};

export type Permission = {
  __typename?: 'Permission';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type PermissionFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PermissionsWithMeta = {
  __typename?: 'PermissionsWithMeta';
  permissionId: Scalars['String'];
  byRoles: Array<Maybe<Scalars['String']>>;
  directly: Scalars['Boolean'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  hasFullAccess?: Maybe<Scalars['Boolean']>;
};

export type RoleFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  hasFullAccess?: Maybe<Scalars['Boolean']>;
};

export type RolesToPermission = {
  __typename?: 'RolesToPermission';
  id: Scalars['Int'];
  roleId: Scalars['String'];
  permissionId: Scalars['String'];
};

export type RolesToPermissionFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  roleId?: Maybe<Scalars['String']>;
  roleId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  permissionId?: Maybe<Scalars['String']>;
  permissionId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Stat = {
  __typename?: 'Stat';
  id: Scalars['ID'];
  updated?: Maybe<Scalars['DateTime']>;
  helloCount?: Maybe<Scalars['Int']>;
};

export type StatFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  updated?: Maybe<Scalars['DateTime']>;
  updated_lte?: Maybe<Scalars['DateTime']>;
  updated_gte?: Maybe<Scalars['DateTime']>;
  updated_lt?: Maybe<Scalars['DateTime']>;
  updated_gt?: Maybe<Scalars['DateTime']>;
  helloCount?: Maybe<Scalars['Int']>;
  helloCount_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  helloCount_lte?: Maybe<Scalars['Int']>;
  helloCount_gte?: Maybe<Scalars['Int']>;
  helloCount_lt?: Maybe<Scalars['Int']>;
  helloCount_gt?: Maybe<Scalars['Int']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
};

export type TagFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  comment_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Unit = {
  __typename?: 'Unit';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
};

export type UnitFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  parentId?: Maybe<Scalars['Int']>;
  parentId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  lastname: Scalars['String'];
  firstname: Scalars['String'];
  email: Scalars['String'];
};

export type UserFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastname?: Maybe<Scalars['String']>;
  lastname_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstname?: Maybe<Scalars['String']>;
  firstname_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  UtcOffset: ResolverTypeWrapper<Scalars['UtcOffset']>;
  Duration: ResolverTypeWrapper<Scalars['Duration']>;
  ISO8601Duration: ResolverTypeWrapper<Scalars['ISO8601Duration']>;
  LocalDate: ResolverTypeWrapper<Scalars['LocalDate']>;
  LocalTime: ResolverTypeWrapper<Scalars['LocalTime']>;
  LocalEndTime: ResolverTypeWrapper<Scalars['LocalEndTime']>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  NegativeFloat: ResolverTypeWrapper<Scalars['NegativeFloat']>;
  NegativeInt: ResolverTypeWrapper<Scalars['NegativeInt']>;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars['NonNegativeFloat']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']>;
  NonPositiveFloat: ResolverTypeWrapper<Scalars['NonPositiveFloat']>;
  NonPositiveInt: ResolverTypeWrapper<Scalars['NonPositiveInt']>;
  PhoneNumber: ResolverTypeWrapper<Scalars['PhoneNumber']>;
  PositiveFloat: ResolverTypeWrapper<Scalars['PositiveFloat']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']>;
  PostalCode: ResolverTypeWrapper<Scalars['PostalCode']>;
  UnsignedFloat: ResolverTypeWrapper<Scalars['UnsignedFloat']>;
  UnsignedInt: ResolverTypeWrapper<Scalars['UnsignedInt']>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Byte: ResolverTypeWrapper<Scalars['Byte']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
  GUID: ResolverTypeWrapper<Scalars['GUID']>;
  Hexadecimal: ResolverTypeWrapper<Scalars['Hexadecimal']>;
  HexColorCode: ResolverTypeWrapper<Scalars['HexColorCode']>;
  HSL: ResolverTypeWrapper<Scalars['HSL']>;
  HSLA: ResolverTypeWrapper<Scalars['HSLA']>;
  IPv4: ResolverTypeWrapper<Scalars['IPv4']>;
  IPv6: ResolverTypeWrapper<Scalars['IPv6']>;
  ISBN: ResolverTypeWrapper<Scalars['ISBN']>;
  JWT: ResolverTypeWrapper<Scalars['JWT']>;
  Latitude: ResolverTypeWrapper<Scalars['Latitude']>;
  Longitude: ResolverTypeWrapper<Scalars['Longitude']>;
  MAC: ResolverTypeWrapper<Scalars['MAC']>;
  Port: ResolverTypeWrapper<Scalars['Port']>;
  RGB: ResolverTypeWrapper<Scalars['RGB']>;
  RGBA: ResolverTypeWrapper<Scalars['RGBA']>;
  SafeInt: ResolverTypeWrapper<Scalars['SafeInt']>;
  USCurrency: ResolverTypeWrapper<Scalars['USCurrency']>;
  Currency: ResolverTypeWrapper<Scalars['Currency']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  IBAN: ResolverTypeWrapper<Scalars['IBAN']>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']>;
  Void: ResolverTypeWrapper<Scalars['Void']>;
  AppLogin: ResolverTypeWrapper<AppLogin>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AppLoginFilter: AppLoginFilter;
  ListMetadata: ResolverTypeWrapper<ListMetadata>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AuditLog: ResolverTypeWrapper<AuditLog>;
  AuditLogFilter: AuditLogFilter;
  Delegation: ResolverTypeWrapper<Delegation>;
  DelegationFilter: DelegationFilter;
  File: ResolverTypeWrapper<File>;
  FileFilter: FileFilter;
  Language: ResolverTypeWrapper<Language>;
  LanguageFilter: LanguageFilter;
  ManagerLogin: ResolverTypeWrapper<ManagerLogin>;
  ManagerLoginFilter: ManagerLoginFilter;
  Manager: ResolverTypeWrapper<Manager>;
  ManagerFilter: ManagerFilter;
  ManagersToPermission: ResolverTypeWrapper<ManagersToPermission>;
  ManagersToPermissionFilter: ManagersToPermissionFilter;
  ManagersToRole: ResolverTypeWrapper<ManagersToRole>;
  ManagersToRoleFilter: ManagersToRoleFilter;
  MessageTemplate: ResolverTypeWrapper<MessageTemplate>;
  MessageTemplateFilter: MessageTemplateFilter;
  Permission: ResolverTypeWrapper<Permission>;
  PermissionFilter: PermissionFilter;
  PermissionsWithMeta: ResolverTypeWrapper<PermissionsWithMeta>;
  Role: ResolverTypeWrapper<Role>;
  RoleFilter: RoleFilter;
  RolesToPermission: ResolverTypeWrapper<RolesToPermission>;
  RolesToPermissionFilter: RolesToPermissionFilter;
  Stat: ResolverTypeWrapper<Stat>;
  StatFilter: StatFilter;
  Tag: ResolverTypeWrapper<Tag>;
  TagFilter: TagFilter;
  Unit: ResolverTypeWrapper<Unit>;
  UnitFilter: UnitFilter;
  User: ResolverTypeWrapper<User>;
  UserFilter: UserFilter;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Date: Scalars['Date'];
  Time: Scalars['Time'];
  DateTime: Scalars['DateTime'];
  Timestamp: Scalars['Timestamp'];
  UtcOffset: Scalars['UtcOffset'];
  Duration: Scalars['Duration'];
  ISO8601Duration: Scalars['ISO8601Duration'];
  LocalDate: Scalars['LocalDate'];
  LocalTime: Scalars['LocalTime'];
  LocalEndTime: Scalars['LocalEndTime'];
  EmailAddress: Scalars['EmailAddress'];
  NegativeFloat: Scalars['NegativeFloat'];
  NegativeInt: Scalars['NegativeInt'];
  NonEmptyString: Scalars['NonEmptyString'];
  NonNegativeFloat: Scalars['NonNegativeFloat'];
  NonNegativeInt: Scalars['NonNegativeInt'];
  NonPositiveFloat: Scalars['NonPositiveFloat'];
  NonPositiveInt: Scalars['NonPositiveInt'];
  PhoneNumber: Scalars['PhoneNumber'];
  PositiveFloat: Scalars['PositiveFloat'];
  PositiveInt: Scalars['PositiveInt'];
  PostalCode: Scalars['PostalCode'];
  UnsignedFloat: Scalars['UnsignedFloat'];
  UnsignedInt: Scalars['UnsignedInt'];
  URL: Scalars['URL'];
  BigInt: Scalars['BigInt'];
  Long: Scalars['Long'];
  Byte: Scalars['Byte'];
  UUID: Scalars['UUID'];
  GUID: Scalars['GUID'];
  Hexadecimal: Scalars['Hexadecimal'];
  HexColorCode: Scalars['HexColorCode'];
  HSL: Scalars['HSL'];
  HSLA: Scalars['HSLA'];
  IPv4: Scalars['IPv4'];
  IPv6: Scalars['IPv6'];
  ISBN: Scalars['ISBN'];
  JWT: Scalars['JWT'];
  Latitude: Scalars['Latitude'];
  Longitude: Scalars['Longitude'];
  MAC: Scalars['MAC'];
  Port: Scalars['Port'];
  RGB: Scalars['RGB'];
  RGBA: Scalars['RGBA'];
  SafeInt: Scalars['SafeInt'];
  USCurrency: Scalars['USCurrency'];
  Currency: Scalars['Currency'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  IBAN: Scalars['IBAN'];
  ObjectID: Scalars['ObjectID'];
  Void: Scalars['Void'];
  AppLogin: AppLogin;
  Int: Scalars['Int'];
  String: Scalars['String'];
  AppLoginFilter: AppLoginFilter;
  ListMetadata: ListMetadata;
  Query: {};
  ID: Scalars['ID'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
  AuditLog: AuditLog;
  AuditLogFilter: AuditLogFilter;
  Delegation: Delegation;
  DelegationFilter: DelegationFilter;
  File: File;
  FileFilter: FileFilter;
  Language: Language;
  LanguageFilter: LanguageFilter;
  ManagerLogin: ManagerLogin;
  ManagerLoginFilter: ManagerLoginFilter;
  Manager: Manager;
  ManagerFilter: ManagerFilter;
  ManagersToPermission: ManagersToPermission;
  ManagersToPermissionFilter: ManagersToPermissionFilter;
  ManagersToRole: ManagersToRole;
  ManagersToRoleFilter: ManagersToRoleFilter;
  MessageTemplate: MessageTemplate;
  MessageTemplateFilter: MessageTemplateFilter;
  Permission: Permission;
  PermissionFilter: PermissionFilter;
  PermissionsWithMeta: PermissionsWithMeta;
  Role: Role;
  RoleFilter: RoleFilter;
  RolesToPermission: RolesToPermission;
  RolesToPermissionFilter: RolesToPermissionFilter;
  Stat: Stat;
  StatFilter: StatFilter;
  Tag: Tag;
  TagFilter: TagFilter;
  Unit: Unit;
  UnitFilter: UnitFilter;
  User: User;
  UserFilter: UserFilter;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export interface UtcOffsetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UtcOffset'], any> {
  name: 'UtcOffset';
}

export interface DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Duration'], any> {
  name: 'Duration';
}

export interface Iso8601DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Duration'], any> {
  name: 'ISO8601Duration';
}

export interface LocalDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalDate'], any> {
  name: 'LocalDate';
}

export interface LocalTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalTime'], any> {
  name: 'LocalTime';
}

export interface LocalEndTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalEndTime'], any> {
  name: 'LocalEndTime';
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export interface NegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeFloat'], any> {
  name: 'NegativeFloat';
}

export interface NegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeInt'], any> {
  name: 'NegativeInt';
}

export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString';
}

export interface NonNegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeFloat'], any> {
  name: 'NonNegativeFloat';
}

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export interface NonPositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveFloat'], any> {
  name: 'NonPositiveFloat';
}

export interface NonPositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveInt'], any> {
  name: 'NonPositiveInt';
}

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber';
}

export interface PositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveFloat'], any> {
  name: 'PositiveFloat';
}

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt';
}

export interface PostalCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PostalCode'], any> {
  name: 'PostalCode';
}

export interface UnsignedFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedFloat'], any> {
  name: 'UnsignedFloat';
}

export interface UnsignedIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedInt'], any> {
  name: 'UnsignedInt';
}

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID';
}

export interface HexadecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hexadecimal'], any> {
  name: 'Hexadecimal';
}

export interface HexColorCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColorCode'], any> {
  name: 'HexColorCode';
}

export interface HslScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSL'], any> {
  name: 'HSL';
}

export interface HslaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSLA'], any> {
  name: 'HSLA';
}

export interface IPv4ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv4'], any> {
  name: 'IPv4';
}

export interface IPv6ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv6'], any> {
  name: 'IPv6';
}

export interface IsbnScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISBN'], any> {
  name: 'ISBN';
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JWT'], any> {
  name: 'JWT';
}

export interface LatitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Latitude'], any> {
  name: 'Latitude';
}

export interface LongitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Longitude'], any> {
  name: 'Longitude';
}

export interface MacScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MAC'], any> {
  name: 'MAC';
}

export interface PortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Port'], any> {
  name: 'Port';
}

export interface RgbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGB'], any> {
  name: 'RGB';
}

export interface RgbaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBA'], any> {
  name: 'RGBA';
}

export interface SafeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SafeInt'], any> {
  name: 'SafeInt';
}

export interface UsCurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['USCurrency'], any> {
  name: 'USCurrency';
}

export interface CurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Currency'], any> {
  name: 'Currency';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export interface IbanScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IBAN'], any> {
  name: 'IBAN';
}

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type AppLoginResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppLogin'] = ResolversParentTypes['AppLogin']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListMetadata'] = ResolversParentTypes['ListMetadata']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  AppLogin?: Resolver<Maybe<ResolversTypes['AppLogin']>, ParentType, ContextType, RequireFields<QueryAppLoginArgs, 'id'>>;
  allAppLogins?: Resolver<Maybe<Array<Maybe<ResolversTypes['AppLogin']>>>, ParentType, ContextType, RequireFields<QueryAllAppLoginsArgs, never>>;
  _allAppLoginsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllAppLoginsMetaArgs, never>>;
  AuditLog?: Resolver<Maybe<ResolversTypes['AuditLog']>, ParentType, ContextType, RequireFields<QueryAuditLogArgs, 'id'>>;
  allAuditLogs?: Resolver<Maybe<Array<Maybe<ResolversTypes['AuditLog']>>>, ParentType, ContextType, RequireFields<QueryAllAuditLogsArgs, never>>;
  _allAuditLogsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllAuditLogsMetaArgs, never>>;
  Delegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<QueryDelegationArgs, 'id'>>;
  allDelegations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Delegation']>>>, ParentType, ContextType, RequireFields<QueryAllDelegationsArgs, never>>;
  _allDelegationsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllDelegationsMetaArgs, never>>;
  File?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<QueryFileArgs, 'id'>>;
  allFiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['File']>>>, ParentType, ContextType, RequireFields<QueryAllFilesArgs, never>>;
  _allFilesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllFilesMetaArgs, never>>;
  Language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<QueryLanguageArgs, 'id'>>;
  allLanguages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Language']>>>, ParentType, ContextType, RequireFields<QueryAllLanguagesArgs, never>>;
  _allLanguagesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllLanguagesMetaArgs, never>>;
  ManagerLogin?: Resolver<Maybe<ResolversTypes['ManagerLogin']>, ParentType, ContextType, RequireFields<QueryManagerLoginArgs, 'id'>>;
  allManagerLogins?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManagerLogin']>>>, ParentType, ContextType, RequireFields<QueryAllManagerLoginsArgs, never>>;
  _allManagerLoginsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllManagerLoginsMetaArgs, never>>;
  Manager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<QueryManagerArgs, 'id'>>;
  allManagers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Manager']>>>, ParentType, ContextType, RequireFields<QueryAllManagersArgs, never>>;
  _allManagersMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllManagersMetaArgs, never>>;
  ManagersToPermission?: Resolver<Maybe<ResolversTypes['ManagersToPermission']>, ParentType, ContextType, RequireFields<QueryManagersToPermissionArgs, 'id'>>;
  allManagersToPermissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManagersToPermission']>>>, ParentType, ContextType, RequireFields<QueryAllManagersToPermissionsArgs, never>>;
  _allManagersToPermissionsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllManagersToPermissionsMetaArgs, never>>;
  ManagersToRole?: Resolver<Maybe<ResolversTypes['ManagersToRole']>, ParentType, ContextType, RequireFields<QueryManagersToRoleArgs, 'id'>>;
  allManagersToRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManagersToRole']>>>, ParentType, ContextType, RequireFields<QueryAllManagersToRolesArgs, never>>;
  _allManagersToRolesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllManagersToRolesMetaArgs, never>>;
  MessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<QueryMessageTemplateArgs, 'id'>>;
  allMessageTemplates?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageTemplate']>>>, ParentType, ContextType, RequireFields<QueryAllMessageTemplatesArgs, never>>;
  _allMessageTemplatesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllMessageTemplatesMetaArgs, never>>;
  Meta?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  Permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<QueryPermissionArgs, 'id'>>;
  allPermissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Permission']>>>, ParentType, ContextType, RequireFields<QueryAllPermissionsArgs, never>>;
  _allPermissionsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllPermissionsMetaArgs, never>>;
  getPermissions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  getPermissionsWithMeta?: Resolver<Array<Maybe<ResolversTypes['PermissionsWithMeta']>>, ParentType, ContextType>;
  getPermissionsOfManagerWithMeta?: Resolver<Array<Maybe<ResolversTypes['PermissionsWithMeta']>>, ParentType, ContextType, RequireFields<QueryGetPermissionsOfManagerWithMetaArgs, 'managerId'>>;
  Role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<QueryRoleArgs, 'id'>>;
  allRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Role']>>>, ParentType, ContextType, RequireFields<QueryAllRolesArgs, never>>;
  _allRolesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllRolesMetaArgs, never>>;
  RolesToPermission?: Resolver<Maybe<ResolversTypes['RolesToPermission']>, ParentType, ContextType, RequireFields<QueryRolesToPermissionArgs, 'id'>>;
  allRolesToPermissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['RolesToPermission']>>>, ParentType, ContextType, RequireFields<QueryAllRolesToPermissionsArgs, never>>;
  _allRolesToPermissionsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllRolesToPermissionsMetaArgs, never>>;
  Stat?: Resolver<Maybe<ResolversTypes['Stat']>, ParentType, ContextType, RequireFields<QueryStatArgs, 'id'>>;
  allStats?: Resolver<Maybe<Array<Maybe<ResolversTypes['Stat']>>>, ParentType, ContextType, RequireFields<QueryAllStatsArgs, never>>;
  _allStatsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllStatsMetaArgs, never>>;
  Tag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QueryTagArgs, 'id'>>;
  allTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<QueryAllTagsArgs, never>>;
  _allTagsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllTagsMetaArgs, never>>;
  Unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<QueryUnitArgs, 'id'>>;
  allUnits?: Resolver<Maybe<Array<Maybe<ResolversTypes['Unit']>>>, ParentType, ContextType, RequireFields<QueryAllUnitsArgs, never>>;
  _allUnitsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllUnitsMetaArgs, never>>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  allUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryAllUsersArgs, never>>;
  _allUsersMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllUsersMetaArgs, never>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAppLogin?: Resolver<Maybe<ResolversTypes['AppLogin']>, ParentType, ContextType, RequireFields<MutationCreateAppLoginArgs, 'login' | 'passwordHash' | 'userId'>>;
  updateAppLogin?: Resolver<Maybe<ResolversTypes['AppLogin']>, ParentType, ContextType, RequireFields<MutationUpdateAppLoginArgs, 'id' | 'login' | 'passwordHash' | 'userId'>>;
  removeAppLogin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveAppLoginArgs, 'id'>>;
  createAuditLog?: Resolver<Maybe<ResolversTypes['AuditLog']>, ParentType, ContextType, RequireFields<MutationCreateAuditLogArgs, 'date' | 'title' | 'entityType' | 'entityId' | 'action'>>;
  updateAuditLog?: Resolver<Maybe<ResolversTypes['AuditLog']>, ParentType, ContextType, RequireFields<MutationUpdateAuditLogArgs, 'id' | 'date' | 'title' | 'entityType' | 'entityId' | 'action'>>;
  removeAuditLog?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveAuditLogArgs, 'id'>>;
  createDelegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<MutationCreateDelegationArgs, 'fromId' | 'toId' | 'active'>>;
  updateDelegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<MutationUpdateDelegationArgs, 'id' | 'fromId' | 'toId' | 'active'>>;
  removeDelegation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveDelegationArgs, 'id'>>;
  createFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationCreateFileArgs, 'originalName' | 'url' | 'mimetype' | 's3Key' | 'eTag'>>;
  updateFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationUpdateFileArgs, 'id' | 'originalName' | 'url' | 'mimetype' | 's3Key' | 'eTag'>>;
  removeFile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveFileArgs, 'id'>>;
  createLanguage?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<MutationCreateLanguageArgs, 'id'>>;
  updateLanguage?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<MutationUpdateLanguageArgs, 'id'>>;
  removeLanguage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveLanguageArgs, 'id'>>;
  createManagerLogin?: Resolver<Maybe<ResolversTypes['ManagerLogin']>, ParentType, ContextType, RequireFields<MutationCreateManagerLoginArgs, 'login' | 'passwordHash' | 'role' | 'emailVerified' | 'initialPasswordChanged' | 'locked' | 'managerId'>>;
  updateManagerLogin?: Resolver<Maybe<ResolversTypes['ManagerLogin']>, ParentType, ContextType, RequireFields<MutationUpdateManagerLoginArgs, 'id' | 'login' | 'passwordHash' | 'role' | 'emailVerified' | 'initialPasswordChanged' | 'locked' | 'managerId'>>;
  removeManagerLogin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveManagerLoginArgs, 'id'>>;
  createManager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<MutationCreateManagerArgs, 'lastName' | 'firstName' | 'headOfUnit' | 'active'>>;
  updateManager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<MutationUpdateManagerArgs, 'id' | 'lastName' | 'firstName' | 'headOfUnit' | 'active'>>;
  removeManager?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveManagerArgs, 'id'>>;
  createManagersToPermission?: Resolver<Maybe<ResolversTypes['ManagersToPermission']>, ParentType, ContextType, RequireFields<MutationCreateManagersToPermissionArgs, 'managerId' | 'permissionId'>>;
  updateManagersToPermission?: Resolver<Maybe<ResolversTypes['ManagersToPermission']>, ParentType, ContextType, RequireFields<MutationUpdateManagersToPermissionArgs, 'id' | 'managerId' | 'permissionId'>>;
  removeManagersToPermission?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveManagersToPermissionArgs, 'id'>>;
  createManagersToRole?: Resolver<Maybe<ResolversTypes['ManagersToRole']>, ParentType, ContextType, RequireFields<MutationCreateManagersToRoleArgs, 'managerId' | 'roleId'>>;
  updateManagersToRole?: Resolver<Maybe<ResolversTypes['ManagersToRole']>, ParentType, ContextType, RequireFields<MutationUpdateManagersToRoleArgs, 'id' | 'managerId' | 'roleId'>>;
  removeManagersToRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveManagersToRoleArgs, 'id'>>;
  createMessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<MutationCreateMessageTemplateArgs, 'id' | 'title' | 'secretData'>>;
  updateMessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<MutationUpdateMessageTemplateArgs, 'id' | 'title' | 'secretData'>>;
  removeMessageTemplate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveMessageTemplateArgs, 'id'>>;
  createPermission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<MutationCreatePermissionArgs, 'id'>>;
  updatePermission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<MutationUpdatePermissionArgs, 'id'>>;
  removePermission?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemovePermissionArgs, 'id'>>;
  createRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationCreateRoleArgs, 'id'>>;
  updateRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'id'>>;
  removeRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveRoleArgs, 'id'>>;
  createRolesToPermission?: Resolver<Maybe<ResolversTypes['RolesToPermission']>, ParentType, ContextType, RequireFields<MutationCreateRolesToPermissionArgs, 'roleId' | 'permissionId'>>;
  updateRolesToPermission?: Resolver<Maybe<ResolversTypes['RolesToPermission']>, ParentType, ContextType, RequireFields<MutationUpdateRolesToPermissionArgs, 'id' | 'roleId' | 'permissionId'>>;
  removeRolesToPermission?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveRolesToPermissionArgs, 'id'>>;
  recalculateStat?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  createStat?: Resolver<Maybe<ResolversTypes['Stat']>, ParentType, ContextType, RequireFields<MutationCreateStatArgs, 'id'>>;
  updateStat?: Resolver<Maybe<ResolversTypes['Stat']>, ParentType, ContextType, RequireFields<MutationUpdateStatArgs, 'id'>>;
  removeStat?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveStatArgs, 'id'>>;
  createTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationCreateTagArgs, never>>;
  updateTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationUpdateTagArgs, 'id'>>;
  removeTag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveTagArgs, 'id'>>;
  createUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<MutationCreateUnitArgs, never>>;
  updateUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<MutationUpdateUnitArgs, 'id'>>;
  removeUnit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveUnitArgs, 'id'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'lastname' | 'firstname' | 'email'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'lastname' | 'firstname' | 'email'>>;
  removeUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveUserArgs, 'id'>>;
};

export type AuditLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuditLog'] = ResolversParentTypes['AuditLog']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  managerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  foreign?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  foreignEntityType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foreignEntityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  actionData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DelegationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Delegation'] = ResolversParentTypes['Delegation']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fromId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  toId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  originalName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  s3Key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eTag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManagerLoginResolvers<ContextType = any, ParentType extends ResolversParentTypes['ManagerLogin'] = ResolversParentTypes['ManagerLogin']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  initialPasswordChanged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  locked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  managerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManagerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Manager'] = ResolversParentTypes['Manager']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  languageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telegramLogin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unitId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  headOfUnit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManagersToPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ManagersToPermission'] = ResolversParentTypes['ManagersToPermission']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  managerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  permissionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManagersToRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ManagersToRole'] = ResolversParentTypes['ManagersToRole']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  managerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageTemplate'] = ResolversParentTypes['MessageTemplate']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secretData?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Permission'] = ResolversParentTypes['Permission']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionsWithMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionsWithMeta'] = ResolversParentTypes['PermissionsWithMeta']> = {
  permissionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  byRoles?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  directly?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasFullAccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolesToPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RolesToPermission'] = ResolversParentTypes['RolesToPermission']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stat'] = ResolversParentTypes['Stat']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  helloCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Unit'] = ResolversParentTypes['Unit']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Time?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  UtcOffset?: GraphQLScalarType;
  Duration?: GraphQLScalarType;
  ISO8601Duration?: GraphQLScalarType;
  LocalDate?: GraphQLScalarType;
  LocalTime?: GraphQLScalarType;
  LocalEndTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  NegativeFloat?: GraphQLScalarType;
  NegativeInt?: GraphQLScalarType;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  NonPositiveFloat?: GraphQLScalarType;
  NonPositiveInt?: GraphQLScalarType;
  PhoneNumber?: GraphQLScalarType;
  PositiveFloat?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  PostalCode?: GraphQLScalarType;
  UnsignedFloat?: GraphQLScalarType;
  UnsignedInt?: GraphQLScalarType;
  URL?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  Byte?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
  GUID?: GraphQLScalarType;
  Hexadecimal?: GraphQLScalarType;
  HexColorCode?: GraphQLScalarType;
  HSL?: GraphQLScalarType;
  HSLA?: GraphQLScalarType;
  IPv4?: GraphQLScalarType;
  IPv6?: GraphQLScalarType;
  ISBN?: GraphQLScalarType;
  JWT?: GraphQLScalarType;
  Latitude?: GraphQLScalarType;
  Longitude?: GraphQLScalarType;
  MAC?: GraphQLScalarType;
  Port?: GraphQLScalarType;
  RGB?: GraphQLScalarType;
  RGBA?: GraphQLScalarType;
  SafeInt?: GraphQLScalarType;
  USCurrency?: GraphQLScalarType;
  Currency?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  IBAN?: GraphQLScalarType;
  ObjectID?: GraphQLScalarType;
  Void?: GraphQLScalarType;
  AppLogin?: AppLoginResolvers<ContextType>;
  ListMetadata?: ListMetadataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  AuditLog?: AuditLogResolvers<ContextType>;
  Delegation?: DelegationResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  ManagerLogin?: ManagerLoginResolvers<ContextType>;
  Manager?: ManagerResolvers<ContextType>;
  ManagersToPermission?: ManagersToPermissionResolvers<ContextType>;
  ManagersToRole?: ManagersToRoleResolvers<ContextType>;
  MessageTemplate?: MessageTemplateResolvers<ContextType>;
  Permission?: PermissionResolvers<ContextType>;
  PermissionsWithMeta?: PermissionsWithMetaResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RolesToPermission?: RolesToPermissionResolvers<ContextType>;
  Stat?: StatResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Unit?: UnitResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

