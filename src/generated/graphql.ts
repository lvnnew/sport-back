import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  /** A field whose value exists in the standard IANA Time Zone Database: https://www.iana.org/time-zones */
  TimeZone: any;
  /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  UtcOffset: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  Duration: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
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
  /** A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/. */
  DID: any;
  /** A country code as defined by ISO 3166-1 alpha-2 */
  CountryCode: any;
  /** The locale in the format of a BCP 47 (RFC 5646) standard string */
  Locale: any;
  /** In the US, an ABA routing transit number (`ABA RTN`) is a nine-digit code to identify the financial institution. */
  RoutingNumber: any;
  /** Banking account number is a string of 5 to 17 alphanumeric values for representing an generic account number */
  AccountNumber: any;
};

export type AdmRefreshToken = {
  __typename?: 'AdmRefreshToken';
  id: Scalars['Int'];
  create: Scalars['DateTime'];
  managerId: Scalars['Int'];
  token: Scalars['String'];
};

export type AdmRefreshTokenFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  create?: InputMaybe<Scalars['DateTime']>;
  create_lte?: InputMaybe<Scalars['DateTime']>;
  create_gte?: InputMaybe<Scalars['DateTime']>;
  create_lt?: InputMaybe<Scalars['DateTime']>;
  create_gt?: InputMaybe<Scalars['DateTime']>;
  managerId?: InputMaybe<Scalars['Int']>;
  managerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  token?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  AdmRefreshToken?: Maybe<AdmRefreshToken>;
  allAdmRefreshTokens?: Maybe<Array<Maybe<AdmRefreshToken>>>;
  _allAdmRefreshTokensMeta?: Maybe<ListMetadata>;
  AggregateTracking?: Maybe<AggregateTracking>;
  allAggregateTrackings?: Maybe<Array<Maybe<AggregateTracking>>>;
  _allAggregateTrackingsMeta?: Maybe<ListMetadata>;
  AppLogin?: Maybe<AppLogin>;
  allAppLogins?: Maybe<Array<Maybe<AppLogin>>>;
  _allAppLoginsMeta?: Maybe<ListMetadata>;
  AppRefreshToken?: Maybe<AppRefreshToken>;
  allAppRefreshTokens?: Maybe<Array<Maybe<AppRefreshToken>>>;
  _allAppRefreshTokensMeta?: Maybe<ListMetadata>;
  AuditLogActionType?: Maybe<AuditLogActionType>;
  allAuditLogActionTypes?: Maybe<Array<Maybe<AuditLogActionType>>>;
  _allAuditLogActionTypesMeta?: Maybe<ListMetadata>;
  AuditLog?: Maybe<AuditLog>;
  allAuditLogs?: Maybe<Array<Maybe<AuditLog>>>;
  _allAuditLogsMeta?: Maybe<ListMetadata>;
  AutogenerationHistoryEntry?: Maybe<AutogenerationHistoryEntry>;
  allAutogenerationHistoryEntries?: Maybe<Array<Maybe<AutogenerationHistoryEntry>>>;
  _allAutogenerationHistoryEntriesMeta?: Maybe<ListMetadata>;
  AutogenerationRule?: Maybe<AutogenerationRule>;
  allAutogenerationRules?: Maybe<Array<Maybe<AutogenerationRule>>>;
  _allAutogenerationRulesMeta?: Maybe<ListMetadata>;
  Delegation?: Maybe<Delegation>;
  allDelegations?: Maybe<Array<Maybe<Delegation>>>;
  _allDelegationsMeta?: Maybe<ListMetadata>;
  Entity?: Maybe<Entity>;
  allEntities?: Maybe<Array<Maybe<Entity>>>;
  _allEntitiesMeta?: Maybe<ListMetadata>;
  File?: Maybe<File>;
  allFiles?: Maybe<Array<Maybe<File>>>;
  _allFilesMeta?: Maybe<ListMetadata>;
  getHelp: Scalars['String'];
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
  MessageType?: Maybe<MessageType>;
  allMessageTypes?: Maybe<Array<Maybe<MessageType>>>;
  _allMessageTypesMeta?: Maybe<ListMetadata>;
  Meta?: Maybe<Scalars['JSONObject']>;
  Permission?: Maybe<Permission>;
  allPermissions?: Maybe<Array<Maybe<Permission>>>;
  _allPermissionsMeta?: Maybe<ListMetadata>;
  getManagerPermissions: Array<Scalars['String']>;
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
  Tenant?: Maybe<Tenant>;
  allTenants?: Maybe<Array<Maybe<Tenant>>>;
  _allTenantsMeta?: Maybe<ListMetadata>;
  Unit?: Maybe<Unit>;
  allUnits?: Maybe<Array<Maybe<Unit>>>;
  _allUnitsMeta?: Maybe<ListMetadata>;
  User?: Maybe<User>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  _allUsersMeta?: Maybe<ListMetadata>;
};


export type QueryAdmRefreshTokenArgs = {
  id: Scalars['Int'];
};


export type QueryAllAdmRefreshTokensArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AdmRefreshTokenFilter>;
};


export type Query_AllAdmRefreshTokensMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<AdmRefreshTokenFilter>;
};


export type QueryAggregateTrackingArgs = {
  id: Scalars['Int'];
};


export type QueryAllAggregateTrackingsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AggregateTrackingFilter>;
};


export type Query_AllAggregateTrackingsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<AggregateTrackingFilter>;
};


export type QueryAppLoginArgs = {
  id: Scalars['Int'];
};


export type QueryAllAppLoginsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AppLoginFilter>;
};


export type Query_AllAppLoginsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<AppLoginFilter>;
};


export type QueryAppRefreshTokenArgs = {
  id: Scalars['Int'];
};


export type QueryAllAppRefreshTokensArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AppRefreshTokenFilter>;
};


export type Query_AllAppRefreshTokensMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<AppRefreshTokenFilter>;
};


export type QueryAuditLogActionTypeArgs = {
  id: Scalars['ID'];
};


export type QueryAllAuditLogActionTypesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AuditLogActionTypeFilter>;
};


export type Query_AllAuditLogActionTypesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<AuditLogActionTypeFilter>;
};


export type QueryAuditLogArgs = {
  id: Scalars['Int'];
};


export type QueryAllAuditLogsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AuditLogFilter>;
};


export type Query_AllAuditLogsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<AuditLogFilter>;
};


export type QueryAutogenerationHistoryEntryArgs = {
  id: Scalars['Int'];
};


export type QueryAllAutogenerationHistoryEntriesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AutogenerationHistoryEntryFilter>;
};


export type Query_AllAutogenerationHistoryEntriesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<AutogenerationHistoryEntryFilter>;
};


export type QueryAutogenerationRuleArgs = {
  id: Scalars['ID'];
};


export type QueryAllAutogenerationRulesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AutogenerationRuleFilter>;
};


export type Query_AllAutogenerationRulesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<AutogenerationRuleFilter>;
};


export type QueryDelegationArgs = {
  id: Scalars['Int'];
};


export type QueryAllDelegationsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<DelegationFilter>;
};


export type Query_AllDelegationsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<DelegationFilter>;
};


export type QueryEntityArgs = {
  id: Scalars['ID'];
};


export type QueryAllEntitiesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<EntityFilter>;
};


export type Query_AllEntitiesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<EntityFilter>;
};


export type QueryFileArgs = {
  id: Scalars['Int'];
};


export type QueryAllFilesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FileFilter>;
};


export type Query_AllFilesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<FileFilter>;
};


export type QueryGetHelpArgs = {
  entityType: EntityType;
};


export type QueryLanguageArgs = {
  id: Scalars['ID'];
};


export type QueryAllLanguagesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<LanguageFilter>;
};


export type Query_AllLanguagesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<LanguageFilter>;
};


export type QueryManagerLoginArgs = {
  id: Scalars['Int'];
};


export type QueryAllManagerLoginsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ManagerLoginFilter>;
};


export type Query_AllManagerLoginsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ManagerLoginFilter>;
};


export type QueryManagerArgs = {
  id: Scalars['Int'];
};


export type QueryAllManagersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ManagerFilter>;
};


export type Query_AllManagersMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ManagerFilter>;
};


export type QueryManagersToPermissionArgs = {
  id: Scalars['Int'];
};


export type QueryAllManagersToPermissionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ManagersToPermissionFilter>;
};


export type Query_AllManagersToPermissionsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ManagersToPermissionFilter>;
};


export type QueryManagersToRoleArgs = {
  id: Scalars['Int'];
};


export type QueryAllManagersToRolesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ManagersToRoleFilter>;
};


export type Query_AllManagersToRolesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ManagersToRoleFilter>;
};


export type QueryMessageTemplateArgs = {
  id: Scalars['ID'];
};


export type QueryAllMessageTemplatesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MessageTemplateFilter>;
};


export type Query_AllMessageTemplatesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MessageTemplateFilter>;
};


export type QueryMessageTypeArgs = {
  id: Scalars['ID'];
};


export type QueryAllMessageTypesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MessageTypeFilter>;
};


export type Query_AllMessageTypesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MessageTypeFilter>;
};


export type QueryPermissionArgs = {
  id: Scalars['ID'];
};


export type QueryAllPermissionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PermissionFilter>;
};


export type Query_AllPermissionsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<PermissionFilter>;
};


export type QueryGetPermissionsOfManagerWithMetaArgs = {
  managerId: Scalars['Int'];
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryAllRolesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<RoleFilter>;
};


export type Query_AllRolesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<RoleFilter>;
};


export type QueryRolesToPermissionArgs = {
  id: Scalars['Int'];
};


export type QueryAllRolesToPermissionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<RolesToPermissionFilter>;
};


export type Query_AllRolesToPermissionsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<RolesToPermissionFilter>;
};


export type QueryStatArgs = {
  id: Scalars['ID'];
};


export type QueryAllStatsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<StatFilter>;
};


export type Query_AllStatsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<StatFilter>;
};


export type QueryTagArgs = {
  id: Scalars['Int'];
};


export type QueryAllTagsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TagFilter>;
};


export type Query_AllTagsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<TagFilter>;
};


export type QueryTenantArgs = {
  id: Scalars['Int'];
};


export type QueryAllTenantsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TenantFilter>;
};


export type Query_AllTenantsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<TenantFilter>;
};


export type QueryUnitArgs = {
  id: Scalars['Int'];
};


export type QueryAllUnitsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UnitFilter>;
};


export type Query_AllUnitsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<UnitFilter>;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryAllUsersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
};


export type Query_AllUsersMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<UserFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmRefreshToken?: Maybe<AdmRefreshToken>;
  updateAdmRefreshToken?: Maybe<AdmRefreshToken>;
  removeAdmRefreshToken?: Maybe<AdmRefreshToken>;
  createAggregateTracking?: Maybe<AggregateTracking>;
  updateAggregateTracking?: Maybe<AggregateTracking>;
  removeAggregateTracking?: Maybe<AggregateTracking>;
  createAppLogin?: Maybe<AppLogin>;
  updateAppLogin?: Maybe<AppLogin>;
  removeAppLogin?: Maybe<AppLogin>;
  createAppRefreshToken?: Maybe<AppRefreshToken>;
  updateAppRefreshToken?: Maybe<AppRefreshToken>;
  removeAppRefreshToken?: Maybe<AppRefreshToken>;
  createAuditLogActionType?: Maybe<AuditLogActionType>;
  updateAuditLogActionType?: Maybe<AuditLogActionType>;
  removeAuditLogActionType?: Maybe<AuditLogActionType>;
  createAuditLog?: Maybe<AuditLog>;
  updateAuditLog?: Maybe<AuditLog>;
  removeAuditLog?: Maybe<AuditLog>;
  createAutogenerationHistoryEntry?: Maybe<AutogenerationHistoryEntry>;
  updateAutogenerationHistoryEntry?: Maybe<AutogenerationHistoryEntry>;
  removeAutogenerationHistoryEntry?: Maybe<AutogenerationHistoryEntry>;
  createAutogenerationRule?: Maybe<AutogenerationRule>;
  updateAutogenerationRule?: Maybe<AutogenerationRule>;
  removeAutogenerationRule?: Maybe<AutogenerationRule>;
  createDelegation?: Maybe<Delegation>;
  updateDelegation?: Maybe<Delegation>;
  removeDelegation?: Maybe<Delegation>;
  createEntity?: Maybe<Entity>;
  updateEntity?: Maybe<Entity>;
  removeEntity?: Maybe<Entity>;
  createFile?: Maybe<File>;
  updateFile?: Maybe<File>;
  removeFile?: Maybe<File>;
  createLanguage?: Maybe<Language>;
  updateLanguage?: Maybe<Language>;
  removeLanguage?: Maybe<Language>;
  createManagerLogin?: Maybe<ManagerLogin>;
  updateManagerLogin?: Maybe<ManagerLogin>;
  removeManagerLogin?: Maybe<ManagerLogin>;
  createManager?: Maybe<Manager>;
  updateManager?: Maybe<Manager>;
  removeManager?: Maybe<Manager>;
  createManagersToPermission?: Maybe<ManagersToPermission>;
  updateManagersToPermission?: Maybe<ManagersToPermission>;
  removeManagersToPermission?: Maybe<ManagersToPermission>;
  createManagersToRole?: Maybe<ManagersToRole>;
  updateManagersToRole?: Maybe<ManagersToRole>;
  removeManagersToRole?: Maybe<ManagersToRole>;
  createMessageTemplate?: Maybe<MessageTemplate>;
  updateMessageTemplate?: Maybe<MessageTemplate>;
  removeMessageTemplate?: Maybe<MessageTemplate>;
  createMessageType?: Maybe<MessageType>;
  updateMessageType?: Maybe<MessageType>;
  removeMessageType?: Maybe<MessageType>;
  createPermission?: Maybe<Permission>;
  updatePermission?: Maybe<Permission>;
  removePermission?: Maybe<Permission>;
  createRole?: Maybe<Role>;
  updateRole?: Maybe<Role>;
  removeRole?: Maybe<Role>;
  createRolesToPermission?: Maybe<RolesToPermission>;
  updateRolesToPermission?: Maybe<RolesToPermission>;
  removeRolesToPermission?: Maybe<RolesToPermission>;
  recalculateStat?: Maybe<Scalars['Void']>;
  createStat?: Maybe<Stat>;
  updateStat?: Maybe<Stat>;
  removeStat?: Maybe<Stat>;
  createTag?: Maybe<Tag>;
  updateTag?: Maybe<Tag>;
  removeTag?: Maybe<Tag>;
  createTenant?: Maybe<Tenant>;
  updateTenant?: Maybe<Tenant>;
  removeTenant?: Maybe<Tenant>;
  createUnit?: Maybe<Unit>;
  updateUnit?: Maybe<Unit>;
  removeUnit?: Maybe<Unit>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  removeUser?: Maybe<User>;
};


export type MutationCreateAdmRefreshTokenArgs = {
  create: Scalars['DateTime'];
  managerId: Scalars['Int'];
  token: Scalars['String'];
};


export type MutationUpdateAdmRefreshTokenArgs = {
  id: Scalars['Int'];
  create: Scalars['DateTime'];
  managerId: Scalars['Int'];
  token: Scalars['String'];
};


export type MutationRemoveAdmRefreshTokenArgs = {
  id: Scalars['Int'];
};


export type MutationCreateAggregateTrackingArgs = {
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  lastAggregatesComputed: Scalars['DateTime'];
  lastEntityUpdate: Scalars['DateTime'];
  aggregateVersion: Scalars['Int'];
};


export type MutationUpdateAggregateTrackingArgs = {
  id: Scalars['Int'];
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  lastAggregatesComputed: Scalars['DateTime'];
  lastEntityUpdate: Scalars['DateTime'];
  aggregateVersion: Scalars['Int'];
};


export type MutationRemoveAggregateTrackingArgs = {
  id: Scalars['Int'];
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


export type MutationCreateAppRefreshTokenArgs = {
  create: Scalars['DateTime'];
  userId: Scalars['Int'];
  token: Scalars['String'];
};


export type MutationUpdateAppRefreshTokenArgs = {
  id: Scalars['Int'];
  create: Scalars['DateTime'];
  userId: Scalars['Int'];
  token: Scalars['String'];
};


export type MutationRemoveAppRefreshTokenArgs = {
  id: Scalars['Int'];
};


export type MutationCreateAuditLogActionTypeArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAuditLogActionTypeArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveAuditLogActionTypeArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAuditLogArgs = {
  date: Scalars['DateTime'];
  title: Scalars['String'];
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  actionTypeId: Scalars['String'];
  managerId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  foreign?: InputMaybe<Scalars['Boolean']>;
  foreignEntityType?: InputMaybe<Scalars['String']>;
  foreignEntityId?: InputMaybe<Scalars['String']>;
  actionData?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAuditLogArgs = {
  id: Scalars['Int'];
  date: Scalars['DateTime'];
  title: Scalars['String'];
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  actionTypeId: Scalars['String'];
  managerId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  foreign?: InputMaybe<Scalars['Boolean']>;
  foreignEntityType?: InputMaybe<Scalars['String']>;
  foreignEntityId?: InputMaybe<Scalars['String']>;
  actionData?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveAuditLogArgs = {
  id: Scalars['Int'];
};


export type MutationCreateAutogenerationHistoryEntryArgs = {
  date: Scalars['DateTime'];
  originalEntityType: Scalars['String'];
  originalEntityId: Scalars['String'];
  autogenerationRuleId: Scalars['String'];
  version: Scalars['Date'];
  errorOccurred: Scalars['Boolean'];
  error?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAutogenerationHistoryEntryArgs = {
  id: Scalars['Int'];
  date: Scalars['DateTime'];
  originalEntityType: Scalars['String'];
  originalEntityId: Scalars['String'];
  autogenerationRuleId: Scalars['String'];
  version: Scalars['Date'];
  errorOccurred: Scalars['Boolean'];
  error?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveAutogenerationHistoryEntryArgs = {
  id: Scalars['Int'];
};


export type MutationCreateAutogenerationRuleArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  version?: InputMaybe<Scalars['Date']>;
  originalEntityType: Scalars['String'];
  generatingEntityType: Scalars['String'];
  originalEntityFilter: Scalars['String'];
  generatingEntityConstructionRules: Scalars['String'];
  ignoreVersionOnHistory: Scalars['Boolean'];
};


export type MutationUpdateAutogenerationRuleArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  version?: InputMaybe<Scalars['Date']>;
  originalEntityType: Scalars['String'];
  generatingEntityType: Scalars['String'];
  originalEntityFilter: Scalars['String'];
  generatingEntityConstructionRules: Scalars['String'];
  ignoreVersionOnHistory: Scalars['Boolean'];
};


export type MutationRemoveAutogenerationRuleArgs = {
  id: Scalars['ID'];
};


export type MutationCreateDelegationArgs = {
  fromId: Scalars['Int'];
  toId: Scalars['Int'];
  expiresAt?: InputMaybe<Scalars['Date']>;
  active: Scalars['Boolean'];
};


export type MutationUpdateDelegationArgs = {
  id: Scalars['Int'];
  fromId: Scalars['Int'];
  toId: Scalars['Int'];
  expiresAt?: InputMaybe<Scalars['Date']>;
  active: Scalars['Boolean'];
};


export type MutationRemoveDelegationArgs = {
  id: Scalars['Int'];
};


export type MutationCreateEntityArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateEntityArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveEntityArgs = {
  id: Scalars['ID'];
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
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateLanguageArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
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
  title?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  languageId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  telegramLogin?: InputMaybe<Scalars['String']>;
  unitId?: InputMaybe<Scalars['Int']>;
  headOfUnit: Scalars['Boolean'];
  active: Scalars['Boolean'];
  tenantId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateManagerArgs = {
  id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  languageId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  telegramLogin?: InputMaybe<Scalars['String']>;
  unitId?: InputMaybe<Scalars['Int']>;
  headOfUnit: Scalars['Boolean'];
  active: Scalars['Boolean'];
  tenantId?: InputMaybe<Scalars['Int']>;
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
  messageTypeId: Scalars['String'];
};


export type MutationUpdateMessageTemplateArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  secretData: Scalars['Boolean'];
  messageTypeId: Scalars['String'];
};


export type MutationRemoveMessageTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationCreateMessageTypeArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateMessageTypeArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveMessageTypeArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePermissionArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationRemovePermissionArgs = {
  id: Scalars['ID'];
};


export type MutationCreateRoleArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  hasAllPermissions: Scalars['Boolean'];
  allTenantsAvailable: Scalars['Boolean'];
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  hasAllPermissions: Scalars['Boolean'];
  allTenantsAvailable: Scalars['Boolean'];
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
  updated?: InputMaybe<Scalars['DateTime']>;
  helloCount?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateStatArgs = {
  id: Scalars['ID'];
  updated?: InputMaybe<Scalars['DateTime']>;
  helloCount?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveStatArgs = {
  id: Scalars['ID'];
};


export type MutationCreateTagArgs = {
  comment?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTagArgs = {
  id: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveTagArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTenantArgs = {
  title?: InputMaybe<Scalars['String']>;
  utcOffset: Scalars['Int'];
};


export type MutationUpdateTenantArgs = {
  id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  utcOffset: Scalars['Int'];
};


export type MutationRemoveTenantArgs = {
  id: Scalars['Int'];
};


export type MutationCreateUnitArgs = {
  title?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateUnitArgs = {
  id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveUnitArgs = {
  id: Scalars['Int'];
};


export type MutationCreateUserArgs = {
  title?: InputMaybe<Scalars['String']>;
  lastname: Scalars['String'];
  firstname: Scalars['String'];
  email: Scalars['String'];
  tenantId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  lastname: Scalars['String'];
  firstname: Scalars['String'];
  email: Scalars['String'];
  tenantId?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};

export type AggregateTracking = {
  __typename?: 'AggregateTracking';
  id: Scalars['Int'];
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  lastAggregatesComputed: Scalars['DateTime'];
  lastEntityUpdate: Scalars['DateTime'];
  aggregateVersion: Scalars['Int'];
};

export type AggregateTrackingFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  entityTypeId?: InputMaybe<Scalars['String']>;
  entityTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entityId?: InputMaybe<Scalars['String']>;
  entityId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastAggregatesComputed?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesComputed_lte?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesComputed_gte?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesComputed_lt?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesComputed_gt?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate_lte?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate_gte?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate_lt?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate_gt?: InputMaybe<Scalars['DateTime']>;
  aggregateVersion?: InputMaybe<Scalars['Int']>;
  aggregateVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  aggregateVersion_lte?: InputMaybe<Scalars['Int']>;
  aggregateVersion_gte?: InputMaybe<Scalars['Int']>;
  aggregateVersion_lt?: InputMaybe<Scalars['Int']>;
  aggregateVersion_gt?: InputMaybe<Scalars['Int']>;
};

export type AppLogin = {
  __typename?: 'AppLogin';
  id: Scalars['Int'];
  login: Scalars['String'];
  passwordHash: Scalars['String'];
  userId: Scalars['Int'];
};

export type AppLoginFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  login?: InputMaybe<Scalars['String']>;
  login_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userId?: InputMaybe<Scalars['Int']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AppRefreshToken = {
  __typename?: 'AppRefreshToken';
  id: Scalars['Int'];
  create: Scalars['DateTime'];
  userId: Scalars['Int'];
  token: Scalars['String'];
};

export type AppRefreshTokenFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  create?: InputMaybe<Scalars['DateTime']>;
  create_lte?: InputMaybe<Scalars['DateTime']>;
  create_gte?: InputMaybe<Scalars['DateTime']>;
  create_lt?: InputMaybe<Scalars['DateTime']>;
  create_gt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  token?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AuditLogActionType = {
  __typename?: 'AuditLogActionType';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type AuditLogActionTypeFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AuditLog = {
  __typename?: 'AuditLog';
  id: Scalars['Int'];
  date: Scalars['DateTime'];
  title: Scalars['String'];
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  actionTypeId: Scalars['String'];
  managerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  foreign?: Maybe<Scalars['Boolean']>;
  foreignEntityType?: Maybe<Scalars['String']>;
  foreignEntityId?: Maybe<Scalars['String']>;
  actionData?: Maybe<Scalars['String']>;
};

export type AuditLogFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entityTypeId?: InputMaybe<Scalars['String']>;
  entityTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entityId?: InputMaybe<Scalars['String']>;
  entityId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  actionTypeId?: InputMaybe<Scalars['String']>;
  actionTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  managerId?: InputMaybe<Scalars['Int']>;
  managerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  userId?: InputMaybe<Scalars['Int']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  foreign?: InputMaybe<Scalars['Boolean']>;
  foreignEntityType?: InputMaybe<Scalars['String']>;
  foreignEntityType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  foreignEntityId?: InputMaybe<Scalars['String']>;
  foreignEntityId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  actionData?: InputMaybe<Scalars['String']>;
  actionData_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AutogenerationHistoryEntry = {
  __typename?: 'AutogenerationHistoryEntry';
  id: Scalars['Int'];
  date: Scalars['DateTime'];
  originalEntityType: Scalars['String'];
  originalEntityId: Scalars['String'];
  autogenerationRuleId: Scalars['String'];
  version: Scalars['Date'];
  errorOccurred: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type AutogenerationHistoryEntryFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  originalEntityType?: InputMaybe<Scalars['String']>;
  originalEntityType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  originalEntityId?: InputMaybe<Scalars['String']>;
  originalEntityId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  autogenerationRuleId?: InputMaybe<Scalars['String']>;
  autogenerationRuleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Date']>;
  version_lte?: InputMaybe<Scalars['Date']>;
  version_gte?: InputMaybe<Scalars['Date']>;
  version_lt?: InputMaybe<Scalars['Date']>;
  version_gt?: InputMaybe<Scalars['Date']>;
  errorOccurred?: InputMaybe<Scalars['Boolean']>;
  error?: InputMaybe<Scalars['String']>;
  error_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AutogenerationRule = {
  __typename?: 'AutogenerationRule';
  id: Scalars['ID'];
  title: Scalars['String'];
  version?: Maybe<Scalars['Date']>;
  originalEntityType: Scalars['String'];
  generatingEntityType: Scalars['String'];
  originalEntityFilter: Scalars['String'];
  generatingEntityConstructionRules: Scalars['String'];
  ignoreVersionOnHistory: Scalars['Boolean'];
};

export type AutogenerationRuleFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Date']>;
  version_lte?: InputMaybe<Scalars['Date']>;
  version_gte?: InputMaybe<Scalars['Date']>;
  version_lt?: InputMaybe<Scalars['Date']>;
  version_gt?: InputMaybe<Scalars['Date']>;
  originalEntityType?: InputMaybe<Scalars['String']>;
  originalEntityType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  generatingEntityType?: InputMaybe<Scalars['String']>;
  generatingEntityType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  originalEntityFilter?: InputMaybe<Scalars['String']>;
  originalEntityFilter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  generatingEntityConstructionRules?: InputMaybe<Scalars['String']>;
  generatingEntityConstructionRules_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ignoreVersionOnHistory?: InputMaybe<Scalars['Boolean']>;
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
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  fromId?: InputMaybe<Scalars['Int']>;
  fromId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toId?: InputMaybe<Scalars['Int']>;
  toId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  expiresAt?: InputMaybe<Scalars['Date']>;
  expiresAt_lte?: InputMaybe<Scalars['Date']>;
  expiresAt_gte?: InputMaybe<Scalars['Date']>;
  expiresAt_lt?: InputMaybe<Scalars['Date']>;
  expiresAt_gt?: InputMaybe<Scalars['Date']>;
  active?: InputMaybe<Scalars['Boolean']>;
};

export type Entity = {
  __typename?: 'Entity';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type EntityFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  originalName?: InputMaybe<Scalars['String']>;
  originalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mimetype?: InputMaybe<Scalars['String']>;
  mimetype_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  s3Key?: InputMaybe<Scalars['String']>;
  s3Key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eTag?: InputMaybe<Scalars['String']>;
  eTag_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum EntityType {
  AdmRefreshTokens = 'admRefreshTokens',
  AggregateTrackings = 'aggregateTrackings',
  AppLogins = 'appLogins',
  AppRefreshTokens = 'appRefreshTokens',
  AuditLogActionTypes = 'auditLogActionTypes',
  AuditLogs = 'auditLogs',
  AutogenerationHistoryEntries = 'autogenerationHistoryEntries',
  AutogenerationRules = 'autogenerationRules',
  Delegations = 'delegations',
  Entities = 'entities',
  Files = 'files',
  Languages = 'languages',
  ManagerLogins = 'managerLogins',
  Managers = 'managers',
  ManagersToPermissions = 'managersToPermissions',
  ManagersToRoles = 'managersToRoles',
  MessageTemplates = 'messageTemplates',
  MessageTypes = 'messageTypes',
  Permissions = 'permissions',
  Roles = 'roles',
  RolesToPermissions = 'rolesToPermissions',
  Stats = 'stats',
  Tags = 'tags',
  Tenants = 'tenants',
  Units = 'units',
  Users = 'users'
}

export type Language = {
  __typename?: 'Language';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type LanguageFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  login?: InputMaybe<Scalars['String']>;
  login_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role?: InputMaybe<Scalars['String']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  initialPasswordChanged?: InputMaybe<Scalars['Boolean']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  managerId?: InputMaybe<Scalars['Int']>;
  managerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Manager = {
  __typename?: 'Manager';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  languageId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  telegramLogin?: Maybe<Scalars['String']>;
  unitId?: Maybe<Scalars['Int']>;
  headOfUnit: Scalars['Boolean'];
  active: Scalars['Boolean'];
  tenantId?: Maybe<Scalars['Int']>;
};

export type ManagerFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Scalars['String']>;
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languageId?: InputMaybe<Scalars['String']>;
  languageId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  photo?: InputMaybe<Scalars['String']>;
  photo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  telegramLogin?: InputMaybe<Scalars['String']>;
  telegramLogin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unitId?: InputMaybe<Scalars['Int']>;
  unitId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  headOfUnit?: InputMaybe<Scalars['Boolean']>;
  active?: InputMaybe<Scalars['Boolean']>;
  tenantId?: InputMaybe<Scalars['Int']>;
  tenantId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ManagersToPermission = {
  __typename?: 'ManagersToPermission';
  id: Scalars['Int'];
  managerId: Scalars['Int'];
  permissionId: Scalars['String'];
};

export type ManagersToPermissionFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  managerId?: InputMaybe<Scalars['Int']>;
  managerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  permissionId?: InputMaybe<Scalars['String']>;
  permissionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ManagersToRole = {
  __typename?: 'ManagersToRole';
  id: Scalars['Int'];
  managerId: Scalars['Int'];
  roleId: Scalars['String'];
};

export type ManagersToRoleFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  managerId?: InputMaybe<Scalars['Int']>;
  managerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  roleId?: InputMaybe<Scalars['String']>;
  roleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MessageTemplate = {
  __typename?: 'MessageTemplate';
  id: Scalars['ID'];
  title: Scalars['String'];
  secretData: Scalars['Boolean'];
  messageTypeId: Scalars['String'];
};

export type MessageTemplateFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secretData?: InputMaybe<Scalars['Boolean']>;
  messageTypeId?: InputMaybe<Scalars['String']>;
  messageTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MessageType = {
  __typename?: 'MessageType';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type MessageTypeFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Permission = {
  __typename?: 'Permission';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type PermissionFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  hasAllPermissions: Scalars['Boolean'];
  allTenantsAvailable: Scalars['Boolean'];
};

export type RoleFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasAllPermissions?: InputMaybe<Scalars['Boolean']>;
  allTenantsAvailable?: InputMaybe<Scalars['Boolean']>;
};

export type RolesToPermission = {
  __typename?: 'RolesToPermission';
  id: Scalars['Int'];
  roleId: Scalars['String'];
  permissionId: Scalars['String'];
};

export type RolesToPermissionFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  roleId?: InputMaybe<Scalars['String']>;
  roleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  permissionId?: InputMaybe<Scalars['String']>;
  permissionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stat = {
  __typename?: 'Stat';
  id: Scalars['ID'];
  updated?: Maybe<Scalars['DateTime']>;
  helloCount?: Maybe<Scalars['Int']>;
};

export type StatFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updated_lte?: InputMaybe<Scalars['DateTime']>;
  updated_gte?: InputMaybe<Scalars['DateTime']>;
  updated_lt?: InputMaybe<Scalars['DateTime']>;
  updated_gt?: InputMaybe<Scalars['DateTime']>;
  helloCount?: InputMaybe<Scalars['Int']>;
  helloCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  helloCount_lte?: InputMaybe<Scalars['Int']>;
  helloCount_gte?: InputMaybe<Scalars['Int']>;
  helloCount_lt?: InputMaybe<Scalars['Int']>;
  helloCount_gt?: InputMaybe<Scalars['Int']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
};

export type TagFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  comment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Tenant = {
  __typename?: 'Tenant';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  utcOffset: Scalars['Int'];
};

export type TenantFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  utcOffset?: InputMaybe<Scalars['Int']>;
  utcOffset_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  utcOffset_lte?: InputMaybe<Scalars['Int']>;
  utcOffset_gte?: InputMaybe<Scalars['Int']>;
  utcOffset_lt?: InputMaybe<Scalars['Int']>;
  utcOffset_gt?: InputMaybe<Scalars['Int']>;
};

export type Unit = {
  __typename?: 'Unit';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
};

export type UnitFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parentId?: InputMaybe<Scalars['Int']>;
  parentId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  lastname: Scalars['String'];
  firstname: Scalars['String'];
  email: Scalars['String'];
  tenantId?: Maybe<Scalars['Int']>;
};

export type UserFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastname?: InputMaybe<Scalars['String']>;
  lastname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstname?: InputMaybe<Scalars['String']>;
  firstname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tenantId?: InputMaybe<Scalars['Int']>;
  tenantId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
  TimeZone: ResolverTypeWrapper<Scalars['TimeZone']>;
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
  DID: ResolverTypeWrapper<Scalars['DID']>;
  CountryCode: ResolverTypeWrapper<Scalars['CountryCode']>;
  Locale: ResolverTypeWrapper<Scalars['Locale']>;
  RoutingNumber: ResolverTypeWrapper<Scalars['RoutingNumber']>;
  AccountNumber: ResolverTypeWrapper<Scalars['AccountNumber']>;
  AdmRefreshToken: ResolverTypeWrapper<AdmRefreshToken>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AdmRefreshTokenFilter: AdmRefreshTokenFilter;
  ListMetadata: ResolverTypeWrapper<ListMetadata>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AggregateTracking: ResolverTypeWrapper<AggregateTracking>;
  AggregateTrackingFilter: AggregateTrackingFilter;
  AppLogin: ResolverTypeWrapper<AppLogin>;
  AppLoginFilter: AppLoginFilter;
  AppRefreshToken: ResolverTypeWrapper<AppRefreshToken>;
  AppRefreshTokenFilter: AppRefreshTokenFilter;
  AuditLogActionType: ResolverTypeWrapper<AuditLogActionType>;
  AuditLogActionTypeFilter: AuditLogActionTypeFilter;
  AuditLog: ResolverTypeWrapper<AuditLog>;
  AuditLogFilter: AuditLogFilter;
  AutogenerationHistoryEntry: ResolverTypeWrapper<AutogenerationHistoryEntry>;
  AutogenerationHistoryEntryFilter: AutogenerationHistoryEntryFilter;
  AutogenerationRule: ResolverTypeWrapper<AutogenerationRule>;
  AutogenerationRuleFilter: AutogenerationRuleFilter;
  Delegation: ResolverTypeWrapper<Delegation>;
  DelegationFilter: DelegationFilter;
  Entity: ResolverTypeWrapper<Entity>;
  EntityFilter: EntityFilter;
  File: ResolverTypeWrapper<File>;
  FileFilter: FileFilter;
  EntityType: EntityType;
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
  MessageType: ResolverTypeWrapper<MessageType>;
  MessageTypeFilter: MessageTypeFilter;
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
  Tenant: ResolverTypeWrapper<Tenant>;
  TenantFilter: TenantFilter;
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
  TimeZone: Scalars['TimeZone'];
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
  DID: Scalars['DID'];
  CountryCode: Scalars['CountryCode'];
  Locale: Scalars['Locale'];
  RoutingNumber: Scalars['RoutingNumber'];
  AccountNumber: Scalars['AccountNumber'];
  AdmRefreshToken: AdmRefreshToken;
  Int: Scalars['Int'];
  String: Scalars['String'];
  AdmRefreshTokenFilter: AdmRefreshTokenFilter;
  ListMetadata: ListMetadata;
  Query: {};
  ID: Scalars['ID'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
  AggregateTracking: AggregateTracking;
  AggregateTrackingFilter: AggregateTrackingFilter;
  AppLogin: AppLogin;
  AppLoginFilter: AppLoginFilter;
  AppRefreshToken: AppRefreshToken;
  AppRefreshTokenFilter: AppRefreshTokenFilter;
  AuditLogActionType: AuditLogActionType;
  AuditLogActionTypeFilter: AuditLogActionTypeFilter;
  AuditLog: AuditLog;
  AuditLogFilter: AuditLogFilter;
  AutogenerationHistoryEntry: AutogenerationHistoryEntry;
  AutogenerationHistoryEntryFilter: AutogenerationHistoryEntryFilter;
  AutogenerationRule: AutogenerationRule;
  AutogenerationRuleFilter: AutogenerationRuleFilter;
  Delegation: Delegation;
  DelegationFilter: DelegationFilter;
  Entity: Entity;
  EntityFilter: EntityFilter;
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
  MessageType: MessageType;
  MessageTypeFilter: MessageTypeFilter;
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
  Tenant: Tenant;
  TenantFilter: TenantFilter;
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

export interface TimeZoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimeZone'], any> {
  name: 'TimeZone';
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

export interface DidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DID'], any> {
  name: 'DID';
}

export interface CountryCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountryCode'], any> {
  name: 'CountryCode';
}

export interface LocaleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Locale'], any> {
  name: 'Locale';
}

export interface RoutingNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RoutingNumber'], any> {
  name: 'RoutingNumber';
}

export interface AccountNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AccountNumber'], any> {
  name: 'AccountNumber';
}

export type AdmRefreshTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdmRefreshToken'] = ResolversParentTypes['AdmRefreshToken']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  create?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  managerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListMetadata'] = ResolversParentTypes['ListMetadata']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  AdmRefreshToken?: Resolver<Maybe<ResolversTypes['AdmRefreshToken']>, ParentType, ContextType, RequireFields<QueryAdmRefreshTokenArgs, 'id'>>;
  allAdmRefreshTokens?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdmRefreshToken']>>>, ParentType, ContextType, Partial<QueryAllAdmRefreshTokensArgs>>;
  _allAdmRefreshTokensMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllAdmRefreshTokensMetaArgs>>;
  AggregateTracking?: Resolver<Maybe<ResolversTypes['AggregateTracking']>, ParentType, ContextType, RequireFields<QueryAggregateTrackingArgs, 'id'>>;
  allAggregateTrackings?: Resolver<Maybe<Array<Maybe<ResolversTypes['AggregateTracking']>>>, ParentType, ContextType, Partial<QueryAllAggregateTrackingsArgs>>;
  _allAggregateTrackingsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllAggregateTrackingsMetaArgs>>;
  AppLogin?: Resolver<Maybe<ResolversTypes['AppLogin']>, ParentType, ContextType, RequireFields<QueryAppLoginArgs, 'id'>>;
  allAppLogins?: Resolver<Maybe<Array<Maybe<ResolversTypes['AppLogin']>>>, ParentType, ContextType, Partial<QueryAllAppLoginsArgs>>;
  _allAppLoginsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllAppLoginsMetaArgs>>;
  AppRefreshToken?: Resolver<Maybe<ResolversTypes['AppRefreshToken']>, ParentType, ContextType, RequireFields<QueryAppRefreshTokenArgs, 'id'>>;
  allAppRefreshTokens?: Resolver<Maybe<Array<Maybe<ResolversTypes['AppRefreshToken']>>>, ParentType, ContextType, Partial<QueryAllAppRefreshTokensArgs>>;
  _allAppRefreshTokensMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllAppRefreshTokensMetaArgs>>;
  AuditLogActionType?: Resolver<Maybe<ResolversTypes['AuditLogActionType']>, ParentType, ContextType, RequireFields<QueryAuditLogActionTypeArgs, 'id'>>;
  allAuditLogActionTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['AuditLogActionType']>>>, ParentType, ContextType, Partial<QueryAllAuditLogActionTypesArgs>>;
  _allAuditLogActionTypesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllAuditLogActionTypesMetaArgs>>;
  AuditLog?: Resolver<Maybe<ResolversTypes['AuditLog']>, ParentType, ContextType, RequireFields<QueryAuditLogArgs, 'id'>>;
  allAuditLogs?: Resolver<Maybe<Array<Maybe<ResolversTypes['AuditLog']>>>, ParentType, ContextType, Partial<QueryAllAuditLogsArgs>>;
  _allAuditLogsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllAuditLogsMetaArgs>>;
  AutogenerationHistoryEntry?: Resolver<Maybe<ResolversTypes['AutogenerationHistoryEntry']>, ParentType, ContextType, RequireFields<QueryAutogenerationHistoryEntryArgs, 'id'>>;
  allAutogenerationHistoryEntries?: Resolver<Maybe<Array<Maybe<ResolversTypes['AutogenerationHistoryEntry']>>>, ParentType, ContextType, Partial<QueryAllAutogenerationHistoryEntriesArgs>>;
  _allAutogenerationHistoryEntriesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllAutogenerationHistoryEntriesMetaArgs>>;
  AutogenerationRule?: Resolver<Maybe<ResolversTypes['AutogenerationRule']>, ParentType, ContextType, RequireFields<QueryAutogenerationRuleArgs, 'id'>>;
  allAutogenerationRules?: Resolver<Maybe<Array<Maybe<ResolversTypes['AutogenerationRule']>>>, ParentType, ContextType, Partial<QueryAllAutogenerationRulesArgs>>;
  _allAutogenerationRulesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllAutogenerationRulesMetaArgs>>;
  Delegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<QueryDelegationArgs, 'id'>>;
  allDelegations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Delegation']>>>, ParentType, ContextType, Partial<QueryAllDelegationsArgs>>;
  _allDelegationsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllDelegationsMetaArgs>>;
  Entity?: Resolver<Maybe<ResolversTypes['Entity']>, ParentType, ContextType, RequireFields<QueryEntityArgs, 'id'>>;
  allEntities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entity']>>>, ParentType, ContextType, Partial<QueryAllEntitiesArgs>>;
  _allEntitiesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllEntitiesMetaArgs>>;
  File?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<QueryFileArgs, 'id'>>;
  allFiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['File']>>>, ParentType, ContextType, Partial<QueryAllFilesArgs>>;
  _allFilesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllFilesMetaArgs>>;
  getHelp?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryGetHelpArgs, 'entityType'>>;
  Language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<QueryLanguageArgs, 'id'>>;
  allLanguages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Language']>>>, ParentType, ContextType, Partial<QueryAllLanguagesArgs>>;
  _allLanguagesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllLanguagesMetaArgs>>;
  ManagerLogin?: Resolver<Maybe<ResolversTypes['ManagerLogin']>, ParentType, ContextType, RequireFields<QueryManagerLoginArgs, 'id'>>;
  allManagerLogins?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManagerLogin']>>>, ParentType, ContextType, Partial<QueryAllManagerLoginsArgs>>;
  _allManagerLoginsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllManagerLoginsMetaArgs>>;
  Manager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<QueryManagerArgs, 'id'>>;
  allManagers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Manager']>>>, ParentType, ContextType, Partial<QueryAllManagersArgs>>;
  _allManagersMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllManagersMetaArgs>>;
  ManagersToPermission?: Resolver<Maybe<ResolversTypes['ManagersToPermission']>, ParentType, ContextType, RequireFields<QueryManagersToPermissionArgs, 'id'>>;
  allManagersToPermissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManagersToPermission']>>>, ParentType, ContextType, Partial<QueryAllManagersToPermissionsArgs>>;
  _allManagersToPermissionsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllManagersToPermissionsMetaArgs>>;
  ManagersToRole?: Resolver<Maybe<ResolversTypes['ManagersToRole']>, ParentType, ContextType, RequireFields<QueryManagersToRoleArgs, 'id'>>;
  allManagersToRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManagersToRole']>>>, ParentType, ContextType, Partial<QueryAllManagersToRolesArgs>>;
  _allManagersToRolesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllManagersToRolesMetaArgs>>;
  MessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<QueryMessageTemplateArgs, 'id'>>;
  allMessageTemplates?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageTemplate']>>>, ParentType, ContextType, Partial<QueryAllMessageTemplatesArgs>>;
  _allMessageTemplatesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMessageTemplatesMetaArgs>>;
  MessageType?: Resolver<Maybe<ResolversTypes['MessageType']>, ParentType, ContextType, RequireFields<QueryMessageTypeArgs, 'id'>>;
  allMessageTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageType']>>>, ParentType, ContextType, Partial<QueryAllMessageTypesArgs>>;
  _allMessageTypesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMessageTypesMetaArgs>>;
  Meta?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  Permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<QueryPermissionArgs, 'id'>>;
  allPermissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Permission']>>>, ParentType, ContextType, Partial<QueryAllPermissionsArgs>>;
  _allPermissionsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllPermissionsMetaArgs>>;
  getManagerPermissions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  getPermissionsWithMeta?: Resolver<Array<Maybe<ResolversTypes['PermissionsWithMeta']>>, ParentType, ContextType>;
  getPermissionsOfManagerWithMeta?: Resolver<Array<Maybe<ResolversTypes['PermissionsWithMeta']>>, ParentType, ContextType, RequireFields<QueryGetPermissionsOfManagerWithMetaArgs, 'managerId'>>;
  Role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<QueryRoleArgs, 'id'>>;
  allRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Role']>>>, ParentType, ContextType, Partial<QueryAllRolesArgs>>;
  _allRolesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllRolesMetaArgs>>;
  RolesToPermission?: Resolver<Maybe<ResolversTypes['RolesToPermission']>, ParentType, ContextType, RequireFields<QueryRolesToPermissionArgs, 'id'>>;
  allRolesToPermissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['RolesToPermission']>>>, ParentType, ContextType, Partial<QueryAllRolesToPermissionsArgs>>;
  _allRolesToPermissionsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllRolesToPermissionsMetaArgs>>;
  Stat?: Resolver<Maybe<ResolversTypes['Stat']>, ParentType, ContextType, RequireFields<QueryStatArgs, 'id'>>;
  allStats?: Resolver<Maybe<Array<Maybe<ResolversTypes['Stat']>>>, ParentType, ContextType, Partial<QueryAllStatsArgs>>;
  _allStatsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllStatsMetaArgs>>;
  Tag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QueryTagArgs, 'id'>>;
  allTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, Partial<QueryAllTagsArgs>>;
  _allTagsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllTagsMetaArgs>>;
  Tenant?: Resolver<Maybe<ResolversTypes['Tenant']>, ParentType, ContextType, RequireFields<QueryTenantArgs, 'id'>>;
  allTenants?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tenant']>>>, ParentType, ContextType, Partial<QueryAllTenantsArgs>>;
  _allTenantsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllTenantsMetaArgs>>;
  Unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<QueryUnitArgs, 'id'>>;
  allUnits?: Resolver<Maybe<Array<Maybe<ResolversTypes['Unit']>>>, ParentType, ContextType, Partial<QueryAllUnitsArgs>>;
  _allUnitsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllUnitsMetaArgs>>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  allUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<QueryAllUsersArgs>>;
  _allUsersMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllUsersMetaArgs>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAdmRefreshToken?: Resolver<Maybe<ResolversTypes['AdmRefreshToken']>, ParentType, ContextType, RequireFields<MutationCreateAdmRefreshTokenArgs, 'create' | 'managerId' | 'token'>>;
  updateAdmRefreshToken?: Resolver<Maybe<ResolversTypes['AdmRefreshToken']>, ParentType, ContextType, RequireFields<MutationUpdateAdmRefreshTokenArgs, 'id' | 'create' | 'managerId' | 'token'>>;
  removeAdmRefreshToken?: Resolver<Maybe<ResolversTypes['AdmRefreshToken']>, ParentType, ContextType, RequireFields<MutationRemoveAdmRefreshTokenArgs, 'id'>>;
  createAggregateTracking?: Resolver<Maybe<ResolversTypes['AggregateTracking']>, ParentType, ContextType, RequireFields<MutationCreateAggregateTrackingArgs, 'entityTypeId' | 'entityId' | 'lastAggregatesComputed' | 'lastEntityUpdate' | 'aggregateVersion'>>;
  updateAggregateTracking?: Resolver<Maybe<ResolversTypes['AggregateTracking']>, ParentType, ContextType, RequireFields<MutationUpdateAggregateTrackingArgs, 'id' | 'entityTypeId' | 'entityId' | 'lastAggregatesComputed' | 'lastEntityUpdate' | 'aggregateVersion'>>;
  removeAggregateTracking?: Resolver<Maybe<ResolversTypes['AggregateTracking']>, ParentType, ContextType, RequireFields<MutationRemoveAggregateTrackingArgs, 'id'>>;
  createAppLogin?: Resolver<Maybe<ResolversTypes['AppLogin']>, ParentType, ContextType, RequireFields<MutationCreateAppLoginArgs, 'login' | 'passwordHash' | 'userId'>>;
  updateAppLogin?: Resolver<Maybe<ResolversTypes['AppLogin']>, ParentType, ContextType, RequireFields<MutationUpdateAppLoginArgs, 'id' | 'login' | 'passwordHash' | 'userId'>>;
  removeAppLogin?: Resolver<Maybe<ResolversTypes['AppLogin']>, ParentType, ContextType, RequireFields<MutationRemoveAppLoginArgs, 'id'>>;
  createAppRefreshToken?: Resolver<Maybe<ResolversTypes['AppRefreshToken']>, ParentType, ContextType, RequireFields<MutationCreateAppRefreshTokenArgs, 'create' | 'userId' | 'token'>>;
  updateAppRefreshToken?: Resolver<Maybe<ResolversTypes['AppRefreshToken']>, ParentType, ContextType, RequireFields<MutationUpdateAppRefreshTokenArgs, 'id' | 'create' | 'userId' | 'token'>>;
  removeAppRefreshToken?: Resolver<Maybe<ResolversTypes['AppRefreshToken']>, ParentType, ContextType, RequireFields<MutationRemoveAppRefreshTokenArgs, 'id'>>;
  createAuditLogActionType?: Resolver<Maybe<ResolversTypes['AuditLogActionType']>, ParentType, ContextType, RequireFields<MutationCreateAuditLogActionTypeArgs, 'id'>>;
  updateAuditLogActionType?: Resolver<Maybe<ResolversTypes['AuditLogActionType']>, ParentType, ContextType, RequireFields<MutationUpdateAuditLogActionTypeArgs, 'id'>>;
  removeAuditLogActionType?: Resolver<Maybe<ResolversTypes['AuditLogActionType']>, ParentType, ContextType, RequireFields<MutationRemoveAuditLogActionTypeArgs, 'id'>>;
  createAuditLog?: Resolver<Maybe<ResolversTypes['AuditLog']>, ParentType, ContextType, RequireFields<MutationCreateAuditLogArgs, 'date' | 'title' | 'entityTypeId' | 'entityId' | 'actionTypeId'>>;
  updateAuditLog?: Resolver<Maybe<ResolversTypes['AuditLog']>, ParentType, ContextType, RequireFields<MutationUpdateAuditLogArgs, 'id' | 'date' | 'title' | 'entityTypeId' | 'entityId' | 'actionTypeId'>>;
  removeAuditLog?: Resolver<Maybe<ResolversTypes['AuditLog']>, ParentType, ContextType, RequireFields<MutationRemoveAuditLogArgs, 'id'>>;
  createAutogenerationHistoryEntry?: Resolver<Maybe<ResolversTypes['AutogenerationHistoryEntry']>, ParentType, ContextType, RequireFields<MutationCreateAutogenerationHistoryEntryArgs, 'date' | 'originalEntityType' | 'originalEntityId' | 'autogenerationRuleId' | 'version' | 'errorOccurred'>>;
  updateAutogenerationHistoryEntry?: Resolver<Maybe<ResolversTypes['AutogenerationHistoryEntry']>, ParentType, ContextType, RequireFields<MutationUpdateAutogenerationHistoryEntryArgs, 'id' | 'date' | 'originalEntityType' | 'originalEntityId' | 'autogenerationRuleId' | 'version' | 'errorOccurred'>>;
  removeAutogenerationHistoryEntry?: Resolver<Maybe<ResolversTypes['AutogenerationHistoryEntry']>, ParentType, ContextType, RequireFields<MutationRemoveAutogenerationHistoryEntryArgs, 'id'>>;
  createAutogenerationRule?: Resolver<Maybe<ResolversTypes['AutogenerationRule']>, ParentType, ContextType, RequireFields<MutationCreateAutogenerationRuleArgs, 'id' | 'title' | 'originalEntityType' | 'generatingEntityType' | 'originalEntityFilter' | 'generatingEntityConstructionRules' | 'ignoreVersionOnHistory'>>;
  updateAutogenerationRule?: Resolver<Maybe<ResolversTypes['AutogenerationRule']>, ParentType, ContextType, RequireFields<MutationUpdateAutogenerationRuleArgs, 'id' | 'title' | 'originalEntityType' | 'generatingEntityType' | 'originalEntityFilter' | 'generatingEntityConstructionRules' | 'ignoreVersionOnHistory'>>;
  removeAutogenerationRule?: Resolver<Maybe<ResolversTypes['AutogenerationRule']>, ParentType, ContextType, RequireFields<MutationRemoveAutogenerationRuleArgs, 'id'>>;
  createDelegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<MutationCreateDelegationArgs, 'fromId' | 'toId' | 'active'>>;
  updateDelegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<MutationUpdateDelegationArgs, 'id' | 'fromId' | 'toId' | 'active'>>;
  removeDelegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<MutationRemoveDelegationArgs, 'id'>>;
  createEntity?: Resolver<Maybe<ResolversTypes['Entity']>, ParentType, ContextType, RequireFields<MutationCreateEntityArgs, 'id'>>;
  updateEntity?: Resolver<Maybe<ResolversTypes['Entity']>, ParentType, ContextType, RequireFields<MutationUpdateEntityArgs, 'id'>>;
  removeEntity?: Resolver<Maybe<ResolversTypes['Entity']>, ParentType, ContextType, RequireFields<MutationRemoveEntityArgs, 'id'>>;
  createFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationCreateFileArgs, 'originalName' | 'url' | 'mimetype' | 's3Key' | 'eTag'>>;
  updateFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationUpdateFileArgs, 'id' | 'originalName' | 'url' | 'mimetype' | 's3Key' | 'eTag'>>;
  removeFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationRemoveFileArgs, 'id'>>;
  createLanguage?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<MutationCreateLanguageArgs, 'id'>>;
  updateLanguage?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<MutationUpdateLanguageArgs, 'id'>>;
  removeLanguage?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<MutationRemoveLanguageArgs, 'id'>>;
  createManagerLogin?: Resolver<Maybe<ResolversTypes['ManagerLogin']>, ParentType, ContextType, RequireFields<MutationCreateManagerLoginArgs, 'login' | 'passwordHash' | 'role' | 'emailVerified' | 'initialPasswordChanged' | 'locked' | 'managerId'>>;
  updateManagerLogin?: Resolver<Maybe<ResolversTypes['ManagerLogin']>, ParentType, ContextType, RequireFields<MutationUpdateManagerLoginArgs, 'id' | 'login' | 'passwordHash' | 'role' | 'emailVerified' | 'initialPasswordChanged' | 'locked' | 'managerId'>>;
  removeManagerLogin?: Resolver<Maybe<ResolversTypes['ManagerLogin']>, ParentType, ContextType, RequireFields<MutationRemoveManagerLoginArgs, 'id'>>;
  createManager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<MutationCreateManagerArgs, 'lastName' | 'firstName' | 'email' | 'headOfUnit' | 'active'>>;
  updateManager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<MutationUpdateManagerArgs, 'id' | 'lastName' | 'firstName' | 'email' | 'headOfUnit' | 'active'>>;
  removeManager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<MutationRemoveManagerArgs, 'id'>>;
  createManagersToPermission?: Resolver<Maybe<ResolversTypes['ManagersToPermission']>, ParentType, ContextType, RequireFields<MutationCreateManagersToPermissionArgs, 'managerId' | 'permissionId'>>;
  updateManagersToPermission?: Resolver<Maybe<ResolversTypes['ManagersToPermission']>, ParentType, ContextType, RequireFields<MutationUpdateManagersToPermissionArgs, 'id' | 'managerId' | 'permissionId'>>;
  removeManagersToPermission?: Resolver<Maybe<ResolversTypes['ManagersToPermission']>, ParentType, ContextType, RequireFields<MutationRemoveManagersToPermissionArgs, 'id'>>;
  createManagersToRole?: Resolver<Maybe<ResolversTypes['ManagersToRole']>, ParentType, ContextType, RequireFields<MutationCreateManagersToRoleArgs, 'managerId' | 'roleId'>>;
  updateManagersToRole?: Resolver<Maybe<ResolversTypes['ManagersToRole']>, ParentType, ContextType, RequireFields<MutationUpdateManagersToRoleArgs, 'id' | 'managerId' | 'roleId'>>;
  removeManagersToRole?: Resolver<Maybe<ResolversTypes['ManagersToRole']>, ParentType, ContextType, RequireFields<MutationRemoveManagersToRoleArgs, 'id'>>;
  createMessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<MutationCreateMessageTemplateArgs, 'id' | 'title' | 'secretData' | 'messageTypeId'>>;
  updateMessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<MutationUpdateMessageTemplateArgs, 'id' | 'title' | 'secretData' | 'messageTypeId'>>;
  removeMessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<MutationRemoveMessageTemplateArgs, 'id'>>;
  createMessageType?: Resolver<Maybe<ResolversTypes['MessageType']>, ParentType, ContextType, RequireFields<MutationCreateMessageTypeArgs, 'id' | 'title'>>;
  updateMessageType?: Resolver<Maybe<ResolversTypes['MessageType']>, ParentType, ContextType, RequireFields<MutationUpdateMessageTypeArgs, 'id' | 'title'>>;
  removeMessageType?: Resolver<Maybe<ResolversTypes['MessageType']>, ParentType, ContextType, RequireFields<MutationRemoveMessageTypeArgs, 'id'>>;
  createPermission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<MutationCreatePermissionArgs, 'id'>>;
  updatePermission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<MutationUpdatePermissionArgs, 'id'>>;
  removePermission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<MutationRemovePermissionArgs, 'id'>>;
  createRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationCreateRoleArgs, 'id' | 'hasAllPermissions' | 'allTenantsAvailable'>>;
  updateRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'id' | 'hasAllPermissions' | 'allTenantsAvailable'>>;
  removeRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationRemoveRoleArgs, 'id'>>;
  createRolesToPermission?: Resolver<Maybe<ResolversTypes['RolesToPermission']>, ParentType, ContextType, RequireFields<MutationCreateRolesToPermissionArgs, 'roleId' | 'permissionId'>>;
  updateRolesToPermission?: Resolver<Maybe<ResolversTypes['RolesToPermission']>, ParentType, ContextType, RequireFields<MutationUpdateRolesToPermissionArgs, 'id' | 'roleId' | 'permissionId'>>;
  removeRolesToPermission?: Resolver<Maybe<ResolversTypes['RolesToPermission']>, ParentType, ContextType, RequireFields<MutationRemoveRolesToPermissionArgs, 'id'>>;
  recalculateStat?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  createStat?: Resolver<Maybe<ResolversTypes['Stat']>, ParentType, ContextType, RequireFields<MutationCreateStatArgs, 'id'>>;
  updateStat?: Resolver<Maybe<ResolversTypes['Stat']>, ParentType, ContextType, RequireFields<MutationUpdateStatArgs, 'id'>>;
  removeStat?: Resolver<Maybe<ResolversTypes['Stat']>, ParentType, ContextType, RequireFields<MutationRemoveStatArgs, 'id'>>;
  createTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, Partial<MutationCreateTagArgs>>;
  updateTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationUpdateTagArgs, 'id'>>;
  removeTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationRemoveTagArgs, 'id'>>;
  createTenant?: Resolver<Maybe<ResolversTypes['Tenant']>, ParentType, ContextType, RequireFields<MutationCreateTenantArgs, 'utcOffset'>>;
  updateTenant?: Resolver<Maybe<ResolversTypes['Tenant']>, ParentType, ContextType, RequireFields<MutationUpdateTenantArgs, 'id' | 'utcOffset'>>;
  removeTenant?: Resolver<Maybe<ResolversTypes['Tenant']>, ParentType, ContextType, RequireFields<MutationRemoveTenantArgs, 'id'>>;
  createUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, Partial<MutationCreateUnitArgs>>;
  updateUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<MutationUpdateUnitArgs, 'id'>>;
  removeUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<MutationRemoveUnitArgs, 'id'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'lastname' | 'firstname' | 'email'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'lastname' | 'firstname' | 'email'>>;
  removeUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationRemoveUserArgs, 'id'>>;
};

export type AggregateTrackingResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateTracking'] = ResolversParentTypes['AggregateTracking']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  entityTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastAggregatesComputed?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  lastEntityUpdate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  aggregateVersion?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppLoginResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppLogin'] = ResolversParentTypes['AppLogin']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppRefreshTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppRefreshToken'] = ResolversParentTypes['AppRefreshToken']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  create?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuditLogActionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuditLogActionType'] = ResolversParentTypes['AuditLogActionType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuditLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuditLog'] = ResolversParentTypes['AuditLog']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  actionTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  managerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  foreign?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  foreignEntityType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foreignEntityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  actionData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AutogenerationHistoryEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AutogenerationHistoryEntry'] = ResolversParentTypes['AutogenerationHistoryEntry']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  originalEntityType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalEntityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  autogenerationRuleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  errorOccurred?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AutogenerationRuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['AutogenerationRule'] = ResolversParentTypes['AutogenerationRule']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  originalEntityType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  generatingEntityType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalEntityFilter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  generatingEntityConstructionRules?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ignoreVersionOnHistory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
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

export type EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telegramLogin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unitId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  headOfUnit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tenantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
  messageTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageType'] = ResolversParentTypes['MessageType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  hasAllPermissions?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  allTenantsAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
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

export type TenantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tenant'] = ResolversParentTypes['Tenant']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  utcOffset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  tenantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Time?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  TimeZone?: GraphQLScalarType;
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
  DID?: GraphQLScalarType;
  CountryCode?: GraphQLScalarType;
  Locale?: GraphQLScalarType;
  RoutingNumber?: GraphQLScalarType;
  AccountNumber?: GraphQLScalarType;
  AdmRefreshToken?: AdmRefreshTokenResolvers<ContextType>;
  ListMetadata?: ListMetadataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  AggregateTracking?: AggregateTrackingResolvers<ContextType>;
  AppLogin?: AppLoginResolvers<ContextType>;
  AppRefreshToken?: AppRefreshTokenResolvers<ContextType>;
  AuditLogActionType?: AuditLogActionTypeResolvers<ContextType>;
  AuditLog?: AuditLogResolvers<ContextType>;
  AutogenerationHistoryEntry?: AutogenerationHistoryEntryResolvers<ContextType>;
  AutogenerationRule?: AutogenerationRuleResolvers<ContextType>;
  Delegation?: DelegationResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  ManagerLogin?: ManagerLoginResolvers<ContextType>;
  Manager?: ManagerResolvers<ContextType>;
  ManagersToPermission?: ManagersToPermissionResolvers<ContextType>;
  ManagersToRole?: ManagersToRoleResolvers<ContextType>;
  MessageTemplate?: MessageTemplateResolvers<ContextType>;
  MessageType?: MessageTypeResolvers<ContextType>;
  Permission?: PermissionResolvers<ContextType>;
  PermissionsWithMeta?: PermissionsWithMetaResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RolesToPermission?: RolesToPermissionResolvers<ContextType>;
  Stat?: StatResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Tenant?: TenantResolvers<ContextType>;
  Unit?: UnitResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

