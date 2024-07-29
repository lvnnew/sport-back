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
  /** A field whose value is either an IPv4 or IPv6 address: https://en.wikipedia.org/wiki/IP_address. */
  IP: any;
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
  /** A field whose value conforms to the standard cuid format as specified in https://github.com/ericelliott/cuid#broken-down */
  Cuid: any;
  /** A field whose value is a Semantic Version: https://semver.org */
  SemVer: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
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
  managerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  token?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  Club?: Maybe<Club>;
  allClubs?: Maybe<Array<Maybe<Club>>>;
  _allClubsMeta?: Maybe<ListMetadata>;
  Competition?: Maybe<Competition>;
  allCompetitions?: Maybe<Array<Maybe<Competition>>>;
  _allCompetitionsMeta?: Maybe<ListMetadata>;
  ConfigurationVariable?: Maybe<ConfigurationVariable>;
  allConfigurationVariables?: Maybe<Array<Maybe<ConfigurationVariable>>>;
  _allConfigurationVariablesMeta?: Maybe<ListMetadata>;
  Delegation?: Maybe<Delegation>;
  allDelegations?: Maybe<Array<Maybe<Delegation>>>;
  _allDelegationsMeta?: Maybe<ListMetadata>;
  Entity?: Maybe<Entity>;
  allEntities?: Maybe<Array<Maybe<Entity>>>;
  _allEntitiesMeta?: Maybe<ListMetadata>;
  EntitiesTracking?: Maybe<EntitiesTracking>;
  allEntitiesTrackings?: Maybe<Array<Maybe<EntitiesTracking>>>;
  _allEntitiesTrackingsMeta?: Maybe<ListMetadata>;
  Event?: Maybe<Event>;
  allEvents?: Maybe<Array<Maybe<Event>>>;
  _allEventsMeta?: Maybe<ListMetadata>;
  EventTypeCategory?: Maybe<EventTypeCategory>;
  allEventTypeCategories?: Maybe<Array<Maybe<EventTypeCategory>>>;
  _allEventTypeCategoriesMeta?: Maybe<ListMetadata>;
  EventType?: Maybe<EventType>;
  allEventTypes?: Maybe<Array<Maybe<EventType>>>;
  _allEventTypesMeta?: Maybe<ListMetadata>;
  File?: Maybe<File>;
  allFiles?: Maybe<Array<Maybe<File>>>;
  _allFilesMeta?: Maybe<ListMetadata>;
  Glossary?: Maybe<Glossary>;
  allGlossaries?: Maybe<Array<Maybe<Glossary>>>;
  _allGlossariesMeta?: Maybe<ListMetadata>;
  getHelp: Scalars['String'];
  HistoryOfPlayerRole?: Maybe<HistoryOfPlayerRole>;
  allHistoryOfPlayerRoles?: Maybe<Array<Maybe<HistoryOfPlayerRole>>>;
  _allHistoryOfPlayerRolesMeta?: Maybe<ListMetadata>;
  Language?: Maybe<Language>;
  allLanguages?: Maybe<Array<Maybe<Language>>>;
  _allLanguagesMeta?: Maybe<ListMetadata>;
  MailingCampaign?: Maybe<MailingCampaign>;
  allMailingCampaigns?: Maybe<Array<Maybe<MailingCampaign>>>;
  _allMailingCampaignsMeta?: Maybe<ListMetadata>;
  MailingCampaignStatus?: Maybe<MailingCampaignStatus>;
  allMailingCampaignStatuses?: Maybe<Array<Maybe<MailingCampaignStatus>>>;
  _allMailingCampaignStatusesMeta?: Maybe<ListMetadata>;
  getMessageQuantityPerStatus: QuantityPerStatus;
  MailingMessage?: Maybe<MailingMessage>;
  allMailingMessages?: Maybe<Array<Maybe<MailingMessage>>>;
  _allMailingMessagesMeta?: Maybe<ListMetadata>;
  MailingMessageStatus?: Maybe<MailingMessageStatus>;
  allMailingMessageStatuses?: Maybe<Array<Maybe<MailingMessageStatus>>>;
  _allMailingMessageStatusesMeta?: Maybe<ListMetadata>;
  MailingType?: Maybe<MailingType>;
  allMailingTypes?: Maybe<Array<Maybe<MailingType>>>;
  _allMailingTypesMeta?: Maybe<ListMetadata>;
  ManagerLogin?: Maybe<ManagerLogin>;
  allManagerLogins?: Maybe<Array<Maybe<ManagerLogin>>>;
  _allManagerLoginsMeta?: Maybe<ListMetadata>;
  ManagerLoginType?: Maybe<ManagerLoginType>;
  allManagerLoginTypes?: Maybe<Array<Maybe<ManagerLoginType>>>;
  _allManagerLoginTypesMeta?: Maybe<ListMetadata>;
  Manager?: Maybe<Manager>;
  allManagers?: Maybe<Array<Maybe<Manager>>>;
  _allManagersMeta?: Maybe<ListMetadata>;
  ManagersToPermission?: Maybe<ManagersToPermission>;
  allManagersToPermissions?: Maybe<Array<Maybe<ManagersToPermission>>>;
  _allManagersToPermissionsMeta?: Maybe<ListMetadata>;
  ManagersToRole?: Maybe<ManagersToRole>;
  allManagersToRoles?: Maybe<Array<Maybe<ManagersToRole>>>;
  _allManagersToRolesMeta?: Maybe<ListMetadata>;
  Match?: Maybe<Match>;
  allMatches?: Maybe<Array<Maybe<Match>>>;
  _allMatchesMeta?: Maybe<ListMetadata>;
  MatchPeriodMarkup?: Maybe<MatchPeriodMarkup>;
  allMatchPeriodMarkups?: Maybe<Array<Maybe<MatchPeriodMarkup>>>;
  _allMatchPeriodMarkupsMeta?: Maybe<ListMetadata>;
  MatchRequest?: Maybe<MatchRequest>;
  allMatchRequests?: Maybe<Array<Maybe<MatchRequest>>>;
  _allMatchRequestsMeta?: Maybe<ListMetadata>;
  MatchStatus?: Maybe<MatchStatus>;
  allMatchStatuses?: Maybe<Array<Maybe<MatchStatus>>>;
  _allMatchStatusesMeta?: Maybe<ListMetadata>;
  MatchVideo?: Maybe<MatchVideo>;
  allMatchVideos?: Maybe<Array<Maybe<MatchVideo>>>;
  _allMatchVideosMeta?: Maybe<ListMetadata>;
  MessageTemplateLangVariant?: Maybe<MessageTemplateLangVariant>;
  allMessageTemplateLangVariants?: Maybe<Array<Maybe<MessageTemplateLangVariant>>>;
  _allMessageTemplateLangVariantsMeta?: Maybe<ListMetadata>;
  MessageTemplate?: Maybe<MessageTemplate>;
  allMessageTemplates?: Maybe<Array<Maybe<MessageTemplate>>>;
  _allMessageTemplatesMeta?: Maybe<ListMetadata>;
  MessageType?: Maybe<MessageType>;
  allMessageTypes?: Maybe<Array<Maybe<MessageType>>>;
  _allMessageTypesMeta?: Maybe<ListMetadata>;
  Meta?: Maybe<Scalars['JSONObject']>;
  Organizator?: Maybe<Organizator>;
  allOrganizators?: Maybe<Array<Maybe<Organizator>>>;
  _allOrganizatorsMeta?: Maybe<ListMetadata>;
  Parent?: Maybe<Parent>;
  allParents?: Maybe<Array<Maybe<Parent>>>;
  _allParentsMeta?: Maybe<ListMetadata>;
  PeriodType?: Maybe<PeriodType>;
  allPeriodTypes?: Maybe<Array<Maybe<PeriodType>>>;
  _allPeriodTypesMeta?: Maybe<ListMetadata>;
  Permission?: Maybe<Permission>;
  allPermissions?: Maybe<Array<Maybe<Permission>>>;
  _allPermissionsMeta?: Maybe<ListMetadata>;
  PlayerAggregatedRole?: Maybe<PlayerAggregatedRole>;
  allPlayerAggregatedRoles?: Maybe<Array<Maybe<PlayerAggregatedRole>>>;
  _allPlayerAggregatedRolesMeta?: Maybe<ListMetadata>;
  PlayerCompetitionRating?: Maybe<PlayerCompetitionRating>;
  allPlayerCompetitionRatings?: Maybe<Array<Maybe<PlayerCompetitionRating>>>;
  _allPlayerCompetitionRatingsMeta?: Maybe<ListMetadata>;
  PlayerForCompetitionTeam?: Maybe<PlayerForCompetitionTeam>;
  allPlayerForCompetitionTeams?: Maybe<Array<Maybe<PlayerForCompetitionTeam>>>;
  _allPlayerForCompetitionTeamsMeta?: Maybe<ListMetadata>;
  PlayerForMatchRequest?: Maybe<PlayerForMatchRequest>;
  allPlayerForMatchRequests?: Maybe<Array<Maybe<PlayerForMatchRequest>>>;
  _allPlayerForMatchRequestsMeta?: Maybe<ListMetadata>;
  PlayerForTeamMatchList?: Maybe<PlayerForTeamMatchList>;
  allPlayerForTeamMatchLists?: Maybe<Array<Maybe<PlayerForTeamMatchList>>>;
  _allPlayerForTeamMatchListsMeta?: Maybe<ListMetadata>;
  PlayerMatchRating?: Maybe<PlayerMatchRating>;
  allPlayerMatchRatings?: Maybe<Array<Maybe<PlayerMatchRating>>>;
  _allPlayerMatchRatingsMeta?: Maybe<ListMetadata>;
  PlayerRank?: Maybe<PlayerRank>;
  allPlayerRanks?: Maybe<Array<Maybe<PlayerRank>>>;
  _allPlayerRanksMeta?: Maybe<ListMetadata>;
  PlayerRole?: Maybe<PlayerRole>;
  allPlayerRoles?: Maybe<Array<Maybe<PlayerRole>>>;
  _allPlayerRolesMeta?: Maybe<ListMetadata>;
  Player?: Maybe<Player>;
  allPlayers?: Maybe<Array<Maybe<Player>>>;
  _allPlayersMeta?: Maybe<ListMetadata>;
  getPermissions: Array<Scalars['String']>;
  getPermissionsWithMeta: Array<PermissionsWithMeta>;
  getPermissionsOfManagerWithMeta: Array<PermissionsWithMeta>;
  getRoles: Array<Scalars['String']>;
  getRolesOfManager: Array<Scalars['String']>;
  ReportForClub?: Maybe<ReportForClub>;
  allReportForClubs?: Maybe<Array<Maybe<ReportForClub>>>;
  _allReportForClubsMeta?: Maybe<ListMetadata>;
  ReportForOrganization?: Maybe<ReportForOrganization>;
  allReportForOrganizations?: Maybe<Array<Maybe<ReportForOrganization>>>;
  _allReportForOrganizationsMeta?: Maybe<ListMetadata>;
  ReportForParent?: Maybe<ReportForParent>;
  allReportForParents?: Maybe<Array<Maybe<ReportForParent>>>;
  _allReportForParentsMeta?: Maybe<ListMetadata>;
  ReportForTeam?: Maybe<ReportForTeam>;
  allReportForTeams?: Maybe<Array<Maybe<ReportForTeam>>>;
  _allReportForTeamsMeta?: Maybe<ListMetadata>;
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
  TeamForCompetition?: Maybe<TeamForCompetition>;
  allTeamForCompetitions?: Maybe<Array<Maybe<TeamForCompetition>>>;
  _allTeamForCompetitionsMeta?: Maybe<ListMetadata>;
  TeamForPlayer?: Maybe<TeamForPlayer>;
  allTeamForPlayers?: Maybe<Array<Maybe<TeamForPlayer>>>;
  _allTeamForPlayersMeta?: Maybe<ListMetadata>;
  TeamMatchList?: Maybe<TeamMatchList>;
  allTeamMatchLists?: Maybe<Array<Maybe<TeamMatchList>>>;
  _allTeamMatchListsMeta?: Maybe<ListMetadata>;
  TeamMatchReport?: Maybe<TeamMatchReport>;
  allTeamMatchReports?: Maybe<Array<Maybe<TeamMatchReport>>>;
  _allTeamMatchReportsMeta?: Maybe<ListMetadata>;
  Team?: Maybe<Team>;
  allTeams?: Maybe<Array<Maybe<Team>>>;
  _allTeamsMeta?: Maybe<ListMetadata>;
  TemplateStyle?: Maybe<TemplateStyle>;
  allTemplateStyles?: Maybe<Array<Maybe<TemplateStyle>>>;
  _allTemplateStylesMeta?: Maybe<ListMetadata>;
  Tenant?: Maybe<Tenant>;
  allTenants?: Maybe<Array<Maybe<Tenant>>>;
  _allTenantsMeta?: Maybe<ListMetadata>;
  Unit?: Maybe<Unit>;
  allUnits?: Maybe<Array<Maybe<Unit>>>;
  _allUnitsMeta?: Maybe<ListMetadata>;
  User?: Maybe<User>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  _allUsersMeta?: Maybe<ListMetadata>;
  WscContact?: Maybe<WscContact>;
  allWscContacts?: Maybe<Array<Maybe<WscContact>>>;
  _allWscContactsMeta?: Maybe<ListMetadata>;
  WscMessage?: Maybe<WscMessage>;
  allWscMessages?: Maybe<Array<Maybe<WscMessage>>>;
  _allWscMessagesMeta?: Maybe<ListMetadata>;
  WscUser?: Maybe<WscUser>;
  allWscUsers?: Maybe<Array<Maybe<WscUser>>>;
  _allWscUsersMeta?: Maybe<ListMetadata>;
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


export type QueryClubArgs = {
  id: Scalars['Int'];
};


export type QueryAllClubsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ClubFilter>;
};


export type Query_AllClubsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ClubFilter>;
};


export type QueryCompetitionArgs = {
  id: Scalars['Int'];
};


export type QueryAllCompetitionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CompetitionFilter>;
};


export type Query_AllCompetitionsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<CompetitionFilter>;
};


export type QueryConfigurationVariableArgs = {
  id: Scalars['ID'];
};


export type QueryAllConfigurationVariablesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ConfigurationVariableFilter>;
};


export type Query_AllConfigurationVariablesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ConfigurationVariableFilter>;
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


export type QueryEntitiesTrackingArgs = {
  id: Scalars['Int'];
};


export type QueryAllEntitiesTrackingsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<EntitiesTrackingFilter>;
};


export type Query_AllEntitiesTrackingsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<EntitiesTrackingFilter>;
};


export type QueryEventArgs = {
  id: Scalars['Int'];
};


export type QueryAllEventsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<EventFilter>;
};


export type Query_AllEventsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<EventFilter>;
};


export type QueryEventTypeCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryAllEventTypeCategoriesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<EventTypeCategoryFilter>;
};


export type Query_AllEventTypeCategoriesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<EventTypeCategoryFilter>;
};


export type QueryEventTypeArgs = {
  id: Scalars['ID'];
};


export type QueryAllEventTypesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<EventTypeFilter>;
};


export type Query_AllEventTypesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<EventTypeFilter>;
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


export type QueryGlossaryArgs = {
  id: Scalars['Int'];
};


export type QueryAllGlossariesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<GlossaryFilter>;
};


export type Query_AllGlossariesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<GlossaryFilter>;
};


export type QueryGetHelpArgs = {
  entityType: EntityType;
};


export type QueryHistoryOfPlayerRoleArgs = {
  id: Scalars['Int'];
};


export type QueryAllHistoryOfPlayerRolesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<HistoryOfPlayerRoleFilter>;
};


export type Query_AllHistoryOfPlayerRolesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<HistoryOfPlayerRoleFilter>;
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


export type QueryMailingCampaignArgs = {
  id: Scalars['Int'];
};


export type QueryAllMailingCampaignsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MailingCampaignFilter>;
};


export type Query_AllMailingCampaignsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MailingCampaignFilter>;
};


export type QueryMailingCampaignStatusArgs = {
  id: Scalars['ID'];
};


export type QueryAllMailingCampaignStatusesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MailingCampaignStatusFilter>;
};


export type Query_AllMailingCampaignStatusesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MailingCampaignStatusFilter>;
};


export type QueryGetMessageQuantityPerStatusArgs = {
  mailingCampaignId: Scalars['Int'];
};


export type QueryMailingMessageArgs = {
  id: Scalars['Int'];
};


export type QueryAllMailingMessagesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MailingMessageFilter>;
};


export type Query_AllMailingMessagesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MailingMessageFilter>;
};


export type QueryMailingMessageStatusArgs = {
  id: Scalars['ID'];
};


export type QueryAllMailingMessageStatusesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MailingMessageStatusFilter>;
};


export type Query_AllMailingMessageStatusesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MailingMessageStatusFilter>;
};


export type QueryMailingTypeArgs = {
  id: Scalars['ID'];
};


export type QueryAllMailingTypesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MailingTypeFilter>;
};


export type Query_AllMailingTypesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MailingTypeFilter>;
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


export type QueryManagerLoginTypeArgs = {
  id: Scalars['ID'];
};


export type QueryAllManagerLoginTypesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ManagerLoginTypeFilter>;
};


export type Query_AllManagerLoginTypesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ManagerLoginTypeFilter>;
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


export type QueryMatchArgs = {
  id: Scalars['Int'];
};


export type QueryAllMatchesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MatchFilter>;
};


export type Query_AllMatchesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MatchFilter>;
};


export type QueryMatchPeriodMarkupArgs = {
  id: Scalars['Int'];
};


export type QueryAllMatchPeriodMarkupsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MatchPeriodMarkupFilter>;
};


export type Query_AllMatchPeriodMarkupsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MatchPeriodMarkupFilter>;
};


export type QueryMatchRequestArgs = {
  id: Scalars['Int'];
};


export type QueryAllMatchRequestsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MatchRequestFilter>;
};


export type Query_AllMatchRequestsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MatchRequestFilter>;
};


export type QueryMatchStatusArgs = {
  id: Scalars['ID'];
};


export type QueryAllMatchStatusesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MatchStatusFilter>;
};


export type Query_AllMatchStatusesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MatchStatusFilter>;
};


export type QueryMatchVideoArgs = {
  id: Scalars['Int'];
};


export type QueryAllMatchVideosArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MatchVideoFilter>;
};


export type Query_AllMatchVideosMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MatchVideoFilter>;
};


export type QueryMessageTemplateLangVariantArgs = {
  id: Scalars['Int'];
};


export type QueryAllMessageTemplateLangVariantsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MessageTemplateLangVariantFilter>;
};


export type Query_AllMessageTemplateLangVariantsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MessageTemplateLangVariantFilter>;
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


export type QueryOrganizatorArgs = {
  id: Scalars['Int'];
};


export type QueryAllOrganizatorsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<OrganizatorFilter>;
};


export type Query_AllOrganizatorsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<OrganizatorFilter>;
};


export type QueryParentArgs = {
  id: Scalars['Int'];
};


export type QueryAllParentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ParentFilter>;
};


export type Query_AllParentsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ParentFilter>;
};


export type QueryPeriodTypeArgs = {
  id: Scalars['ID'];
};


export type QueryAllPeriodTypesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PeriodTypeFilter>;
};


export type Query_AllPeriodTypesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<PeriodTypeFilter>;
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


export type QueryPlayerAggregatedRoleArgs = {
  id: Scalars['ID'];
};


export type QueryAllPlayerAggregatedRolesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PlayerAggregatedRoleFilter>;
};


export type Query_AllPlayerAggregatedRolesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<PlayerAggregatedRoleFilter>;
};


export type QueryPlayerCompetitionRatingArgs = {
  id: Scalars['Int'];
};


export type QueryAllPlayerCompetitionRatingsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PlayerCompetitionRatingFilter>;
};


export type Query_AllPlayerCompetitionRatingsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<PlayerCompetitionRatingFilter>;
};


export type QueryPlayerForCompetitionTeamArgs = {
  id: Scalars['Int'];
};


export type QueryAllPlayerForCompetitionTeamsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PlayerForCompetitionTeamFilter>;
};


export type Query_AllPlayerForCompetitionTeamsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<PlayerForCompetitionTeamFilter>;
};


export type QueryPlayerForMatchRequestArgs = {
  id: Scalars['Int'];
};


export type QueryAllPlayerForMatchRequestsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PlayerForMatchRequestFilter>;
};


export type Query_AllPlayerForMatchRequestsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<PlayerForMatchRequestFilter>;
};


export type QueryPlayerForTeamMatchListArgs = {
  id: Scalars['Int'];
};


export type QueryAllPlayerForTeamMatchListsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PlayerForTeamMatchListFilter>;
};


export type Query_AllPlayerForTeamMatchListsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<PlayerForTeamMatchListFilter>;
};


export type QueryPlayerMatchRatingArgs = {
  id: Scalars['Int'];
};


export type QueryAllPlayerMatchRatingsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PlayerMatchRatingFilter>;
};


export type Query_AllPlayerMatchRatingsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<PlayerMatchRatingFilter>;
};


export type QueryPlayerRankArgs = {
  id: Scalars['ID'];
};


export type QueryAllPlayerRanksArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PlayerRankFilter>;
};


export type Query_AllPlayerRanksMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<PlayerRankFilter>;
};


export type QueryPlayerRoleArgs = {
  id: Scalars['ID'];
};


export type QueryAllPlayerRolesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PlayerRoleFilter>;
};


export type Query_AllPlayerRolesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<PlayerRoleFilter>;
};


export type QueryPlayerArgs = {
  id: Scalars['Int'];
};


export type QueryAllPlayersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PlayerFilter>;
};


export type Query_AllPlayersMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<PlayerFilter>;
};


export type QueryGetPermissionsOfManagerWithMetaArgs = {
  managerId: Scalars['Int'];
};


export type QueryGetRolesOfManagerArgs = {
  managerId: Scalars['Int'];
};


export type QueryReportForClubArgs = {
  id: Scalars['Int'];
};


export type QueryAllReportForClubsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ReportForClubFilter>;
};


export type Query_AllReportForClubsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ReportForClubFilter>;
};


export type QueryReportForOrganizationArgs = {
  id: Scalars['Int'];
};


export type QueryAllReportForOrganizationsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ReportForOrganizationFilter>;
};


export type Query_AllReportForOrganizationsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ReportForOrganizationFilter>;
};


export type QueryReportForParentArgs = {
  id: Scalars['Int'];
};


export type QueryAllReportForParentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ReportForParentFilter>;
};


export type Query_AllReportForParentsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ReportForParentFilter>;
};


export type QueryReportForTeamArgs = {
  id: Scalars['Int'];
};


export type QueryAllReportForTeamsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ReportForTeamFilter>;
};


export type Query_AllReportForTeamsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ReportForTeamFilter>;
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


export type QueryTeamForCompetitionArgs = {
  id: Scalars['Int'];
};


export type QueryAllTeamForCompetitionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamForCompetitionFilter>;
};


export type Query_AllTeamForCompetitionsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<TeamForCompetitionFilter>;
};


export type QueryTeamForPlayerArgs = {
  id: Scalars['Int'];
};


export type QueryAllTeamForPlayersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamForPlayerFilter>;
};


export type Query_AllTeamForPlayersMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<TeamForPlayerFilter>;
};


export type QueryTeamMatchListArgs = {
  id: Scalars['Int'];
};


export type QueryAllTeamMatchListsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamMatchListFilter>;
};


export type Query_AllTeamMatchListsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<TeamMatchListFilter>;
};


export type QueryTeamMatchReportArgs = {
  id: Scalars['Int'];
};


export type QueryAllTeamMatchReportsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamMatchReportFilter>;
};


export type Query_AllTeamMatchReportsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<TeamMatchReportFilter>;
};


export type QueryTeamArgs = {
  id: Scalars['Int'];
};


export type QueryAllTeamsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamFilter>;
};


export type Query_AllTeamsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<TeamFilter>;
};


export type QueryTemplateStyleArgs = {
  id: Scalars['Int'];
};


export type QueryAllTemplateStylesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TemplateStyleFilter>;
};


export type Query_AllTemplateStylesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<TemplateStyleFilter>;
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


export type QueryWscContactArgs = {
  id: Scalars['Int'];
};


export type QueryAllWscContactsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WscContactFilter>;
};


export type Query_AllWscContactsMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<WscContactFilter>;
};


export type QueryWscMessageArgs = {
  id: Scalars['Int'];
};


export type QueryAllWscMessagesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WscMessageFilter>;
};


export type Query_AllWscMessagesMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<WscMessageFilter>;
};


export type QueryWscUserArgs = {
  id: Scalars['Int'];
};


export type QueryAllWscUsersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WscUserFilter>;
};


export type Query_AllWscUsersMetaArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<WscUserFilter>;
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
  createClub?: Maybe<Club>;
  updateClub?: Maybe<Club>;
  removeClub?: Maybe<Club>;
  createCompetition?: Maybe<Competition>;
  updateCompetition?: Maybe<Competition>;
  removeCompetition?: Maybe<Competition>;
  createConfigurationVariable?: Maybe<ConfigurationVariable>;
  updateConfigurationVariable?: Maybe<ConfigurationVariable>;
  removeConfigurationVariable?: Maybe<ConfigurationVariable>;
  createDelegation?: Maybe<Delegation>;
  updateDelegation?: Maybe<Delegation>;
  removeDelegation?: Maybe<Delegation>;
  createEntity?: Maybe<Entity>;
  updateEntity?: Maybe<Entity>;
  removeEntity?: Maybe<Entity>;
  createEntitiesTracking?: Maybe<EntitiesTracking>;
  updateEntitiesTracking?: Maybe<EntitiesTracking>;
  removeEntitiesTracking?: Maybe<EntitiesTracking>;
  downloadEntityRecords?: Maybe<Scalars['Void']>;
  createEvent?: Maybe<Event>;
  updateEvent?: Maybe<Event>;
  removeEvent?: Maybe<Event>;
  rePostEvent?: Maybe<Scalars['Void']>;
  createEventTypeCategory?: Maybe<EventTypeCategory>;
  updateEventTypeCategory?: Maybe<EventTypeCategory>;
  removeEventTypeCategory?: Maybe<EventTypeCategory>;
  createEventType?: Maybe<EventType>;
  updateEventType?: Maybe<EventType>;
  removeEventType?: Maybe<EventType>;
  createFile?: Maybe<File>;
  updateFile?: Maybe<File>;
  removeFile?: Maybe<File>;
  createGlossary?: Maybe<Glossary>;
  updateGlossary?: Maybe<Glossary>;
  removeGlossary?: Maybe<Glossary>;
  createHistoryOfPlayerRole?: Maybe<HistoryOfPlayerRole>;
  updateHistoryOfPlayerRole?: Maybe<HistoryOfPlayerRole>;
  removeHistoryOfPlayerRole?: Maybe<HistoryOfPlayerRole>;
  createLanguage?: Maybe<Language>;
  updateLanguage?: Maybe<Language>;
  removeLanguage?: Maybe<Language>;
  createMailingCampaign?: Maybe<MailingCampaign>;
  updateMailingCampaign?: Maybe<MailingCampaign>;
  removeMailingCampaign?: Maybe<MailingCampaign>;
  createMailingCampaignStatus?: Maybe<MailingCampaignStatus>;
  updateMailingCampaignStatus?: Maybe<MailingCampaignStatus>;
  removeMailingCampaignStatus?: Maybe<MailingCampaignStatus>;
  createMailingMessage?: Maybe<MailingMessage>;
  updateMailingMessage?: Maybe<MailingMessage>;
  removeMailingMessage?: Maybe<MailingMessage>;
  createMailingMessageStatus?: Maybe<MailingMessageStatus>;
  updateMailingMessageStatus?: Maybe<MailingMessageStatus>;
  removeMailingMessageStatus?: Maybe<MailingMessageStatus>;
  createMailingType?: Maybe<MailingType>;
  updateMailingType?: Maybe<MailingType>;
  removeMailingType?: Maybe<MailingType>;
  createManagerLogin?: Maybe<ManagerLogin>;
  updateManagerLogin?: Maybe<ManagerLogin>;
  removeManagerLogin?: Maybe<ManagerLogin>;
  createManagerLoginType?: Maybe<ManagerLoginType>;
  updateManagerLoginType?: Maybe<ManagerLoginType>;
  removeManagerLoginType?: Maybe<ManagerLoginType>;
  newManager?: Maybe<Scalars['Void']>;
  deactivateManagers?: Maybe<Scalars['Void']>;
  changePasswordByManagerId?: Maybe<Scalars['Void']>;
  createManager?: Maybe<Manager>;
  updateManager?: Maybe<Manager>;
  removeManager?: Maybe<Manager>;
  createManagersToPermission?: Maybe<ManagersToPermission>;
  updateManagersToPermission?: Maybe<ManagersToPermission>;
  removeManagersToPermission?: Maybe<ManagersToPermission>;
  createManagersToRole?: Maybe<ManagersToRole>;
  updateManagersToRole?: Maybe<ManagersToRole>;
  removeManagersToRole?: Maybe<ManagersToRole>;
  createMatch?: Maybe<Match>;
  updateMatch?: Maybe<Match>;
  removeMatch?: Maybe<Match>;
  createMatchPeriodMarkup?: Maybe<MatchPeriodMarkup>;
  updateMatchPeriodMarkup?: Maybe<MatchPeriodMarkup>;
  removeMatchPeriodMarkup?: Maybe<MatchPeriodMarkup>;
  createMatchRequest?: Maybe<MatchRequest>;
  updateMatchRequest?: Maybe<MatchRequest>;
  removeMatchRequest?: Maybe<MatchRequest>;
  createMatchStatus?: Maybe<MatchStatus>;
  updateMatchStatus?: Maybe<MatchStatus>;
  removeMatchStatus?: Maybe<MatchStatus>;
  createMatchVideo?: Maybe<MatchVideo>;
  updateMatchVideo?: Maybe<MatchVideo>;
  removeMatchVideo?: Maybe<MatchVideo>;
  createMessageTemplateLangVariant?: Maybe<MessageTemplateLangVariant>;
  updateMessageTemplateLangVariant?: Maybe<MessageTemplateLangVariant>;
  removeMessageTemplateLangVariant?: Maybe<MessageTemplateLangVariant>;
  createMessageTemplate?: Maybe<MessageTemplate>;
  updateMessageTemplate?: Maybe<MessageTemplate>;
  removeMessageTemplate?: Maybe<MessageTemplate>;
  createMessageType?: Maybe<MessageType>;
  updateMessageType?: Maybe<MessageType>;
  removeMessageType?: Maybe<MessageType>;
  createOrganizator?: Maybe<Organizator>;
  updateOrganizator?: Maybe<Organizator>;
  removeOrganizator?: Maybe<Organizator>;
  createParent?: Maybe<Parent>;
  updateParent?: Maybe<Parent>;
  removeParent?: Maybe<Parent>;
  createPeriodType?: Maybe<PeriodType>;
  updatePeriodType?: Maybe<PeriodType>;
  removePeriodType?: Maybe<PeriodType>;
  createPermission?: Maybe<Permission>;
  updatePermission?: Maybe<Permission>;
  removePermission?: Maybe<Permission>;
  createPlayerAggregatedRole?: Maybe<PlayerAggregatedRole>;
  updatePlayerAggregatedRole?: Maybe<PlayerAggregatedRole>;
  removePlayerAggregatedRole?: Maybe<PlayerAggregatedRole>;
  createPlayerCompetitionRating?: Maybe<PlayerCompetitionRating>;
  updatePlayerCompetitionRating?: Maybe<PlayerCompetitionRating>;
  removePlayerCompetitionRating?: Maybe<PlayerCompetitionRating>;
  createPlayerForCompetitionTeam?: Maybe<PlayerForCompetitionTeam>;
  updatePlayerForCompetitionTeam?: Maybe<PlayerForCompetitionTeam>;
  removePlayerForCompetitionTeam?: Maybe<PlayerForCompetitionTeam>;
  createPlayerForMatchRequest?: Maybe<PlayerForMatchRequest>;
  updatePlayerForMatchRequest?: Maybe<PlayerForMatchRequest>;
  removePlayerForMatchRequest?: Maybe<PlayerForMatchRequest>;
  createPlayerForTeamMatchList?: Maybe<PlayerForTeamMatchList>;
  updatePlayerForTeamMatchList?: Maybe<PlayerForTeamMatchList>;
  removePlayerForTeamMatchList?: Maybe<PlayerForTeamMatchList>;
  createPlayerMatchRating?: Maybe<PlayerMatchRating>;
  updatePlayerMatchRating?: Maybe<PlayerMatchRating>;
  removePlayerMatchRating?: Maybe<PlayerMatchRating>;
  createPlayerRank?: Maybe<PlayerRank>;
  updatePlayerRank?: Maybe<PlayerRank>;
  removePlayerRank?: Maybe<PlayerRank>;
  createPlayerRole?: Maybe<PlayerRole>;
  updatePlayerRole?: Maybe<PlayerRole>;
  removePlayerRole?: Maybe<PlayerRole>;
  createPlayer?: Maybe<Player>;
  updatePlayer?: Maybe<Player>;
  removePlayer?: Maybe<Player>;
  changePassword?: Maybe<Scalars['Void']>;
  createReportForClub?: Maybe<ReportForClub>;
  updateReportForClub?: Maybe<ReportForClub>;
  removeReportForClub?: Maybe<ReportForClub>;
  createReportForOrganization?: Maybe<ReportForOrganization>;
  updateReportForOrganization?: Maybe<ReportForOrganization>;
  removeReportForOrganization?: Maybe<ReportForOrganization>;
  createReportForParent?: Maybe<ReportForParent>;
  updateReportForParent?: Maybe<ReportForParent>;
  removeReportForParent?: Maybe<ReportForParent>;
  createReportForTeam?: Maybe<ReportForTeam>;
  updateReportForTeam?: Maybe<ReportForTeam>;
  removeReportForTeam?: Maybe<ReportForTeam>;
  createRole?: Maybe<Role>;
  updateRole?: Maybe<Role>;
  removeRole?: Maybe<Role>;
  createRolesToPermission?: Maybe<RolesToPermission>;
  updateRolesToPermission?: Maybe<RolesToPermission>;
  removeRolesToPermission?: Maybe<RolesToPermission>;
  saveFiles: Array<FileRes>;
  saveFile: FileRes;
  sendEmailDebug?: Maybe<Scalars['Void']>;
  recalculateStat?: Maybe<Scalars['Void']>;
  createStat?: Maybe<Stat>;
  updateStat?: Maybe<Stat>;
  removeStat?: Maybe<Stat>;
  createTag?: Maybe<Tag>;
  updateTag?: Maybe<Tag>;
  removeTag?: Maybe<Tag>;
  createTeamForCompetition?: Maybe<TeamForCompetition>;
  updateTeamForCompetition?: Maybe<TeamForCompetition>;
  removeTeamForCompetition?: Maybe<TeamForCompetition>;
  createTeamForPlayer?: Maybe<TeamForPlayer>;
  updateTeamForPlayer?: Maybe<TeamForPlayer>;
  removeTeamForPlayer?: Maybe<TeamForPlayer>;
  createTeamMatchList?: Maybe<TeamMatchList>;
  updateTeamMatchList?: Maybe<TeamMatchList>;
  removeTeamMatchList?: Maybe<TeamMatchList>;
  createTeamMatchReport?: Maybe<TeamMatchReport>;
  updateTeamMatchReport?: Maybe<TeamMatchReport>;
  removeTeamMatchReport?: Maybe<TeamMatchReport>;
  createTeam?: Maybe<Team>;
  updateTeam?: Maybe<Team>;
  removeTeam?: Maybe<Team>;
  createTemplateStyle?: Maybe<TemplateStyle>;
  updateTemplateStyle?: Maybe<TemplateStyle>;
  removeTemplateStyle?: Maybe<TemplateStyle>;
  createTenant?: Maybe<Tenant>;
  updateTenant?: Maybe<Tenant>;
  removeTenant?: Maybe<Tenant>;
  createUnit?: Maybe<Unit>;
  updateUnit?: Maybe<Unit>;
  removeUnit?: Maybe<Unit>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  removeUser?: Maybe<User>;
  createWscContact?: Maybe<WscContact>;
  updateWscContact?: Maybe<WscContact>;
  removeWscContact?: Maybe<WscContact>;
  createWscMessage?: Maybe<WscMessage>;
  updateWscMessage?: Maybe<WscMessage>;
  removeWscMessage?: Maybe<WscMessage>;
  createWscUser?: Maybe<WscUser>;
  updateWscUser?: Maybe<WscUser>;
  removeWscUser?: Maybe<WscUser>;
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
  lastAggregatesScheduled?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate: Scalars['DateTime'];
  aggregateVersion: Scalars['Int'];
};


export type MutationUpdateAggregateTrackingArgs = {
  id: Scalars['Int'];
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  lastAggregatesComputed: Scalars['DateTime'];
  lastAggregatesScheduled?: InputMaybe<Scalars['DateTime']>;
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
  success?: InputMaybe<Scalars['Boolean']>;
  error?: InputMaybe<Scalars['String']>;
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  actionTypeId: Scalars['String'];
  managerId?: InputMaybe<Scalars['Int']>;
  managerLogin?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
  foreign?: InputMaybe<Scalars['Boolean']>;
  foreignEntityType?: InputMaybe<Scalars['String']>;
  foreignEntityId?: InputMaybe<Scalars['String']>;
  actionData?: InputMaybe<Scalars['JSON']>;
};


export type MutationUpdateAuditLogArgs = {
  id: Scalars['Int'];
  date: Scalars['DateTime'];
  title: Scalars['String'];
  success?: InputMaybe<Scalars['Boolean']>;
  error?: InputMaybe<Scalars['String']>;
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  actionTypeId: Scalars['String'];
  managerId?: InputMaybe<Scalars['Int']>;
  managerLogin?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
  foreign?: InputMaybe<Scalars['Boolean']>;
  foreignEntityType?: InputMaybe<Scalars['String']>;
  foreignEntityId?: InputMaybe<Scalars['String']>;
  actionData?: InputMaybe<Scalars['JSON']>;
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


export type MutationCreateClubArgs = {
  title: Scalars['String'];
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateClubArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveClubArgs = {
  id: Scalars['Int'];
};


export type MutationCreateCompetitionArgs = {
  title: Scalars['String'];
  dateOfBirthFrom?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo?: InputMaybe<Scalars['Int']>;
  organizationId: Scalars['Int'];
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateCompetitionArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
  dateOfBirthFrom?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo?: InputMaybe<Scalars['Int']>;
  organizationId: Scalars['Int'];
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveCompetitionArgs = {
  id: Scalars['Int'];
};


export type MutationCreateConfigurationVariableArgs = {
  id: Scalars['ID'];
  value: Scalars['JSON'];
};


export type MutationUpdateConfigurationVariableArgs = {
  id: Scalars['ID'];
  value: Scalars['JSON'];
};


export type MutationRemoveConfigurationVariableArgs = {
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


export type MutationCreateEntitiesTrackingArgs = {
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  lastEntityComputed: Scalars['DateTime'];
  lastEntityScheduled?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate: Scalars['DateTime'];
};


export type MutationUpdateEntitiesTrackingArgs = {
  id: Scalars['Int'];
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  lastEntityComputed: Scalars['DateTime'];
  lastEntityScheduled?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate: Scalars['DateTime'];
};


export type MutationRemoveEntitiesTrackingArgs = {
  id: Scalars['Int'];
};


export type MutationDownloadEntityRecordsArgs = {
  entityName: EntityType;
  filter?: InputMaybe<Scalars['JSON']>;
};


export type MutationCreateEventArgs = {
  date?: InputMaybe<Scalars['DateTime']>;
  timeSecond?: InputMaybe<Scalars['Int']>;
  linkToTimeSecond?: InputMaybe<Scalars['String']>;
  controversialPoint?: InputMaybe<Scalars['Boolean']>;
  startControversialPoint?: InputMaybe<Scalars['Int']>;
  highlight?: InputMaybe<Scalars['Boolean']>;
  startHighlight?: InputMaybe<Scalars['Int']>;
  order: Scalars['Int'];
  eventTypeId: Scalars['String'];
  videoId?: InputMaybe<Scalars['Int']>;
  teamForCompetitionId?: InputMaybe<Scalars['Int']>;
  mainPlayerId?: InputMaybe<Scalars['Int']>;
  secondPlayerId?: InputMaybe<Scalars['Int']>;
  firstPlayerRoleId?: InputMaybe<Scalars['String']>;
  secondPlayerRoleId?: InputMaybe<Scalars['String']>;
  periodTypeId?: InputMaybe<Scalars['String']>;
  matchId: Scalars['Int'];
  points: Scalars['Int'];
  periodNumber?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateEventArgs = {
  id: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  timeSecond?: InputMaybe<Scalars['Int']>;
  linkToTimeSecond?: InputMaybe<Scalars['String']>;
  controversialPoint?: InputMaybe<Scalars['Boolean']>;
  startControversialPoint?: InputMaybe<Scalars['Int']>;
  highlight?: InputMaybe<Scalars['Boolean']>;
  startHighlight?: InputMaybe<Scalars['Int']>;
  order: Scalars['Int'];
  eventTypeId: Scalars['String'];
  videoId?: InputMaybe<Scalars['Int']>;
  teamForCompetitionId?: InputMaybe<Scalars['Int']>;
  mainPlayerId?: InputMaybe<Scalars['Int']>;
  secondPlayerId?: InputMaybe<Scalars['Int']>;
  firstPlayerRoleId?: InputMaybe<Scalars['String']>;
  secondPlayerRoleId?: InputMaybe<Scalars['String']>;
  periodTypeId?: InputMaybe<Scalars['String']>;
  matchId: Scalars['Int'];
  points: Scalars['Int'];
  periodNumber?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveEventArgs = {
  id: Scalars['Int'];
};


export type MutationRePostEventArgs = {
  id: Scalars['Int'];
};


export type MutationCreateEventTypeCategoryArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationUpdateEventTypeCategoryArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationRemoveEventTypeCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationCreateEventTypeArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  points: Scalars['Int'];
  eventTypeCategoryId?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  showInTranslationMode?: InputMaybe<Scalars['Boolean']>;
  needForSecondPlayer?: InputMaybe<Scalars['Boolean']>;
  dependsOnPoint?: InputMaybe<Scalars['Boolean']>;
  redCard?: InputMaybe<Scalars['Boolean']>;
  yellowCard?: InputMaybe<Scalars['Boolean']>;
  calculateBlock?: InputMaybe<Scalars['Boolean']>;
  calculateTakeaway?: InputMaybe<Scalars['Boolean']>;
  calculateSelection?: InputMaybe<Scalars['Boolean']>;
  calculateInterseption?: InputMaybe<Scalars['Boolean']>;
  calculateGuardian?: InputMaybe<Scalars['Boolean']>;
  calculatePositionError?: InputMaybe<Scalars['Boolean']>;
  calculateGrossError?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveDribling?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeDribling?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveSgm?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeSgm?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveRgm?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeRgm?: InputMaybe<Scalars['Boolean']>;
  calculateLosses?: InputMaybe<Scalars['Boolean']>;
  calculateGegenPressing?: InputMaybe<Scalars['Boolean']>;
  calculatePressing?: InputMaybe<Scalars['Boolean']>;
  calculateSaveBall?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveTransfer?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeTransfer?: InputMaybe<Scalars['Boolean']>;
  calculateHit?: InputMaybe<Scalars['Boolean']>;
  calculateHitTarget?: InputMaybe<Scalars['Boolean']>;
  calculateCorner?: InputMaybe<Scalars['Boolean']>;
  calculateFoul?: InputMaybe<Scalars['Boolean']>;
  calculateOffside?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateEventTypeArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  points: Scalars['Int'];
  eventTypeCategoryId?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  showInTranslationMode?: InputMaybe<Scalars['Boolean']>;
  needForSecondPlayer?: InputMaybe<Scalars['Boolean']>;
  dependsOnPoint?: InputMaybe<Scalars['Boolean']>;
  redCard?: InputMaybe<Scalars['Boolean']>;
  yellowCard?: InputMaybe<Scalars['Boolean']>;
  calculateBlock?: InputMaybe<Scalars['Boolean']>;
  calculateTakeaway?: InputMaybe<Scalars['Boolean']>;
  calculateSelection?: InputMaybe<Scalars['Boolean']>;
  calculateInterseption?: InputMaybe<Scalars['Boolean']>;
  calculateGuardian?: InputMaybe<Scalars['Boolean']>;
  calculatePositionError?: InputMaybe<Scalars['Boolean']>;
  calculateGrossError?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveDribling?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeDribling?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveSgm?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeSgm?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveRgm?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeRgm?: InputMaybe<Scalars['Boolean']>;
  calculateLosses?: InputMaybe<Scalars['Boolean']>;
  calculateGegenPressing?: InputMaybe<Scalars['Boolean']>;
  calculatePressing?: InputMaybe<Scalars['Boolean']>;
  calculateSaveBall?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveTransfer?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeTransfer?: InputMaybe<Scalars['Boolean']>;
  calculateHit?: InputMaybe<Scalars['Boolean']>;
  calculateHitTarget?: InputMaybe<Scalars['Boolean']>;
  calculateCorner?: InputMaybe<Scalars['Boolean']>;
  calculateFoul?: InputMaybe<Scalars['Boolean']>;
  calculateOffside?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRemoveEventTypeArgs = {
  id: Scalars['ID'];
};


export type MutationCreateFileArgs = {
  originalName: Scalars['String'];
  url: Scalars['String'];
  mimetype: Scalars['String'];
  s3Key: Scalars['String'];
  eTag: Scalars['String'];
  bytes?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateFileArgs = {
  id: Scalars['Int'];
  originalName: Scalars['String'];
  url: Scalars['String'];
  mimetype: Scalars['String'];
  s3Key: Scalars['String'];
  eTag: Scalars['String'];
  bytes?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveFileArgs = {
  id: Scalars['Int'];
};


export type MutationCreateGlossaryArgs = {
  title: Scalars['String'];
  description: Scalars['String'];
  periodTypeId: Scalars['String'];
};


export type MutationUpdateGlossaryArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  periodTypeId: Scalars['String'];
};


export type MutationRemoveGlossaryArgs = {
  id: Scalars['Int'];
};


export type MutationCreateHistoryOfPlayerRoleArgs = {
  matchId: Scalars['Int'];
  playerId: Scalars['Int'];
  playerRoleId: Scalars['String'];
  status?: InputMaybe<Scalars['Boolean']>;
  order: Scalars['Int'];
};


export type MutationUpdateHistoryOfPlayerRoleArgs = {
  id: Scalars['Int'];
  matchId: Scalars['Int'];
  playerId: Scalars['Int'];
  playerRoleId: Scalars['String'];
  status?: InputMaybe<Scalars['Boolean']>;
  order: Scalars['Int'];
};


export type MutationRemoveHistoryOfPlayerRoleArgs = {
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


export type MutationCreateMailingCampaignArgs = {
  title: Scalars['String'];
  mailingTypeId: Scalars['String'];
  priority: Scalars['Int'];
  date?: InputMaybe<Scalars['Date']>;
  mailingCampaignStatusId?: InputMaybe<Scalars['String']>;
  messageTemplateId: Scalars['String'];
};


export type MutationUpdateMailingCampaignArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
  mailingTypeId: Scalars['String'];
  priority: Scalars['Int'];
  date?: InputMaybe<Scalars['Date']>;
  mailingCampaignStatusId?: InputMaybe<Scalars['String']>;
  messageTemplateId: Scalars['String'];
};


export type MutationRemoveMailingCampaignArgs = {
  id: Scalars['Int'];
};


export type MutationCreateMailingCampaignStatusArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationUpdateMailingCampaignStatusArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationRemoveMailingCampaignStatusArgs = {
  id: Scalars['ID'];
};


export type MutationCreateMailingMessageArgs = {
  mailingCampaignId: Scalars['Int'];
  templateId: Scalars['String'];
  languageId: Scalars['String'];
  to: Scalars['String'];
  locals: Scalars['String'];
  localsHash: Scalars['String'];
  priority: Scalars['Int'];
  dateCreated: Scalars['DateTime'];
  dateSent?: InputMaybe<Scalars['DateTime']>;
  error?: InputMaybe<Scalars['String']>;
  html?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  uniqueKey?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  mailingMessageStatusId: Scalars['String'];
  messageTemplateLangVariantId: Scalars['Int'];
};


export type MutationUpdateMailingMessageArgs = {
  id: Scalars['Int'];
  mailingCampaignId: Scalars['Int'];
  templateId: Scalars['String'];
  languageId: Scalars['String'];
  to: Scalars['String'];
  locals: Scalars['String'];
  localsHash: Scalars['String'];
  priority: Scalars['Int'];
  dateCreated: Scalars['DateTime'];
  dateSent?: InputMaybe<Scalars['DateTime']>;
  error?: InputMaybe<Scalars['String']>;
  html?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  uniqueKey?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  mailingMessageStatusId: Scalars['String'];
  messageTemplateLangVariantId: Scalars['Int'];
};


export type MutationRemoveMailingMessageArgs = {
  id: Scalars['Int'];
};


export type MutationCreateMailingMessageStatusArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  final: Scalars['Boolean'];
};


export type MutationUpdateMailingMessageStatusArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  final: Scalars['Boolean'];
};


export type MutationRemoveMailingMessageStatusArgs = {
  id: Scalars['ID'];
};


export type MutationCreateMailingTypeArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationUpdateMailingTypeArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationRemoveMailingTypeArgs = {
  id: Scalars['ID'];
};


export type MutationCreateManagerLoginArgs = {
  managerLoginTypeId: Scalars['String'];
  login: Scalars['String'];
  passwordHash?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  locked: Scalars['Boolean'];
  managerId: Scalars['Int'];
};


export type MutationUpdateManagerLoginArgs = {
  id: Scalars['Int'];
  managerLoginTypeId: Scalars['String'];
  login: Scalars['String'];
  passwordHash?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  locked: Scalars['Boolean'];
  managerId: Scalars['Int'];
};


export type MutationRemoveManagerLoginArgs = {
  id: Scalars['Int'];
};


export type MutationCreateManagerLoginTypeArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateManagerLoginTypeArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveManagerLoginTypeArgs = {
  id: Scalars['ID'];
};


export type MutationNewManagerArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  roles?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationDeactivateManagersArgs = {
  managerIds: Array<Scalars['Int']>;
};


export type MutationChangePasswordByManagerIdArgs = {
  managerId: Scalars['Int'];
  password: Scalars['String'];
};


export type MutationCreateManagerArgs = {
  title?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  languageId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  photoId?: InputMaybe<Scalars['Int']>;
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
  photoId?: InputMaybe<Scalars['Int']>;
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
  expiresAt?: InputMaybe<Scalars['Date']>;
};


export type MutationUpdateManagersToPermissionArgs = {
  id: Scalars['Int'];
  managerId: Scalars['Int'];
  permissionId: Scalars['String'];
  expiresAt?: InputMaybe<Scalars['Date']>;
};


export type MutationRemoveManagersToPermissionArgs = {
  id: Scalars['Int'];
};


export type MutationCreateManagersToRoleArgs = {
  managerId: Scalars['Int'];
  roleId: Scalars['String'];
  expiresAt?: InputMaybe<Scalars['Date']>;
};


export type MutationUpdateManagersToRoleArgs = {
  id: Scalars['Int'];
  managerId: Scalars['Int'];
  roleId: Scalars['String'];
  expiresAt?: InputMaybe<Scalars['Date']>;
};


export type MutationRemoveManagersToRoleArgs = {
  id: Scalars['Int'];
};


export type MutationCreateMatchArgs = {
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  competitionId: Scalars['Int'];
  firstTeamId?: InputMaybe<Scalars['Int']>;
  firstTeamColor?: InputMaybe<Scalars['String']>;
  firstTeamOnFieldId?: InputMaybe<Scalars['Int']>;
  secondTeamId?: InputMaybe<Scalars['Int']>;
  secondTeamColor?: InputMaybe<Scalars['String']>;
  matchDate: Scalars['Date'];
  matchTime: Scalars['String'];
  duration: Scalars['Int'];
  place?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  firstTeamPoints?: InputMaybe<Scalars['Int']>;
  secondTeamPoints?: InputMaybe<Scalars['Int']>;
  redCardFirstTeam?: InputMaybe<Scalars['Int']>;
  redCardSecondTeam?: InputMaybe<Scalars['Int']>;
  yellowCardFirstTeam?: InputMaybe<Scalars['Int']>;
  yellowCardSecondTeam?: InputMaybe<Scalars['Int']>;
  firstTeamHandleTime?: InputMaybe<Scalars['Int']>;
  secondTeamHandleTime?: InputMaybe<Scalars['Int']>;
  linkToProtocol?: InputMaybe<Scalars['String']>;
  matchStatusId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateMatchArgs = {
  id: Scalars['Int'];
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  competitionId: Scalars['Int'];
  firstTeamId?: InputMaybe<Scalars['Int']>;
  firstTeamColor?: InputMaybe<Scalars['String']>;
  firstTeamOnFieldId?: InputMaybe<Scalars['Int']>;
  secondTeamId?: InputMaybe<Scalars['Int']>;
  secondTeamColor?: InputMaybe<Scalars['String']>;
  matchDate: Scalars['Date'];
  matchTime: Scalars['String'];
  duration: Scalars['Int'];
  place?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  firstTeamPoints?: InputMaybe<Scalars['Int']>;
  secondTeamPoints?: InputMaybe<Scalars['Int']>;
  redCardFirstTeam?: InputMaybe<Scalars['Int']>;
  redCardSecondTeam?: InputMaybe<Scalars['Int']>;
  yellowCardFirstTeam?: InputMaybe<Scalars['Int']>;
  yellowCardSecondTeam?: InputMaybe<Scalars['Int']>;
  firstTeamHandleTime?: InputMaybe<Scalars['Int']>;
  secondTeamHandleTime?: InputMaybe<Scalars['Int']>;
  linkToProtocol?: InputMaybe<Scalars['String']>;
  matchStatusId?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveMatchArgs = {
  id: Scalars['Int'];
};


export type MutationCreateMatchPeriodMarkupArgs = {
  timestamp?: InputMaybe<Scalars['Int']>;
  periodTypeId: Scalars['String'];
  matchVideoId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateMatchPeriodMarkupArgs = {
  id: Scalars['Int'];
  timestamp?: InputMaybe<Scalars['Int']>;
  periodTypeId: Scalars['String'];
  matchVideoId?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveMatchPeriodMarkupArgs = {
  id: Scalars['Int'];
};


export type MutationCreateMatchRequestArgs = {
  matchId: Scalars['Int'];
  teamForCompetitionId: Scalars['Int'];
};


export type MutationUpdateMatchRequestArgs = {
  id: Scalars['Int'];
  matchId: Scalars['Int'];
  teamForCompetitionId: Scalars['Int'];
};


export type MutationRemoveMatchRequestArgs = {
  id: Scalars['Int'];
};


export type MutationCreateMatchStatusArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationUpdateMatchStatusArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationRemoveMatchStatusArgs = {
  id: Scalars['ID'];
};


export type MutationCreateMatchVideoArgs = {
  videoTitle: Scalars['String'];
  videoLink: Scalars['String'];
  matchId?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateMatchVideoArgs = {
  id: Scalars['Int'];
  videoTitle: Scalars['String'];
  videoLink: Scalars['String'];
  matchId?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveMatchVideoArgs = {
  id: Scalars['Int'];
};


export type MutationCreateMessageTemplateLangVariantArgs = {
  title?: InputMaybe<Scalars['String']>;
  subjectTemplate: Scalars['String'];
  bodyTemplate: Scalars['String'];
  messageTemplateId: Scalars['String'];
  languageId: Scalars['String'];
  additionalStyle?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateMessageTemplateLangVariantArgs = {
  id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  subjectTemplate: Scalars['String'];
  bodyTemplate: Scalars['String'];
  messageTemplateId: Scalars['String'];
  languageId: Scalars['String'];
  additionalStyle?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveMessageTemplateLangVariantArgs = {
  id: Scalars['Int'];
};


export type MutationCreateMessageTemplateArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  secretData: Scalars['Boolean'];
  messageTypeId: Scalars['String'];
  dataExample?: InputMaybe<Scalars['String']>;
  templateStyleId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateMessageTemplateArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  secretData: Scalars['Boolean'];
  messageTypeId: Scalars['String'];
  dataExample?: InputMaybe<Scalars['String']>;
  templateStyleId?: InputMaybe<Scalars['Int']>;
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


export type MutationCreateOrganizatorArgs = {
  title: Scalars['String'];
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateOrganizatorArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveOrganizatorArgs = {
  id: Scalars['Int'];
};


export type MutationCreateParentArgs = {
  title?: InputMaybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  patronymic?: InputMaybe<Scalars['String']>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateParentArgs = {
  id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  patronymic?: InputMaybe<Scalars['String']>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveParentArgs = {
  id: Scalars['Int'];
};


export type MutationCreatePeriodTypeArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  order: Scalars['Int'];
};


export type MutationUpdatePeriodTypeArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  order: Scalars['Int'];
};


export type MutationRemovePeriodTypeArgs = {
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


export type MutationCreatePlayerAggregatedRoleArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationUpdatePlayerAggregatedRoleArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationRemovePlayerAggregatedRoleArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePlayerCompetitionRatingArgs = {
  competitionId: Scalars['Int'];
  playerId: Scalars['Int'];
  rating: Scalars['Int'];
};


export type MutationUpdatePlayerCompetitionRatingArgs = {
  id: Scalars['Int'];
  competitionId: Scalars['Int'];
  playerId: Scalars['Int'];
  rating: Scalars['Int'];
};


export type MutationRemovePlayerCompetitionRatingArgs = {
  id: Scalars['Int'];
};


export type MutationCreatePlayerForCompetitionTeamArgs = {
  teamForCompetitionId: Scalars['Int'];
  playerId: Scalars['Int'];
};


export type MutationUpdatePlayerForCompetitionTeamArgs = {
  id: Scalars['Int'];
  teamForCompetitionId: Scalars['Int'];
  playerId: Scalars['Int'];
};


export type MutationRemovePlayerForCompetitionTeamArgs = {
  id: Scalars['Int'];
};


export type MutationCreatePlayerForMatchRequestArgs = {
  matchRequestId: Scalars['Int'];
  playerId: Scalars['Int'];
};


export type MutationUpdatePlayerForMatchRequestArgs = {
  id: Scalars['Int'];
  matchRequestId: Scalars['Int'];
  playerId: Scalars['Int'];
};


export type MutationRemovePlayerForMatchRequestArgs = {
  id: Scalars['Int'];
};


export type MutationCreatePlayerForTeamMatchListArgs = {
  teamMatchListId: Scalars['Int'];
  playerId: Scalars['Int'];
  startingPosition?: InputMaybe<Scalars['Boolean']>;
  onField?: InputMaybe<Scalars['Boolean']>;
  playerRoleId: Scalars['String'];
  playerOnMatchNumber?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdatePlayerForTeamMatchListArgs = {
  id: Scalars['Int'];
  teamMatchListId: Scalars['Int'];
  playerId: Scalars['Int'];
  startingPosition?: InputMaybe<Scalars['Boolean']>;
  onField?: InputMaybe<Scalars['Boolean']>;
  playerRoleId: Scalars['String'];
  playerOnMatchNumber?: InputMaybe<Scalars['Int']>;
};


export type MutationRemovePlayerForTeamMatchListArgs = {
  id: Scalars['Int'];
};


export type MutationCreatePlayerMatchRatingArgs = {
  matchId: Scalars['Int'];
  playerId: Scalars['Int'];
  rating: Scalars['Int'];
  progressivePassAccuracy?: InputMaybe<Scalars['Float']>;
  playerRatingAverage?: InputMaybe<Scalars['Float']>;
};


export type MutationUpdatePlayerMatchRatingArgs = {
  id: Scalars['Int'];
  matchId: Scalars['Int'];
  playerId: Scalars['Int'];
  rating: Scalars['Int'];
  progressivePassAccuracy?: InputMaybe<Scalars['Float']>;
  playerRatingAverage?: InputMaybe<Scalars['Float']>;
};


export type MutationRemovePlayerMatchRatingArgs = {
  id: Scalars['Int'];
};


export type MutationCreatePlayerRankArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  rating: Scalars['Int'];
  fileId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdatePlayerRankArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  rating: Scalars['Int'];
  fileId?: InputMaybe<Scalars['Int']>;
};


export type MutationRemovePlayerRankArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePlayerRoleArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  shortTitle: Scalars['String'];
  playerAggregatedRoleId: Scalars['String'];
};


export type MutationUpdatePlayerRoleArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  shortTitle: Scalars['String'];
  playerAggregatedRoleId: Scalars['String'];
};


export type MutationRemovePlayerRoleArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePlayerArgs = {
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  patronymic?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  playerName?: InputMaybe<Scalars['String']>;
  number: Scalars['Int'];
  dateOfBirth: Scalars['Date'];
  age?: InputMaybe<Scalars['Int']>;
  teamId?: InputMaybe<Scalars['Int']>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  linkToProfile?: InputMaybe<Scalars['String']>;
  playerRating?: InputMaybe<Scalars['Int']>;
  photoId?: InputMaybe<Scalars['Int']>;
  playerRatingAverage?: InputMaybe<Scalars['Float']>;
  commonPlayerRatingGoalkeeper?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingAttack?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingMidfielder?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingDefender?: InputMaybe<Scalars['Int']>;
  playedMatches?: InputMaybe<Scalars['Int']>;
  averagePlayerRatingGoalkeeper?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingAttack?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingMidfielder?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingDefender?: InputMaybe<Scalars['Float']>;
  playerAggregatedRoleId?: InputMaybe<Scalars['String']>;
  playerTag?: InputMaybe<Scalars['String']>;
  progressivePassAccuracy?: InputMaybe<Scalars['Float']>;
  playerRankId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePlayerArgs = {
  id: Scalars['Int'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  patronymic?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  playerName?: InputMaybe<Scalars['String']>;
  number: Scalars['Int'];
  dateOfBirth: Scalars['Date'];
  age?: InputMaybe<Scalars['Int']>;
  teamId?: InputMaybe<Scalars['Int']>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  linkToProfile?: InputMaybe<Scalars['String']>;
  playerRating?: InputMaybe<Scalars['Int']>;
  photoId?: InputMaybe<Scalars['Int']>;
  playerRatingAverage?: InputMaybe<Scalars['Float']>;
  commonPlayerRatingGoalkeeper?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingAttack?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingMidfielder?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingDefender?: InputMaybe<Scalars['Int']>;
  playedMatches?: InputMaybe<Scalars['Int']>;
  averagePlayerRatingGoalkeeper?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingAttack?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingMidfielder?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingDefender?: InputMaybe<Scalars['Float']>;
  playerAggregatedRoleId?: InputMaybe<Scalars['String']>;
  playerTag?: InputMaybe<Scalars['String']>;
  progressivePassAccuracy?: InputMaybe<Scalars['Float']>;
  playerRankId?: InputMaybe<Scalars['String']>;
};


export type MutationRemovePlayerArgs = {
  id: Scalars['Int'];
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
};


export type MutationCreateReportForClubArgs = {
  title: Scalars['String'];
  teamId: Scalars['Int'];
  competitionId: Scalars['Int'];
  clubId: Scalars['Int'];
  lastUpdated?: InputMaybe<Scalars['Date']>;
  paid?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateReportForClubArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
  teamId: Scalars['Int'];
  competitionId: Scalars['Int'];
  clubId: Scalars['Int'];
  lastUpdated?: InputMaybe<Scalars['Date']>;
  paid?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRemoveReportForClubArgs = {
  id: Scalars['Int'];
};


export type MutationCreateReportForOrganizationArgs = {
  title: Scalars['String'];
  competitionId: Scalars['Int'];
  organizatorId: Scalars['Int'];
  lastUpdated?: InputMaybe<Scalars['Date']>;
  paid?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateReportForOrganizationArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
  competitionId: Scalars['Int'];
  organizatorId: Scalars['Int'];
  lastUpdated?: InputMaybe<Scalars['Date']>;
  paid?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRemoveReportForOrganizationArgs = {
  id: Scalars['Int'];
};


export type MutationCreateReportForParentArgs = {
  title: Scalars['String'];
  playerId: Scalars['Int'];
  matchId: Scalars['Int'];
  parentId: Scalars['Int'];
  lastUpdated?: InputMaybe<Scalars['Date']>;
  paid?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateReportForParentArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
  playerId: Scalars['Int'];
  matchId: Scalars['Int'];
  parentId: Scalars['Int'];
  lastUpdated?: InputMaybe<Scalars['Date']>;
  paid?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRemoveReportForParentArgs = {
  id: Scalars['Int'];
};


export type MutationCreateReportForTeamArgs = {
  created: Scalars['DateTime'];
  title: Scalars['String'];
  teamForCompetitionId: Scalars['Int'];
  matchId: Scalars['Int'];
  clubId: Scalars['Int'];
  lastUpdated?: InputMaybe<Scalars['Date']>;
  paid?: InputMaybe<Scalars['Boolean']>;
  fileId?: InputMaybe<Scalars['Int']>;
  htmlFileId?: InputMaybe<Scalars['Int']>;
  jsonFileId?: InputMaybe<Scalars['Int']>;
  needRecalculate?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateReportForTeamArgs = {
  id: Scalars['Int'];
  created: Scalars['DateTime'];
  title: Scalars['String'];
  teamForCompetitionId: Scalars['Int'];
  matchId: Scalars['Int'];
  clubId: Scalars['Int'];
  lastUpdated?: InputMaybe<Scalars['Date']>;
  paid?: InputMaybe<Scalars['Boolean']>;
  fileId?: InputMaybe<Scalars['Int']>;
  htmlFileId?: InputMaybe<Scalars['Int']>;
  jsonFileId?: InputMaybe<Scalars['Int']>;
  needRecalculate?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRemoveReportForTeamArgs = {
  id: Scalars['Int'];
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


export type MutationSaveFilesArgs = {
  files: Array<Scalars['Upload']>;
};


export type MutationSaveFileArgs = {
  file: Scalars['Upload'];
};


export type MutationSendEmailDebugArgs = {
  messageTemplate: Scalars['String'];
  managerId?: InputMaybe<Scalars['Int']>;
  locals: Scalars['JSON'];
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


export type MutationCreateTeamForCompetitionArgs = {
  title: Scalars['String'];
  fullTitle?: InputMaybe<Scalars['String']>;
  teamId: Scalars['Int'];
  competitionId: Scalars['Int'];
};


export type MutationUpdateTeamForCompetitionArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
  fullTitle?: InputMaybe<Scalars['String']>;
  teamId: Scalars['Int'];
  competitionId: Scalars['Int'];
};


export type MutationRemoveTeamForCompetitionArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTeamForPlayerArgs = {
  playerId: Scalars['Int'];
  teamId: Scalars['Int'];
};


export type MutationUpdateTeamForPlayerArgs = {
  id: Scalars['Int'];
  playerId: Scalars['Int'];
  teamId: Scalars['Int'];
};


export type MutationRemoveTeamForPlayerArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTeamMatchListArgs = {
  matchId: Scalars['Int'];
  teamForCompetitionId: Scalars['Int'];
};


export type MutationUpdateTeamMatchListArgs = {
  id: Scalars['Int'];
  matchId: Scalars['Int'];
  teamForCompetitionId: Scalars['Int'];
};


export type MutationRemoveTeamMatchListArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTeamMatchReportArgs = {
  created: Scalars['DateTime'];
  matchId: Scalars['Int'];
  lastUpdated?: InputMaybe<Scalars['Date']>;
  fileId?: InputMaybe<Scalars['Int']>;
  needRecalculate?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateTeamMatchReportArgs = {
  id: Scalars['Int'];
  created: Scalars['DateTime'];
  matchId: Scalars['Int'];
  lastUpdated?: InputMaybe<Scalars['Date']>;
  fileId?: InputMaybe<Scalars['Int']>;
  needRecalculate?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRemoveTeamMatchReportArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTeamArgs = {
  title: Scalars['String'];
  dateOfBirthFrom: Scalars['Int'];
  dateOfBirthTo?: InputMaybe<Scalars['Int']>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  clubId: Scalars['Int'];
  fileId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateTeamArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
  dateOfBirthFrom: Scalars['Int'];
  dateOfBirthTo?: InputMaybe<Scalars['Int']>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  clubId: Scalars['Int'];
  fileId?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveTeamArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTemplateStyleArgs = {
  title: Scalars['String'];
  style: Scalars['String'];
};


export type MutationUpdateTemplateStyleArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
  style: Scalars['String'];
};


export type MutationRemoveTemplateStyleArgs = {
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
  title: Scalars['String'];
  parentId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateUnitArgs = {
  id: Scalars['Int'];
  title: Scalars['String'];
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


export type MutationCreateWscContactArgs = {
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  wscUserId: Scalars['Int'];
};


export type MutationUpdateWscContactArgs = {
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  wscUserId: Scalars['Int'];
};


export type MutationRemoveWscContactArgs = {
  id: Scalars['Int'];
};


export type MutationCreateWscMessageArgs = {
  externalId: Scalars['String'];
  dateTimeRaw: Scalars['String'];
  sender: Scalars['String'];
  content: Scalars['String'];
  wscUserId: Scalars['Int'];
  wscContactId: Scalars['Int'];
};


export type MutationUpdateWscMessageArgs = {
  id: Scalars['Int'];
  externalId: Scalars['String'];
  dateTimeRaw: Scalars['String'];
  sender: Scalars['String'];
  content: Scalars['String'];
  wscUserId: Scalars['Int'];
  wscContactId: Scalars['Int'];
};


export type MutationRemoveWscMessageArgs = {
  id: Scalars['Int'];
};


export type MutationCreateWscUserArgs = {
  login: Scalars['String'];
  passwordHash: Scalars['String'];
  accessToken?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateWscUserArgs = {
  id: Scalars['Int'];
  login: Scalars['String'];
  passwordHash: Scalars['String'];
  accessToken?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveWscUserArgs = {
  id: Scalars['Int'];
};

export type AggregateTracking = {
  __typename?: 'AggregateTracking';
  id: Scalars['Int'];
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  lastAggregatesComputed: Scalars['DateTime'];
  lastAggregatesScheduled?: Maybe<Scalars['DateTime']>;
  lastEntityUpdate: Scalars['DateTime'];
  aggregateVersion: Scalars['Int'];
};

export type AggregateTrackingFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  entityTypeId?: InputMaybe<Scalars['String']>;
  entityTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entityTypeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entityId?: InputMaybe<Scalars['String']>;
  entityId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entityId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastAggregatesComputed?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesComputed_lte?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesComputed_gte?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesComputed_lt?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesComputed_gt?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesScheduled?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesScheduled_lte?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesScheduled_gte?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesScheduled_lt?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesScheduled_gt?: InputMaybe<Scalars['DateTime']>;
  lastAggregatesScheduled_defined?: InputMaybe<Scalars['Boolean']>;
  lastEntityUpdate?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate_lte?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate_gte?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate_lt?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate_gt?: InputMaybe<Scalars['DateTime']>;
  aggregateVersion?: InputMaybe<Scalars['Int']>;
  aggregateVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  aggregateVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
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
  login_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userId?: InputMaybe<Scalars['Int']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
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
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  token?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_defined?: InputMaybe<Scalars['Boolean']>;
};

export type AuditLog = {
  __typename?: 'AuditLog';
  id: Scalars['Int'];
  date: Scalars['DateTime'];
  title: Scalars['String'];
  success?: Maybe<Scalars['Boolean']>;
  error?: Maybe<Scalars['String']>;
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  actionTypeId: Scalars['String'];
  managerId?: Maybe<Scalars['Int']>;
  managerLogin?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  foreign?: Maybe<Scalars['Boolean']>;
  foreignEntityType?: Maybe<Scalars['String']>;
  foreignEntityId?: Maybe<Scalars['String']>;
  actionData?: Maybe<Scalars['JSON']>;
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
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  success?: InputMaybe<Scalars['Boolean']>;
  success_defined?: InputMaybe<Scalars['Boolean']>;
  error?: InputMaybe<Scalars['String']>;
  error_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  error_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  error_defined?: InputMaybe<Scalars['Boolean']>;
  entityTypeId?: InputMaybe<Scalars['String']>;
  entityTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entityTypeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entityId?: InputMaybe<Scalars['String']>;
  entityId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entityId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  actionTypeId?: InputMaybe<Scalars['String']>;
  actionTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  actionTypeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  managerId?: InputMaybe<Scalars['Int']>;
  managerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  managerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  managerId_defined?: InputMaybe<Scalars['Boolean']>;
  managerLogin?: InputMaybe<Scalars['String']>;
  managerLogin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  managerLogin_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  managerLogin_defined?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['Int']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  userId_defined?: InputMaybe<Scalars['Boolean']>;
  foreign?: InputMaybe<Scalars['Boolean']>;
  foreign_defined?: InputMaybe<Scalars['Boolean']>;
  foreignEntityType?: InputMaybe<Scalars['String']>;
  foreignEntityType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  foreignEntityType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  foreignEntityType_defined?: InputMaybe<Scalars['Boolean']>;
  foreignEntityId?: InputMaybe<Scalars['String']>;
  foreignEntityId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  foreignEntityId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  foreignEntityId_defined?: InputMaybe<Scalars['Boolean']>;
  actionData?: InputMaybe<Scalars['JSON']>;
  actionData_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  actionData_not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  actionData_defined?: InputMaybe<Scalars['Boolean']>;
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
  originalEntityType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  originalEntityId?: InputMaybe<Scalars['String']>;
  originalEntityId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  originalEntityId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  autogenerationRuleId?: InputMaybe<Scalars['String']>;
  autogenerationRuleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  autogenerationRuleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Date']>;
  version_lte?: InputMaybe<Scalars['Date']>;
  version_gte?: InputMaybe<Scalars['Date']>;
  version_lt?: InputMaybe<Scalars['Date']>;
  version_gt?: InputMaybe<Scalars['Date']>;
  errorOccurred?: InputMaybe<Scalars['Boolean']>;
  error?: InputMaybe<Scalars['String']>;
  error_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  error_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  error_defined?: InputMaybe<Scalars['Boolean']>;
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
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version?: InputMaybe<Scalars['Date']>;
  version_lte?: InputMaybe<Scalars['Date']>;
  version_gte?: InputMaybe<Scalars['Date']>;
  version_lt?: InputMaybe<Scalars['Date']>;
  version_gt?: InputMaybe<Scalars['Date']>;
  version_defined?: InputMaybe<Scalars['Boolean']>;
  originalEntityType?: InputMaybe<Scalars['String']>;
  originalEntityType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  originalEntityType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  generatingEntityType?: InputMaybe<Scalars['String']>;
  generatingEntityType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  generatingEntityType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  originalEntityFilter?: InputMaybe<Scalars['String']>;
  originalEntityFilter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  originalEntityFilter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  generatingEntityConstructionRules?: InputMaybe<Scalars['String']>;
  generatingEntityConstructionRules_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  generatingEntityConstructionRules_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ignoreVersionOnHistory?: InputMaybe<Scalars['Boolean']>;
};

export type Club = {
  __typename?: 'Club';
  id: Scalars['Int'];
  title: Scalars['String'];
  createdByManagerId: Scalars['Int'];
  lastChangedByManagerId?: Maybe<Scalars['Int']>;
};

export type ClubFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  createdByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  createdByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_defined?: InputMaybe<Scalars['Boolean']>;
};

export type Competition = {
  __typename?: 'Competition';
  id: Scalars['Int'];
  title: Scalars['String'];
  dateOfBirthFrom?: Maybe<Scalars['Int']>;
  dateOfBirthTo?: Maybe<Scalars['Int']>;
  organizationId: Scalars['Int'];
  createdByManagerId: Scalars['Int'];
  lastChangedByManagerId?: Maybe<Scalars['Int']>;
};

export type CompetitionFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateOfBirthFrom?: InputMaybe<Scalars['Int']>;
  dateOfBirthFrom_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  dateOfBirthFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  dateOfBirthFrom_lte?: InputMaybe<Scalars['Int']>;
  dateOfBirthFrom_gte?: InputMaybe<Scalars['Int']>;
  dateOfBirthFrom_lt?: InputMaybe<Scalars['Int']>;
  dateOfBirthFrom_gt?: InputMaybe<Scalars['Int']>;
  dateOfBirthFrom_defined?: InputMaybe<Scalars['Boolean']>;
  dateOfBirthTo?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  dateOfBirthTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  dateOfBirthTo_lte?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo_gte?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo_lt?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo_gt?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo_defined?: InputMaybe<Scalars['Boolean']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  organizationId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  organizationId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  createdByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  createdByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_defined?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigurationVariable = {
  __typename?: 'ConfigurationVariable';
  id: Scalars['ID'];
  value: Scalars['JSON'];
};

export type ConfigurationVariableFilter = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  value?: InputMaybe<Scalars['JSON']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
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
  fromId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toId?: InputMaybe<Scalars['Int']>;
  toId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  expiresAt?: InputMaybe<Scalars['Date']>;
  expiresAt_lte?: InputMaybe<Scalars['Date']>;
  expiresAt_gte?: InputMaybe<Scalars['Date']>;
  expiresAt_lt?: InputMaybe<Scalars['Date']>;
  expiresAt_gt?: InputMaybe<Scalars['Date']>;
  expiresAt_defined?: InputMaybe<Scalars['Boolean']>;
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
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_defined?: InputMaybe<Scalars['Boolean']>;
};

export type EntitiesTracking = {
  __typename?: 'EntitiesTracking';
  id: Scalars['Int'];
  entityTypeId: Scalars['String'];
  entityId: Scalars['String'];
  lastEntityComputed: Scalars['DateTime'];
  lastEntityScheduled?: Maybe<Scalars['DateTime']>;
  lastEntityUpdate: Scalars['DateTime'];
};

export type EntitiesTrackingFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  entityTypeId?: InputMaybe<Scalars['String']>;
  entityTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entityTypeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entityId?: InputMaybe<Scalars['String']>;
  entityId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entityId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastEntityComputed?: InputMaybe<Scalars['DateTime']>;
  lastEntityComputed_lte?: InputMaybe<Scalars['DateTime']>;
  lastEntityComputed_gte?: InputMaybe<Scalars['DateTime']>;
  lastEntityComputed_lt?: InputMaybe<Scalars['DateTime']>;
  lastEntityComputed_gt?: InputMaybe<Scalars['DateTime']>;
  lastEntityScheduled?: InputMaybe<Scalars['DateTime']>;
  lastEntityScheduled_lte?: InputMaybe<Scalars['DateTime']>;
  lastEntityScheduled_gte?: InputMaybe<Scalars['DateTime']>;
  lastEntityScheduled_lt?: InputMaybe<Scalars['DateTime']>;
  lastEntityScheduled_gt?: InputMaybe<Scalars['DateTime']>;
  lastEntityScheduled_defined?: InputMaybe<Scalars['Boolean']>;
  lastEntityUpdate?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate_lte?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate_gte?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate_lt?: InputMaybe<Scalars['DateTime']>;
  lastEntityUpdate_gt?: InputMaybe<Scalars['DateTime']>;
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['Int'];
  date?: Maybe<Scalars['DateTime']>;
  timeSecond?: Maybe<Scalars['Int']>;
  linkToTimeSecond?: Maybe<Scalars['String']>;
  controversialPoint?: Maybe<Scalars['Boolean']>;
  startControversialPoint?: Maybe<Scalars['Int']>;
  highlight?: Maybe<Scalars['Boolean']>;
  startHighlight?: Maybe<Scalars['Int']>;
  order: Scalars['Int'];
  eventTypeId: Scalars['String'];
  videoId?: Maybe<Scalars['Int']>;
  teamForCompetitionId?: Maybe<Scalars['Int']>;
  mainPlayerId?: Maybe<Scalars['Int']>;
  secondPlayerId?: Maybe<Scalars['Int']>;
  firstPlayerRoleId?: Maybe<Scalars['String']>;
  secondPlayerRoleId?: Maybe<Scalars['String']>;
  periodTypeId?: Maybe<Scalars['String']>;
  matchId: Scalars['Int'];
  points: Scalars['Int'];
  periodNumber?: Maybe<Scalars['Int']>;
};

export type EventFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  timeSecond?: InputMaybe<Scalars['Int']>;
  timeSecond_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  timeSecond_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  timeSecond_lte?: InputMaybe<Scalars['Int']>;
  timeSecond_gte?: InputMaybe<Scalars['Int']>;
  timeSecond_lt?: InputMaybe<Scalars['Int']>;
  timeSecond_gt?: InputMaybe<Scalars['Int']>;
  timeSecond_defined?: InputMaybe<Scalars['Boolean']>;
  linkToTimeSecond?: InputMaybe<Scalars['String']>;
  linkToTimeSecond_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkToTimeSecond_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkToTimeSecond_defined?: InputMaybe<Scalars['Boolean']>;
  controversialPoint?: InputMaybe<Scalars['Boolean']>;
  controversialPoint_defined?: InputMaybe<Scalars['Boolean']>;
  startControversialPoint?: InputMaybe<Scalars['Int']>;
  startControversialPoint_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startControversialPoint_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startControversialPoint_lte?: InputMaybe<Scalars['Int']>;
  startControversialPoint_gte?: InputMaybe<Scalars['Int']>;
  startControversialPoint_lt?: InputMaybe<Scalars['Int']>;
  startControversialPoint_gt?: InputMaybe<Scalars['Int']>;
  startControversialPoint_defined?: InputMaybe<Scalars['Boolean']>;
  highlight?: InputMaybe<Scalars['Boolean']>;
  highlight_defined?: InputMaybe<Scalars['Boolean']>;
  startHighlight?: InputMaybe<Scalars['Int']>;
  startHighlight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startHighlight_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startHighlight_lte?: InputMaybe<Scalars['Int']>;
  startHighlight_gte?: InputMaybe<Scalars['Int']>;
  startHighlight_lt?: InputMaybe<Scalars['Int']>;
  startHighlight_gt?: InputMaybe<Scalars['Int']>;
  startHighlight_defined?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_lte?: InputMaybe<Scalars['Int']>;
  order_gte?: InputMaybe<Scalars['Int']>;
  order_lt?: InputMaybe<Scalars['Int']>;
  order_gt?: InputMaybe<Scalars['Int']>;
  eventTypeId?: InputMaybe<Scalars['String']>;
  eventTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eventTypeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoId?: InputMaybe<Scalars['Int']>;
  videoId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  videoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  videoId_defined?: InputMaybe<Scalars['Boolean']>;
  teamForCompetitionId?: InputMaybe<Scalars['Int']>;
  teamForCompetitionId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamForCompetitionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamForCompetitionId_defined?: InputMaybe<Scalars['Boolean']>;
  mainPlayerId?: InputMaybe<Scalars['Int']>;
  mainPlayerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  mainPlayerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  mainPlayerId_defined?: InputMaybe<Scalars['Boolean']>;
  secondPlayerId?: InputMaybe<Scalars['Int']>;
  secondPlayerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  secondPlayerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  secondPlayerId_defined?: InputMaybe<Scalars['Boolean']>;
  firstPlayerRoleId?: InputMaybe<Scalars['String']>;
  firstPlayerRoleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstPlayerRoleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstPlayerRoleId_defined?: InputMaybe<Scalars['Boolean']>;
  secondPlayerRoleId?: InputMaybe<Scalars['String']>;
  secondPlayerRoleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondPlayerRoleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondPlayerRoleId_defined?: InputMaybe<Scalars['Boolean']>;
  periodTypeId?: InputMaybe<Scalars['String']>;
  periodTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  periodTypeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  periodTypeId_defined?: InputMaybe<Scalars['Boolean']>;
  matchId?: InputMaybe<Scalars['Int']>;
  matchId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  points?: InputMaybe<Scalars['Int']>;
  points_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  points_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  points_lte?: InputMaybe<Scalars['Int']>;
  points_gte?: InputMaybe<Scalars['Int']>;
  points_lt?: InputMaybe<Scalars['Int']>;
  points_gt?: InputMaybe<Scalars['Int']>;
  periodNumber?: InputMaybe<Scalars['Int']>;
  periodNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  periodNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  periodNumber_lte?: InputMaybe<Scalars['Int']>;
  periodNumber_gte?: InputMaybe<Scalars['Int']>;
  periodNumber_lt?: InputMaybe<Scalars['Int']>;
  periodNumber_gt?: InputMaybe<Scalars['Int']>;
  periodNumber_defined?: InputMaybe<Scalars['Boolean']>;
};

export type EventTypeCategory = {
  __typename?: 'EventTypeCategory';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type EventTypeCategoryFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventType = {
  __typename?: 'EventType';
  id: Scalars['ID'];
  title: Scalars['String'];
  points: Scalars['Int'];
  eventTypeCategoryId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  showInTranslationMode?: Maybe<Scalars['Boolean']>;
  needForSecondPlayer?: Maybe<Scalars['Boolean']>;
  dependsOnPoint?: Maybe<Scalars['Boolean']>;
  redCard?: Maybe<Scalars['Boolean']>;
  yellowCard?: Maybe<Scalars['Boolean']>;
  calculateBlock?: Maybe<Scalars['Boolean']>;
  calculateTakeaway?: Maybe<Scalars['Boolean']>;
  calculateSelection?: Maybe<Scalars['Boolean']>;
  calculateInterseption?: Maybe<Scalars['Boolean']>;
  calculateGuardian?: Maybe<Scalars['Boolean']>;
  calculatePositionError?: Maybe<Scalars['Boolean']>;
  calculateGrossError?: Maybe<Scalars['Boolean']>;
  calculatePositiveDribling?: Maybe<Scalars['Boolean']>;
  calculateNegativeDribling?: Maybe<Scalars['Boolean']>;
  calculatePositiveSgm?: Maybe<Scalars['Boolean']>;
  calculateNegativeSgm?: Maybe<Scalars['Boolean']>;
  calculatePositiveRgm?: Maybe<Scalars['Boolean']>;
  calculateNegativeRgm?: Maybe<Scalars['Boolean']>;
  calculateLosses?: Maybe<Scalars['Boolean']>;
  calculateGegenPressing?: Maybe<Scalars['Boolean']>;
  calculatePressing?: Maybe<Scalars['Boolean']>;
  calculateSaveBall?: Maybe<Scalars['Boolean']>;
  calculatePositiveTransfer?: Maybe<Scalars['Boolean']>;
  calculateNegativeTransfer?: Maybe<Scalars['Boolean']>;
  calculateHit?: Maybe<Scalars['Boolean']>;
  calculateHitTarget?: Maybe<Scalars['Boolean']>;
  calculateCorner?: Maybe<Scalars['Boolean']>;
  calculateFoul?: Maybe<Scalars['Boolean']>;
  calculateOffside?: Maybe<Scalars['Boolean']>;
};

export type EventTypeFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  points?: InputMaybe<Scalars['Int']>;
  points_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  points_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  points_lte?: InputMaybe<Scalars['Int']>;
  points_gte?: InputMaybe<Scalars['Int']>;
  points_lt?: InputMaybe<Scalars['Int']>;
  points_gt?: InputMaybe<Scalars['Int']>;
  eventTypeCategoryId?: InputMaybe<Scalars['String']>;
  eventTypeCategoryId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eventTypeCategoryId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eventTypeCategoryId_defined?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_lte?: InputMaybe<Scalars['Int']>;
  order_gte?: InputMaybe<Scalars['Int']>;
  order_lt?: InputMaybe<Scalars['Int']>;
  order_gt?: InputMaybe<Scalars['Int']>;
  order_defined?: InputMaybe<Scalars['Boolean']>;
  showInTranslationMode?: InputMaybe<Scalars['Boolean']>;
  showInTranslationMode_defined?: InputMaybe<Scalars['Boolean']>;
  needForSecondPlayer?: InputMaybe<Scalars['Boolean']>;
  needForSecondPlayer_defined?: InputMaybe<Scalars['Boolean']>;
  dependsOnPoint?: InputMaybe<Scalars['Boolean']>;
  dependsOnPoint_defined?: InputMaybe<Scalars['Boolean']>;
  redCard?: InputMaybe<Scalars['Boolean']>;
  redCard_defined?: InputMaybe<Scalars['Boolean']>;
  yellowCard?: InputMaybe<Scalars['Boolean']>;
  yellowCard_defined?: InputMaybe<Scalars['Boolean']>;
  calculateBlock?: InputMaybe<Scalars['Boolean']>;
  calculateBlock_defined?: InputMaybe<Scalars['Boolean']>;
  calculateTakeaway?: InputMaybe<Scalars['Boolean']>;
  calculateTakeaway_defined?: InputMaybe<Scalars['Boolean']>;
  calculateSelection?: InputMaybe<Scalars['Boolean']>;
  calculateSelection_defined?: InputMaybe<Scalars['Boolean']>;
  calculateInterseption?: InputMaybe<Scalars['Boolean']>;
  calculateInterseption_defined?: InputMaybe<Scalars['Boolean']>;
  calculateGuardian?: InputMaybe<Scalars['Boolean']>;
  calculateGuardian_defined?: InputMaybe<Scalars['Boolean']>;
  calculatePositionError?: InputMaybe<Scalars['Boolean']>;
  calculatePositionError_defined?: InputMaybe<Scalars['Boolean']>;
  calculateGrossError?: InputMaybe<Scalars['Boolean']>;
  calculateGrossError_defined?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveDribling?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveDribling_defined?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeDribling?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeDribling_defined?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveSgm?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveSgm_defined?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeSgm?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeSgm_defined?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveRgm?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveRgm_defined?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeRgm?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeRgm_defined?: InputMaybe<Scalars['Boolean']>;
  calculateLosses?: InputMaybe<Scalars['Boolean']>;
  calculateLosses_defined?: InputMaybe<Scalars['Boolean']>;
  calculateGegenPressing?: InputMaybe<Scalars['Boolean']>;
  calculateGegenPressing_defined?: InputMaybe<Scalars['Boolean']>;
  calculatePressing?: InputMaybe<Scalars['Boolean']>;
  calculatePressing_defined?: InputMaybe<Scalars['Boolean']>;
  calculateSaveBall?: InputMaybe<Scalars['Boolean']>;
  calculateSaveBall_defined?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveTransfer?: InputMaybe<Scalars['Boolean']>;
  calculatePositiveTransfer_defined?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeTransfer?: InputMaybe<Scalars['Boolean']>;
  calculateNegativeTransfer_defined?: InputMaybe<Scalars['Boolean']>;
  calculateHit?: InputMaybe<Scalars['Boolean']>;
  calculateHit_defined?: InputMaybe<Scalars['Boolean']>;
  calculateHitTarget?: InputMaybe<Scalars['Boolean']>;
  calculateHitTarget_defined?: InputMaybe<Scalars['Boolean']>;
  calculateCorner?: InputMaybe<Scalars['Boolean']>;
  calculateCorner_defined?: InputMaybe<Scalars['Boolean']>;
  calculateFoul?: InputMaybe<Scalars['Boolean']>;
  calculateFoul_defined?: InputMaybe<Scalars['Boolean']>;
  calculateOffside?: InputMaybe<Scalars['Boolean']>;
  calculateOffside_defined?: InputMaybe<Scalars['Boolean']>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['Int'];
  originalName: Scalars['String'];
  url: Scalars['String'];
  mimetype: Scalars['String'];
  s3Key: Scalars['String'];
  eTag: Scalars['String'];
  bytes?: Maybe<Scalars['Int']>;
};

export type FileFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  originalName?: InputMaybe<Scalars['String']>;
  originalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  originalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mimetype?: InputMaybe<Scalars['String']>;
  mimetype_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mimetype_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  s3Key?: InputMaybe<Scalars['String']>;
  s3Key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  s3Key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eTag?: InputMaybe<Scalars['String']>;
  eTag_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eTag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bytes?: InputMaybe<Scalars['Int']>;
  bytes_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  bytes_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  bytes_lte?: InputMaybe<Scalars['Int']>;
  bytes_gte?: InputMaybe<Scalars['Int']>;
  bytes_lt?: InputMaybe<Scalars['Int']>;
  bytes_gt?: InputMaybe<Scalars['Int']>;
  bytes_defined?: InputMaybe<Scalars['Boolean']>;
};

export type Glossary = {
  __typename?: 'Glossary';
  id: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  periodTypeId: Scalars['String'];
};

export type GlossaryFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  periodTypeId?: InputMaybe<Scalars['String']>;
  periodTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  periodTypeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  Clubs = 'clubs',
  Competitions = 'competitions',
  ConfigurationVariables = 'configurationVariables',
  Delegations = 'delegations',
  Entities = 'entities',
  EntitiesTrackings = 'entitiesTrackings',
  EventTypeCategories = 'eventTypeCategories',
  EventTypes = 'eventTypes',
  Events = 'events',
  Files = 'files',
  Glossaries = 'glossaries',
  HistoryOfPlayerRoles = 'historyOfPlayerRoles',
  Languages = 'languages',
  MailingCampaignStatuses = 'mailingCampaignStatuses',
  MailingCampaigns = 'mailingCampaigns',
  MailingMessageStatuses = 'mailingMessageStatuses',
  MailingMessages = 'mailingMessages',
  MailingTypes = 'mailingTypes',
  ManagerLoginTypes = 'managerLoginTypes',
  ManagerLogins = 'managerLogins',
  Managers = 'managers',
  ManagersToPermissions = 'managersToPermissions',
  ManagersToRoles = 'managersToRoles',
  MatchPeriodMarkups = 'matchPeriodMarkups',
  MatchRequests = 'matchRequests',
  MatchStatuses = 'matchStatuses',
  MatchVideos = 'matchVideos',
  Matches = 'matches',
  MessageTemplateLangVariants = 'messageTemplateLangVariants',
  MessageTemplates = 'messageTemplates',
  MessageTypes = 'messageTypes',
  Organizators = 'organizators',
  Parents = 'parents',
  PeriodTypes = 'periodTypes',
  Permissions = 'permissions',
  PlayerAggregatedRoles = 'playerAggregatedRoles',
  PlayerCompetitionRatings = 'playerCompetitionRatings',
  PlayerForCompetitionTeams = 'playerForCompetitionTeams',
  PlayerForMatchRequests = 'playerForMatchRequests',
  PlayerForTeamMatchLists = 'playerForTeamMatchLists',
  PlayerMatchRatings = 'playerMatchRatings',
  PlayerRanks = 'playerRanks',
  PlayerRoles = 'playerRoles',
  Players = 'players',
  ReportForClubs = 'reportForClubs',
  ReportForOrganizations = 'reportForOrganizations',
  ReportForParents = 'reportForParents',
  ReportForTeams = 'reportForTeams',
  Roles = 'roles',
  RolesToPermissions = 'rolesToPermissions',
  Stats = 'stats',
  Tags = 'tags',
  TeamForCompetitions = 'teamForCompetitions',
  TeamForPlayers = 'teamForPlayers',
  TeamMatchLists = 'teamMatchLists',
  TeamMatchReports = 'teamMatchReports',
  Teams = 'teams',
  TemplateStyles = 'templateStyles',
  Tenants = 'tenants',
  Units = 'units',
  Users = 'users',
  WscContacts = 'wscContacts',
  WscMessages = 'wscMessages',
  WscUsers = 'wscUsers'
}

export type HistoryOfPlayerRole = {
  __typename?: 'HistoryOfPlayerRole';
  id: Scalars['Int'];
  matchId: Scalars['Int'];
  playerId: Scalars['Int'];
  playerRoleId: Scalars['String'];
  status?: Maybe<Scalars['Boolean']>;
  order: Scalars['Int'];
};

export type HistoryOfPlayerRoleFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  matchId?: InputMaybe<Scalars['Int']>;
  matchId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId?: InputMaybe<Scalars['Int']>;
  playerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerRoleId?: InputMaybe<Scalars['String']>;
  playerRoleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerRoleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Scalars['Boolean']>;
  status_defined?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_lte?: InputMaybe<Scalars['Int']>;
  order_gte?: InputMaybe<Scalars['Int']>;
  order_lt?: InputMaybe<Scalars['Int']>;
  order_gt?: InputMaybe<Scalars['Int']>;
};

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
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_defined?: InputMaybe<Scalars['Boolean']>;
};

export type MailingCampaign = {
  __typename?: 'MailingCampaign';
  id: Scalars['Int'];
  title: Scalars['String'];
  mailingTypeId: Scalars['String'];
  priority: Scalars['Int'];
  date?: Maybe<Scalars['Date']>;
  mailingCampaignStatusId?: Maybe<Scalars['String']>;
  messageTemplateId: Scalars['String'];
};

export type MailingCampaignFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mailingTypeId?: InputMaybe<Scalars['String']>;
  mailingTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mailingTypeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  priority?: InputMaybe<Scalars['Int']>;
  priority_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  priority_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  priority_lte?: InputMaybe<Scalars['Int']>;
  priority_gte?: InputMaybe<Scalars['Int']>;
  priority_lt?: InputMaybe<Scalars['Int']>;
  priority_gt?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['Date']>;
  date_lte?: InputMaybe<Scalars['Date']>;
  date_gte?: InputMaybe<Scalars['Date']>;
  date_lt?: InputMaybe<Scalars['Date']>;
  date_gt?: InputMaybe<Scalars['Date']>;
  date_defined?: InputMaybe<Scalars['Boolean']>;
  mailingCampaignStatusId?: InputMaybe<Scalars['String']>;
  mailingCampaignStatusId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mailingCampaignStatusId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mailingCampaignStatusId_defined?: InputMaybe<Scalars['Boolean']>;
  messageTemplateId?: InputMaybe<Scalars['String']>;
  messageTemplateId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  messageTemplateId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MailingCampaignStatus = {
  __typename?: 'MailingCampaignStatus';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type MailingCampaignStatusFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuantityPerStatus = {
  __typename?: 'QuantityPerStatus';
  draft: Scalars['Int'];
  stopped: Scalars['Int'];
  pending: Scalars['Int'];
  sent: Scalars['Int'];
  cancelled: Scalars['Int'];
  errored: Scalars['Int'];
};

export type MailingMessage = {
  __typename?: 'MailingMessage';
  id: Scalars['Int'];
  mailingCampaignId: Scalars['Int'];
  templateId: Scalars['String'];
  languageId: Scalars['String'];
  to: Scalars['String'];
  locals: Scalars['String'];
  localsHash: Scalars['String'];
  priority: Scalars['Int'];
  dateCreated: Scalars['DateTime'];
  dateSent?: Maybe<Scalars['DateTime']>;
  error?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  uniqueKey?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  mailingMessageStatusId: Scalars['String'];
  messageTemplateLangVariantId: Scalars['Int'];
};

export type MailingMessageFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  mailingCampaignId?: InputMaybe<Scalars['Int']>;
  mailingCampaignId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  mailingCampaignId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  templateId?: InputMaybe<Scalars['String']>;
  templateId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  templateId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languageId?: InputMaybe<Scalars['String']>;
  languageId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languageId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  to?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  to_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locals?: InputMaybe<Scalars['String']>;
  locals_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locals_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  localsHash?: InputMaybe<Scalars['String']>;
  localsHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  localsHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  priority?: InputMaybe<Scalars['Int']>;
  priority_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  priority_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  priority_lte?: InputMaybe<Scalars['Int']>;
  priority_gte?: InputMaybe<Scalars['Int']>;
  priority_lt?: InputMaybe<Scalars['Int']>;
  priority_gt?: InputMaybe<Scalars['Int']>;
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateCreated_lte?: InputMaybe<Scalars['DateTime']>;
  dateCreated_gte?: InputMaybe<Scalars['DateTime']>;
  dateCreated_lt?: InputMaybe<Scalars['DateTime']>;
  dateCreated_gt?: InputMaybe<Scalars['DateTime']>;
  dateSent?: InputMaybe<Scalars['DateTime']>;
  dateSent_lte?: InputMaybe<Scalars['DateTime']>;
  dateSent_gte?: InputMaybe<Scalars['DateTime']>;
  dateSent_lt?: InputMaybe<Scalars['DateTime']>;
  dateSent_gt?: InputMaybe<Scalars['DateTime']>;
  dateSent_defined?: InputMaybe<Scalars['Boolean']>;
  error?: InputMaybe<Scalars['String']>;
  error_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  error_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  error_defined?: InputMaybe<Scalars['Boolean']>;
  html?: InputMaybe<Scalars['String']>;
  html_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  html_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  html_defined?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_defined?: InputMaybe<Scalars['Boolean']>;
  uniqueKey?: InputMaybe<Scalars['String']>;
  uniqueKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uniqueKey_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uniqueKey_defined?: InputMaybe<Scalars['Boolean']>;
  subject?: InputMaybe<Scalars['String']>;
  subject_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subject_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subject_defined?: InputMaybe<Scalars['Boolean']>;
  mailingMessageStatusId?: InputMaybe<Scalars['String']>;
  mailingMessageStatusId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mailingMessageStatusId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  messageTemplateLangVariantId?: InputMaybe<Scalars['Int']>;
  messageTemplateLangVariantId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  messageTemplateLangVariantId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type MailingMessageStatus = {
  __typename?: 'MailingMessageStatus';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  final: Scalars['Boolean'];
};

export type MailingMessageStatusFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_defined?: InputMaybe<Scalars['Boolean']>;
  final?: InputMaybe<Scalars['Boolean']>;
};

export type MailingType = {
  __typename?: 'MailingType';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type MailingTypeFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ManagerLogin = {
  __typename?: 'ManagerLogin';
  id: Scalars['Int'];
  managerLoginTypeId: Scalars['String'];
  login: Scalars['String'];
  passwordHash?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  locked: Scalars['Boolean'];
  managerId: Scalars['Int'];
};

export type ManagerLoginFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  managerLoginTypeId?: InputMaybe<Scalars['String']>;
  managerLoginTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  managerLoginTypeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  login?: InputMaybe<Scalars['String']>;
  login_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  login_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordHash_defined?: InputMaybe<Scalars['Boolean']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  emailVerified_defined?: InputMaybe<Scalars['Boolean']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  managerId?: InputMaybe<Scalars['Int']>;
  managerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  managerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ManagerLoginType = {
  __typename?: 'ManagerLoginType';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ManagerLoginTypeFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_defined?: InputMaybe<Scalars['Boolean']>;
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
  photoId?: Maybe<Scalars['Int']>;
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
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_defined?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Scalars['String']>;
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languageId?: InputMaybe<Scalars['String']>;
  languageId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languageId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languageId_defined?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_defined?: InputMaybe<Scalars['Boolean']>;
  photoId?: InputMaybe<Scalars['Int']>;
  photoId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  photoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  photoId_defined?: InputMaybe<Scalars['Boolean']>;
  telegramLogin?: InputMaybe<Scalars['String']>;
  telegramLogin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  telegramLogin_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  telegramLogin_defined?: InputMaybe<Scalars['Boolean']>;
  unitId?: InputMaybe<Scalars['Int']>;
  unitId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  unitId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  unitId_defined?: InputMaybe<Scalars['Boolean']>;
  headOfUnit?: InputMaybe<Scalars['Boolean']>;
  active?: InputMaybe<Scalars['Boolean']>;
  tenantId?: InputMaybe<Scalars['Int']>;
  tenantId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tenantId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tenantId_defined?: InputMaybe<Scalars['Boolean']>;
};

export type ManagersToPermission = {
  __typename?: 'ManagersToPermission';
  id: Scalars['Int'];
  managerId: Scalars['Int'];
  permissionId: Scalars['String'];
  expiresAt?: Maybe<Scalars['Date']>;
};

export type ManagersToPermissionFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  managerId?: InputMaybe<Scalars['Int']>;
  managerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  managerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  permissionId?: InputMaybe<Scalars['String']>;
  permissionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  permissionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expiresAt?: InputMaybe<Scalars['Date']>;
  expiresAt_lte?: InputMaybe<Scalars['Date']>;
  expiresAt_gte?: InputMaybe<Scalars['Date']>;
  expiresAt_lt?: InputMaybe<Scalars['Date']>;
  expiresAt_gt?: InputMaybe<Scalars['Date']>;
  expiresAt_defined?: InputMaybe<Scalars['Boolean']>;
};

export type ManagersToRole = {
  __typename?: 'ManagersToRole';
  id: Scalars['Int'];
  managerId: Scalars['Int'];
  roleId: Scalars['String'];
  expiresAt?: Maybe<Scalars['Date']>;
};

export type ManagersToRoleFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  managerId?: InputMaybe<Scalars['Int']>;
  managerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  managerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  roleId?: InputMaybe<Scalars['String']>;
  roleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  roleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expiresAt?: InputMaybe<Scalars['Date']>;
  expiresAt_lte?: InputMaybe<Scalars['Date']>;
  expiresAt_gte?: InputMaybe<Scalars['Date']>;
  expiresAt_lt?: InputMaybe<Scalars['Date']>;
  expiresAt_gt?: InputMaybe<Scalars['Date']>;
  expiresAt_defined?: InputMaybe<Scalars['Boolean']>;
};

export type Match = {
  __typename?: 'Match';
  id: Scalars['Int'];
  createdByManagerId: Scalars['Int'];
  lastChangedByManagerId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  competitionId: Scalars['Int'];
  firstTeamId?: Maybe<Scalars['Int']>;
  firstTeamColor?: Maybe<Scalars['String']>;
  firstTeamOnFieldId?: Maybe<Scalars['Int']>;
  secondTeamId?: Maybe<Scalars['Int']>;
  secondTeamColor?: Maybe<Scalars['String']>;
  matchDate: Scalars['Date'];
  matchTime: Scalars['String'];
  duration: Scalars['Int'];
  place?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  firstTeamPoints?: Maybe<Scalars['Int']>;
  secondTeamPoints?: Maybe<Scalars['Int']>;
  redCardFirstTeam?: Maybe<Scalars['Int']>;
  redCardSecondTeam?: Maybe<Scalars['Int']>;
  yellowCardFirstTeam?: Maybe<Scalars['Int']>;
  yellowCardSecondTeam?: Maybe<Scalars['Int']>;
  firstTeamHandleTime?: Maybe<Scalars['Int']>;
  secondTeamHandleTime?: Maybe<Scalars['Int']>;
  linkToProtocol?: Maybe<Scalars['String']>;
  matchStatusId?: Maybe<Scalars['String']>;
};

export type MatchFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  createdByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  createdByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_defined?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  competitionId?: InputMaybe<Scalars['Int']>;
  competitionId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  competitionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  firstTeamId?: InputMaybe<Scalars['Int']>;
  firstTeamId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  firstTeamId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  firstTeamId_defined?: InputMaybe<Scalars['Boolean']>;
  firstTeamColor?: InputMaybe<Scalars['String']>;
  firstTeamColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstTeamColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstTeamColor_defined?: InputMaybe<Scalars['Boolean']>;
  firstTeamOnFieldId?: InputMaybe<Scalars['Int']>;
  firstTeamOnFieldId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  firstTeamOnFieldId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  firstTeamOnFieldId_defined?: InputMaybe<Scalars['Boolean']>;
  secondTeamId?: InputMaybe<Scalars['Int']>;
  secondTeamId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  secondTeamId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  secondTeamId_defined?: InputMaybe<Scalars['Boolean']>;
  secondTeamColor?: InputMaybe<Scalars['String']>;
  secondTeamColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondTeamColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondTeamColor_defined?: InputMaybe<Scalars['Boolean']>;
  matchDate?: InputMaybe<Scalars['Date']>;
  matchDate_lte?: InputMaybe<Scalars['Date']>;
  matchDate_gte?: InputMaybe<Scalars['Date']>;
  matchDate_lt?: InputMaybe<Scalars['Date']>;
  matchDate_gt?: InputMaybe<Scalars['Date']>;
  matchTime?: InputMaybe<Scalars['String']>;
  matchTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matchTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  duration?: InputMaybe<Scalars['Int']>;
  duration_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  duration_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  duration_lte?: InputMaybe<Scalars['Int']>;
  duration_gte?: InputMaybe<Scalars['Int']>;
  duration_lt?: InputMaybe<Scalars['Int']>;
  duration_gt?: InputMaybe<Scalars['Int']>;
  place?: InputMaybe<Scalars['String']>;
  place_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  place_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  place_defined?: InputMaybe<Scalars['Boolean']>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_defined?: InputMaybe<Scalars['Boolean']>;
  firstTeamPoints?: InputMaybe<Scalars['Int']>;
  firstTeamPoints_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  firstTeamPoints_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  firstTeamPoints_lte?: InputMaybe<Scalars['Int']>;
  firstTeamPoints_gte?: InputMaybe<Scalars['Int']>;
  firstTeamPoints_lt?: InputMaybe<Scalars['Int']>;
  firstTeamPoints_gt?: InputMaybe<Scalars['Int']>;
  firstTeamPoints_defined?: InputMaybe<Scalars['Boolean']>;
  secondTeamPoints?: InputMaybe<Scalars['Int']>;
  secondTeamPoints_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  secondTeamPoints_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  secondTeamPoints_lte?: InputMaybe<Scalars['Int']>;
  secondTeamPoints_gte?: InputMaybe<Scalars['Int']>;
  secondTeamPoints_lt?: InputMaybe<Scalars['Int']>;
  secondTeamPoints_gt?: InputMaybe<Scalars['Int']>;
  secondTeamPoints_defined?: InputMaybe<Scalars['Boolean']>;
  redCardFirstTeam?: InputMaybe<Scalars['Int']>;
  redCardFirstTeam_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  redCardFirstTeam_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  redCardFirstTeam_lte?: InputMaybe<Scalars['Int']>;
  redCardFirstTeam_gte?: InputMaybe<Scalars['Int']>;
  redCardFirstTeam_lt?: InputMaybe<Scalars['Int']>;
  redCardFirstTeam_gt?: InputMaybe<Scalars['Int']>;
  redCardFirstTeam_defined?: InputMaybe<Scalars['Boolean']>;
  redCardSecondTeam?: InputMaybe<Scalars['Int']>;
  redCardSecondTeam_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  redCardSecondTeam_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  redCardSecondTeam_lte?: InputMaybe<Scalars['Int']>;
  redCardSecondTeam_gte?: InputMaybe<Scalars['Int']>;
  redCardSecondTeam_lt?: InputMaybe<Scalars['Int']>;
  redCardSecondTeam_gt?: InputMaybe<Scalars['Int']>;
  redCardSecondTeam_defined?: InputMaybe<Scalars['Boolean']>;
  yellowCardFirstTeam?: InputMaybe<Scalars['Int']>;
  yellowCardFirstTeam_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  yellowCardFirstTeam_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  yellowCardFirstTeam_lte?: InputMaybe<Scalars['Int']>;
  yellowCardFirstTeam_gte?: InputMaybe<Scalars['Int']>;
  yellowCardFirstTeam_lt?: InputMaybe<Scalars['Int']>;
  yellowCardFirstTeam_gt?: InputMaybe<Scalars['Int']>;
  yellowCardFirstTeam_defined?: InputMaybe<Scalars['Boolean']>;
  yellowCardSecondTeam?: InputMaybe<Scalars['Int']>;
  yellowCardSecondTeam_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  yellowCardSecondTeam_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  yellowCardSecondTeam_lte?: InputMaybe<Scalars['Int']>;
  yellowCardSecondTeam_gte?: InputMaybe<Scalars['Int']>;
  yellowCardSecondTeam_lt?: InputMaybe<Scalars['Int']>;
  yellowCardSecondTeam_gt?: InputMaybe<Scalars['Int']>;
  yellowCardSecondTeam_defined?: InputMaybe<Scalars['Boolean']>;
  firstTeamHandleTime?: InputMaybe<Scalars['Int']>;
  firstTeamHandleTime_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  firstTeamHandleTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  firstTeamHandleTime_lte?: InputMaybe<Scalars['Int']>;
  firstTeamHandleTime_gte?: InputMaybe<Scalars['Int']>;
  firstTeamHandleTime_lt?: InputMaybe<Scalars['Int']>;
  firstTeamHandleTime_gt?: InputMaybe<Scalars['Int']>;
  firstTeamHandleTime_defined?: InputMaybe<Scalars['Boolean']>;
  secondTeamHandleTime?: InputMaybe<Scalars['Int']>;
  secondTeamHandleTime_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  secondTeamHandleTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  secondTeamHandleTime_lte?: InputMaybe<Scalars['Int']>;
  secondTeamHandleTime_gte?: InputMaybe<Scalars['Int']>;
  secondTeamHandleTime_lt?: InputMaybe<Scalars['Int']>;
  secondTeamHandleTime_gt?: InputMaybe<Scalars['Int']>;
  secondTeamHandleTime_defined?: InputMaybe<Scalars['Boolean']>;
  linkToProtocol?: InputMaybe<Scalars['String']>;
  linkToProtocol_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkToProtocol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkToProtocol_defined?: InputMaybe<Scalars['Boolean']>;
  matchStatusId?: InputMaybe<Scalars['String']>;
  matchStatusId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matchStatusId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matchStatusId_defined?: InputMaybe<Scalars['Boolean']>;
};

export type MatchPeriodMarkup = {
  __typename?: 'MatchPeriodMarkup';
  id: Scalars['Int'];
  timestamp?: Maybe<Scalars['Int']>;
  periodTypeId: Scalars['String'];
  matchVideoId?: Maybe<Scalars['Int']>;
};

export type MatchPeriodMarkupFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_defined?: InputMaybe<Scalars['Boolean']>;
  periodTypeId?: InputMaybe<Scalars['String']>;
  periodTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  periodTypeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matchVideoId?: InputMaybe<Scalars['Int']>;
  matchVideoId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchVideoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchVideoId_defined?: InputMaybe<Scalars['Boolean']>;
};

export type MatchRequest = {
  __typename?: 'MatchRequest';
  id: Scalars['Int'];
  matchId: Scalars['Int'];
  teamForCompetitionId: Scalars['Int'];
};

export type MatchRequestFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  matchId?: InputMaybe<Scalars['Int']>;
  matchId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamForCompetitionId?: InputMaybe<Scalars['Int']>;
  teamForCompetitionId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamForCompetitionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type MatchStatus = {
  __typename?: 'MatchStatus';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type MatchStatusFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MatchVideo = {
  __typename?: 'MatchVideo';
  id: Scalars['Int'];
  videoTitle: Scalars['String'];
  videoLink: Scalars['String'];
  matchId?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

export type MatchVideoFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  videoTitle?: InputMaybe<Scalars['String']>;
  videoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoLink?: InputMaybe<Scalars['String']>;
  videoLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matchId?: InputMaybe<Scalars['Int']>;
  matchId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchId_defined?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_lte?: InputMaybe<Scalars['Int']>;
  order_gte?: InputMaybe<Scalars['Int']>;
  order_lt?: InputMaybe<Scalars['Int']>;
  order_gt?: InputMaybe<Scalars['Int']>;
  order_defined?: InputMaybe<Scalars['Boolean']>;
};

export type MessageTemplateLangVariant = {
  __typename?: 'MessageTemplateLangVariant';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  subjectTemplate: Scalars['String'];
  bodyTemplate: Scalars['String'];
  messageTemplateId: Scalars['String'];
  languageId: Scalars['String'];
  additionalStyle?: Maybe<Scalars['String']>;
};

export type MessageTemplateLangVariantFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_defined?: InputMaybe<Scalars['Boolean']>;
  subjectTemplate?: InputMaybe<Scalars['String']>;
  subjectTemplate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subjectTemplate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bodyTemplate?: InputMaybe<Scalars['String']>;
  bodyTemplate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bodyTemplate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  messageTemplateId?: InputMaybe<Scalars['String']>;
  messageTemplateId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  messageTemplateId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languageId?: InputMaybe<Scalars['String']>;
  languageId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languageId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  additionalStyle?: InputMaybe<Scalars['String']>;
  additionalStyle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  additionalStyle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  additionalStyle_defined?: InputMaybe<Scalars['Boolean']>;
};

export type MessageTemplate = {
  __typename?: 'MessageTemplate';
  id: Scalars['ID'];
  title: Scalars['String'];
  secretData: Scalars['Boolean'];
  messageTypeId: Scalars['String'];
  dataExample?: Maybe<Scalars['String']>;
  templateStyleId?: Maybe<Scalars['Int']>;
};

export type MessageTemplateFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secretData?: InputMaybe<Scalars['Boolean']>;
  messageTypeId?: InputMaybe<Scalars['String']>;
  messageTypeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  messageTypeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataExample?: InputMaybe<Scalars['String']>;
  dataExample_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataExample_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataExample_defined?: InputMaybe<Scalars['Boolean']>;
  templateStyleId?: InputMaybe<Scalars['Int']>;
  templateStyleId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  templateStyleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  templateStyleId_defined?: InputMaybe<Scalars['Boolean']>;
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
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_defined?: InputMaybe<Scalars['Boolean']>;
};

export type Organizator = {
  __typename?: 'Organizator';
  id: Scalars['Int'];
  title: Scalars['String'];
  createdByManagerId: Scalars['Int'];
  lastChangedByManagerId?: Maybe<Scalars['Int']>;
};

export type OrganizatorFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  createdByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  createdByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_defined?: InputMaybe<Scalars['Boolean']>;
};

export type Parent = {
  __typename?: 'Parent';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  patronymic?: Maybe<Scalars['String']>;
  createdByManagerId: Scalars['Int'];
  lastChangedByManagerId?: Maybe<Scalars['Int']>;
};

export type ParentFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstname?: InputMaybe<Scalars['String']>;
  firstname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastname?: InputMaybe<Scalars['String']>;
  lastname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  patronymic?: InputMaybe<Scalars['String']>;
  patronymic_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  patronymic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  patronymic_defined?: InputMaybe<Scalars['Boolean']>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  createdByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  createdByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_defined?: InputMaybe<Scalars['Boolean']>;
};

export type PeriodType = {
  __typename?: 'PeriodType';
  id: Scalars['ID'];
  title: Scalars['String'];
  order: Scalars['Int'];
};

export type PeriodTypeFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  order?: InputMaybe<Scalars['Int']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_lte?: InputMaybe<Scalars['Int']>;
  order_gte?: InputMaybe<Scalars['Int']>;
  order_lt?: InputMaybe<Scalars['Int']>;
  order_gt?: InputMaybe<Scalars['Int']>;
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
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_defined?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerAggregatedRole = {
  __typename?: 'PlayerAggregatedRole';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type PlayerAggregatedRoleFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PlayerCompetitionRating = {
  __typename?: 'PlayerCompetitionRating';
  id: Scalars['Int'];
  competitionId: Scalars['Int'];
  playerId: Scalars['Int'];
  rating: Scalars['Int'];
};

export type PlayerCompetitionRatingFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  competitionId?: InputMaybe<Scalars['Int']>;
  competitionId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  competitionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId?: InputMaybe<Scalars['Int']>;
  playerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rating?: InputMaybe<Scalars['Int']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rating_lte?: InputMaybe<Scalars['Int']>;
  rating_gte?: InputMaybe<Scalars['Int']>;
  rating_lt?: InputMaybe<Scalars['Int']>;
  rating_gt?: InputMaybe<Scalars['Int']>;
};

export type PlayerForCompetitionTeam = {
  __typename?: 'PlayerForCompetitionTeam';
  id: Scalars['Int'];
  teamForCompetitionId: Scalars['Int'];
  playerId: Scalars['Int'];
};

export type PlayerForCompetitionTeamFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  teamForCompetitionId?: InputMaybe<Scalars['Int']>;
  teamForCompetitionId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamForCompetitionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId?: InputMaybe<Scalars['Int']>;
  playerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type PlayerForMatchRequest = {
  __typename?: 'PlayerForMatchRequest';
  id: Scalars['Int'];
  matchRequestId: Scalars['Int'];
  playerId: Scalars['Int'];
};

export type PlayerForMatchRequestFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  matchRequestId?: InputMaybe<Scalars['Int']>;
  matchRequestId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchRequestId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId?: InputMaybe<Scalars['Int']>;
  playerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type PlayerForTeamMatchList = {
  __typename?: 'PlayerForTeamMatchList';
  id: Scalars['Int'];
  teamMatchListId: Scalars['Int'];
  playerId: Scalars['Int'];
  startingPosition?: Maybe<Scalars['Boolean']>;
  onField?: Maybe<Scalars['Boolean']>;
  playerRoleId: Scalars['String'];
  playerOnMatchNumber?: Maybe<Scalars['Int']>;
};

export type PlayerForTeamMatchListFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  teamMatchListId?: InputMaybe<Scalars['Int']>;
  teamMatchListId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamMatchListId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId?: InputMaybe<Scalars['Int']>;
  playerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startingPosition?: InputMaybe<Scalars['Boolean']>;
  startingPosition_defined?: InputMaybe<Scalars['Boolean']>;
  onField?: InputMaybe<Scalars['Boolean']>;
  onField_defined?: InputMaybe<Scalars['Boolean']>;
  playerRoleId?: InputMaybe<Scalars['String']>;
  playerRoleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerRoleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerOnMatchNumber?: InputMaybe<Scalars['Int']>;
  playerOnMatchNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerOnMatchNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerOnMatchNumber_lte?: InputMaybe<Scalars['Int']>;
  playerOnMatchNumber_gte?: InputMaybe<Scalars['Int']>;
  playerOnMatchNumber_lt?: InputMaybe<Scalars['Int']>;
  playerOnMatchNumber_gt?: InputMaybe<Scalars['Int']>;
  playerOnMatchNumber_defined?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerMatchRating = {
  __typename?: 'PlayerMatchRating';
  id: Scalars['Int'];
  matchId: Scalars['Int'];
  playerId: Scalars['Int'];
  rating: Scalars['Int'];
  progressivePassAccuracy?: Maybe<Scalars['Float']>;
  playerRatingAverage?: Maybe<Scalars['Float']>;
};

export type PlayerMatchRatingFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  matchId?: InputMaybe<Scalars['Int']>;
  matchId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId?: InputMaybe<Scalars['Int']>;
  playerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rating?: InputMaybe<Scalars['Int']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rating_lte?: InputMaybe<Scalars['Int']>;
  rating_gte?: InputMaybe<Scalars['Int']>;
  rating_lt?: InputMaybe<Scalars['Int']>;
  rating_gt?: InputMaybe<Scalars['Int']>;
  progressivePassAccuracy?: InputMaybe<Scalars['Float']>;
  progressivePassAccuracy_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  progressivePassAccuracy_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  progressivePassAccuracy_lte?: InputMaybe<Scalars['Float']>;
  progressivePassAccuracy_gte?: InputMaybe<Scalars['Float']>;
  progressivePassAccuracy_lt?: InputMaybe<Scalars['Float']>;
  progressivePassAccuracy_gt?: InputMaybe<Scalars['Float']>;
  progressivePassAccuracy_defined?: InputMaybe<Scalars['Boolean']>;
  playerRatingAverage?: InputMaybe<Scalars['Float']>;
  playerRatingAverage_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  playerRatingAverage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  playerRatingAverage_lte?: InputMaybe<Scalars['Float']>;
  playerRatingAverage_gte?: InputMaybe<Scalars['Float']>;
  playerRatingAverage_lt?: InputMaybe<Scalars['Float']>;
  playerRatingAverage_gt?: InputMaybe<Scalars['Float']>;
  playerRatingAverage_defined?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerRank = {
  __typename?: 'PlayerRank';
  id: Scalars['ID'];
  title: Scalars['String'];
  rating: Scalars['Int'];
  fileId?: Maybe<Scalars['Int']>;
};

export type PlayerRankFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rating?: InputMaybe<Scalars['Int']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rating_lte?: InputMaybe<Scalars['Int']>;
  rating_gte?: InputMaybe<Scalars['Int']>;
  rating_lt?: InputMaybe<Scalars['Int']>;
  rating_gt?: InputMaybe<Scalars['Int']>;
  fileId?: InputMaybe<Scalars['Int']>;
  fileId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fileId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fileId_defined?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerRole = {
  __typename?: 'PlayerRole';
  id: Scalars['ID'];
  title: Scalars['String'];
  shortTitle: Scalars['String'];
  playerAggregatedRoleId: Scalars['String'];
};

export type PlayerRoleFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortTitle?: InputMaybe<Scalars['String']>;
  shortTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerAggregatedRoleId?: InputMaybe<Scalars['String']>;
  playerAggregatedRoleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerAggregatedRoleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Player = {
  __typename?: 'Player';
  id: Scalars['Int'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  patronymic?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  playerName?: Maybe<Scalars['String']>;
  number: Scalars['Int'];
  dateOfBirth: Scalars['Date'];
  age?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  createdByManagerId: Scalars['Int'];
  lastChangedByManagerId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  linkToProfile?: Maybe<Scalars['String']>;
  playerRating?: Maybe<Scalars['Int']>;
  photoId?: Maybe<Scalars['Int']>;
  playerRatingAverage?: Maybe<Scalars['Float']>;
  commonPlayerRatingGoalkeeper?: Maybe<Scalars['Int']>;
  commonPlayerRatingAttack?: Maybe<Scalars['Int']>;
  commonPlayerRatingMidfielder?: Maybe<Scalars['Int']>;
  commonPlayerRatingDefender?: Maybe<Scalars['Int']>;
  playedMatches?: Maybe<Scalars['Int']>;
  averagePlayerRatingGoalkeeper?: Maybe<Scalars['Float']>;
  averagePlayerRatingAttack?: Maybe<Scalars['Float']>;
  averagePlayerRatingMidfielder?: Maybe<Scalars['Float']>;
  averagePlayerRatingDefender?: Maybe<Scalars['Float']>;
  playerAggregatedRoleId?: Maybe<Scalars['String']>;
  playerTag?: Maybe<Scalars['String']>;
  progressivePassAccuracy?: Maybe<Scalars['Float']>;
  playerRankId?: Maybe<Scalars['String']>;
};

export type PlayerFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  firstname?: InputMaybe<Scalars['String']>;
  firstname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastname?: InputMaybe<Scalars['String']>;
  lastname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  patronymic?: InputMaybe<Scalars['String']>;
  patronymic_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  patronymic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  patronymic_defined?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerName?: InputMaybe<Scalars['String']>;
  playerName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerName_defined?: InputMaybe<Scalars['Boolean']>;
  number?: InputMaybe<Scalars['Int']>;
  number_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  number_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  number_lte?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
  number_lt?: InputMaybe<Scalars['Int']>;
  number_gt?: InputMaybe<Scalars['Int']>;
  dateOfBirth?: InputMaybe<Scalars['Date']>;
  dateOfBirth_lte?: InputMaybe<Scalars['Date']>;
  dateOfBirth_gte?: InputMaybe<Scalars['Date']>;
  dateOfBirth_lt?: InputMaybe<Scalars['Date']>;
  dateOfBirth_gt?: InputMaybe<Scalars['Date']>;
  age?: InputMaybe<Scalars['Int']>;
  age_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  age_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  age_lte?: InputMaybe<Scalars['Int']>;
  age_gte?: InputMaybe<Scalars['Int']>;
  age_lt?: InputMaybe<Scalars['Int']>;
  age_gt?: InputMaybe<Scalars['Int']>;
  age_defined?: InputMaybe<Scalars['Boolean']>;
  teamId?: InputMaybe<Scalars['Int']>;
  teamId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamId_defined?: InputMaybe<Scalars['Boolean']>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  createdByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  createdByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_defined?: InputMaybe<Scalars['Boolean']>;
  parentId?: InputMaybe<Scalars['Int']>;
  parentId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  parentId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  parentId_defined?: InputMaybe<Scalars['Boolean']>;
  linkToProfile?: InputMaybe<Scalars['String']>;
  linkToProfile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkToProfile_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkToProfile_defined?: InputMaybe<Scalars['Boolean']>;
  playerRating?: InputMaybe<Scalars['Int']>;
  playerRating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerRating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerRating_lte?: InputMaybe<Scalars['Int']>;
  playerRating_gte?: InputMaybe<Scalars['Int']>;
  playerRating_lt?: InputMaybe<Scalars['Int']>;
  playerRating_gt?: InputMaybe<Scalars['Int']>;
  playerRating_defined?: InputMaybe<Scalars['Boolean']>;
  photoId?: InputMaybe<Scalars['Int']>;
  photoId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  photoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  photoId_defined?: InputMaybe<Scalars['Boolean']>;
  playerRatingAverage?: InputMaybe<Scalars['Float']>;
  playerRatingAverage_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  playerRatingAverage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  playerRatingAverage_lte?: InputMaybe<Scalars['Float']>;
  playerRatingAverage_gte?: InputMaybe<Scalars['Float']>;
  playerRatingAverage_lt?: InputMaybe<Scalars['Float']>;
  playerRatingAverage_gt?: InputMaybe<Scalars['Float']>;
  playerRatingAverage_defined?: InputMaybe<Scalars['Boolean']>;
  commonPlayerRatingGoalkeeper?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingGoalkeeper_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  commonPlayerRatingGoalkeeper_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  commonPlayerRatingGoalkeeper_lte?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingGoalkeeper_gte?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingGoalkeeper_lt?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingGoalkeeper_gt?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingGoalkeeper_defined?: InputMaybe<Scalars['Boolean']>;
  commonPlayerRatingAttack?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingAttack_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  commonPlayerRatingAttack_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  commonPlayerRatingAttack_lte?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingAttack_gte?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingAttack_lt?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingAttack_gt?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingAttack_defined?: InputMaybe<Scalars['Boolean']>;
  commonPlayerRatingMidfielder?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingMidfielder_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  commonPlayerRatingMidfielder_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  commonPlayerRatingMidfielder_lte?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingMidfielder_gte?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingMidfielder_lt?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingMidfielder_gt?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingMidfielder_defined?: InputMaybe<Scalars['Boolean']>;
  commonPlayerRatingDefender?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingDefender_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  commonPlayerRatingDefender_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  commonPlayerRatingDefender_lte?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingDefender_gte?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingDefender_lt?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingDefender_gt?: InputMaybe<Scalars['Int']>;
  commonPlayerRatingDefender_defined?: InputMaybe<Scalars['Boolean']>;
  playedMatches?: InputMaybe<Scalars['Int']>;
  playedMatches_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playedMatches_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playedMatches_lte?: InputMaybe<Scalars['Int']>;
  playedMatches_gte?: InputMaybe<Scalars['Int']>;
  playedMatches_lt?: InputMaybe<Scalars['Int']>;
  playedMatches_gt?: InputMaybe<Scalars['Int']>;
  playedMatches_defined?: InputMaybe<Scalars['Boolean']>;
  averagePlayerRatingGoalkeeper?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingGoalkeeper_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  averagePlayerRatingGoalkeeper_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  averagePlayerRatingGoalkeeper_lte?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingGoalkeeper_gte?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingGoalkeeper_lt?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingGoalkeeper_gt?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingGoalkeeper_defined?: InputMaybe<Scalars['Boolean']>;
  averagePlayerRatingAttack?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingAttack_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  averagePlayerRatingAttack_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  averagePlayerRatingAttack_lte?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingAttack_gte?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingAttack_lt?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingAttack_gt?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingAttack_defined?: InputMaybe<Scalars['Boolean']>;
  averagePlayerRatingMidfielder?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingMidfielder_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  averagePlayerRatingMidfielder_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  averagePlayerRatingMidfielder_lte?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingMidfielder_gte?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingMidfielder_lt?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingMidfielder_gt?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingMidfielder_defined?: InputMaybe<Scalars['Boolean']>;
  averagePlayerRatingDefender?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingDefender_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  averagePlayerRatingDefender_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  averagePlayerRatingDefender_lte?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingDefender_gte?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingDefender_lt?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingDefender_gt?: InputMaybe<Scalars['Float']>;
  averagePlayerRatingDefender_defined?: InputMaybe<Scalars['Boolean']>;
  playerAggregatedRoleId?: InputMaybe<Scalars['String']>;
  playerAggregatedRoleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerAggregatedRoleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerAggregatedRoleId_defined?: InputMaybe<Scalars['Boolean']>;
  playerTag?: InputMaybe<Scalars['String']>;
  playerTag_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerTag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerTag_defined?: InputMaybe<Scalars['Boolean']>;
  progressivePassAccuracy?: InputMaybe<Scalars['Float']>;
  progressivePassAccuracy_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  progressivePassAccuracy_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  progressivePassAccuracy_lte?: InputMaybe<Scalars['Float']>;
  progressivePassAccuracy_gte?: InputMaybe<Scalars['Float']>;
  progressivePassAccuracy_lt?: InputMaybe<Scalars['Float']>;
  progressivePassAccuracy_gt?: InputMaybe<Scalars['Float']>;
  progressivePassAccuracy_defined?: InputMaybe<Scalars['Boolean']>;
  playerRankId?: InputMaybe<Scalars['String']>;
  playerRankId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerRankId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerRankId_defined?: InputMaybe<Scalars['Boolean']>;
};

export type PermissionsWithMeta = {
  __typename?: 'PermissionsWithMeta';
  permissionId: Scalars['String'];
  byRoles: Array<Scalars['String']>;
  directly: Scalars['Boolean'];
  byFullAccessRoles: Array<Scalars['String']>;
};

export type ReportForClub = {
  __typename?: 'ReportForClub';
  id: Scalars['Int'];
  title: Scalars['String'];
  teamId: Scalars['Int'];
  competitionId: Scalars['Int'];
  clubId: Scalars['Int'];
  lastUpdated?: Maybe<Scalars['Date']>;
  paid?: Maybe<Scalars['Boolean']>;
};

export type ReportForClubFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  teamId?: InputMaybe<Scalars['Int']>;
  teamId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  competitionId?: InputMaybe<Scalars['Int']>;
  competitionId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  competitionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  clubId?: InputMaybe<Scalars['Int']>;
  clubId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  clubId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastUpdated?: InputMaybe<Scalars['Date']>;
  lastUpdated_lte?: InputMaybe<Scalars['Date']>;
  lastUpdated_gte?: InputMaybe<Scalars['Date']>;
  lastUpdated_lt?: InputMaybe<Scalars['Date']>;
  lastUpdated_gt?: InputMaybe<Scalars['Date']>;
  lastUpdated_defined?: InputMaybe<Scalars['Boolean']>;
  paid?: InputMaybe<Scalars['Boolean']>;
  paid_defined?: InputMaybe<Scalars['Boolean']>;
};

export type ReportForOrganization = {
  __typename?: 'ReportForOrganization';
  id: Scalars['Int'];
  title: Scalars['String'];
  competitionId: Scalars['Int'];
  organizatorId: Scalars['Int'];
  lastUpdated?: Maybe<Scalars['Date']>;
  paid?: Maybe<Scalars['Boolean']>;
};

export type ReportForOrganizationFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  competitionId?: InputMaybe<Scalars['Int']>;
  competitionId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  competitionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  organizatorId?: InputMaybe<Scalars['Int']>;
  organizatorId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  organizatorId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastUpdated?: InputMaybe<Scalars['Date']>;
  lastUpdated_lte?: InputMaybe<Scalars['Date']>;
  lastUpdated_gte?: InputMaybe<Scalars['Date']>;
  lastUpdated_lt?: InputMaybe<Scalars['Date']>;
  lastUpdated_gt?: InputMaybe<Scalars['Date']>;
  lastUpdated_defined?: InputMaybe<Scalars['Boolean']>;
  paid?: InputMaybe<Scalars['Boolean']>;
  paid_defined?: InputMaybe<Scalars['Boolean']>;
};

export type ReportForParent = {
  __typename?: 'ReportForParent';
  id: Scalars['Int'];
  title: Scalars['String'];
  playerId: Scalars['Int'];
  matchId: Scalars['Int'];
  parentId: Scalars['Int'];
  lastUpdated?: Maybe<Scalars['Date']>;
  paid?: Maybe<Scalars['Boolean']>;
};

export type ReportForParentFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  playerId?: InputMaybe<Scalars['Int']>;
  playerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchId?: InputMaybe<Scalars['Int']>;
  matchId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  parentId?: InputMaybe<Scalars['Int']>;
  parentId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  parentId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastUpdated?: InputMaybe<Scalars['Date']>;
  lastUpdated_lte?: InputMaybe<Scalars['Date']>;
  lastUpdated_gte?: InputMaybe<Scalars['Date']>;
  lastUpdated_lt?: InputMaybe<Scalars['Date']>;
  lastUpdated_gt?: InputMaybe<Scalars['Date']>;
  lastUpdated_defined?: InputMaybe<Scalars['Boolean']>;
  paid?: InputMaybe<Scalars['Boolean']>;
  paid_defined?: InputMaybe<Scalars['Boolean']>;
};

export type ReportForTeam = {
  __typename?: 'ReportForTeam';
  id: Scalars['Int'];
  created: Scalars['DateTime'];
  title: Scalars['String'];
  teamForCompetitionId: Scalars['Int'];
  matchId: Scalars['Int'];
  clubId: Scalars['Int'];
  lastUpdated?: Maybe<Scalars['Date']>;
  paid?: Maybe<Scalars['Boolean']>;
  fileId?: Maybe<Scalars['Int']>;
  htmlFileId?: Maybe<Scalars['Int']>;
  jsonFileId?: Maybe<Scalars['Int']>;
  needRecalculate?: Maybe<Scalars['Boolean']>;
};

export type ReportForTeamFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  created_lte?: InputMaybe<Scalars['DateTime']>;
  created_gte?: InputMaybe<Scalars['DateTime']>;
  created_lt?: InputMaybe<Scalars['DateTime']>;
  created_gt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  teamForCompetitionId?: InputMaybe<Scalars['Int']>;
  teamForCompetitionId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamForCompetitionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchId?: InputMaybe<Scalars['Int']>;
  matchId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  clubId?: InputMaybe<Scalars['Int']>;
  clubId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  clubId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastUpdated?: InputMaybe<Scalars['Date']>;
  lastUpdated_lte?: InputMaybe<Scalars['Date']>;
  lastUpdated_gte?: InputMaybe<Scalars['Date']>;
  lastUpdated_lt?: InputMaybe<Scalars['Date']>;
  lastUpdated_gt?: InputMaybe<Scalars['Date']>;
  lastUpdated_defined?: InputMaybe<Scalars['Boolean']>;
  paid?: InputMaybe<Scalars['Boolean']>;
  paid_defined?: InputMaybe<Scalars['Boolean']>;
  fileId?: InputMaybe<Scalars['Int']>;
  fileId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fileId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fileId_defined?: InputMaybe<Scalars['Boolean']>;
  htmlFileId?: InputMaybe<Scalars['Int']>;
  htmlFileId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  htmlFileId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  htmlFileId_defined?: InputMaybe<Scalars['Boolean']>;
  jsonFileId?: InputMaybe<Scalars['Int']>;
  jsonFileId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  jsonFileId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  jsonFileId_defined?: InputMaybe<Scalars['Boolean']>;
  needRecalculate?: InputMaybe<Scalars['Boolean']>;
  needRecalculate_defined?: InputMaybe<Scalars['Boolean']>;
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
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_defined?: InputMaybe<Scalars['Boolean']>;
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
  roleId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  permissionId?: InputMaybe<Scalars['String']>;
  permissionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  permissionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FileRes = {
  __typename?: 'FileRes';
  id: Scalars['Int'];
  url: Scalars['String'];
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
  updated_defined?: InputMaybe<Scalars['Boolean']>;
  helloCount?: InputMaybe<Scalars['Int']>;
  helloCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  helloCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  helloCount_lte?: InputMaybe<Scalars['Int']>;
  helloCount_gte?: InputMaybe<Scalars['Int']>;
  helloCount_lt?: InputMaybe<Scalars['Int']>;
  helloCount_gt?: InputMaybe<Scalars['Int']>;
  helloCount_defined?: InputMaybe<Scalars['Boolean']>;
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
  comment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comment_defined?: InputMaybe<Scalars['Boolean']>;
};

export type TeamForCompetition = {
  __typename?: 'TeamForCompetition';
  id: Scalars['Int'];
  title: Scalars['String'];
  fullTitle?: Maybe<Scalars['String']>;
  teamId: Scalars['Int'];
  competitionId: Scalars['Int'];
};

export type TeamForCompetitionFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fullTitle?: InputMaybe<Scalars['String']>;
  fullTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fullTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fullTitle_defined?: InputMaybe<Scalars['Boolean']>;
  teamId?: InputMaybe<Scalars['Int']>;
  teamId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  competitionId?: InputMaybe<Scalars['Int']>;
  competitionId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  competitionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type TeamForPlayer = {
  __typename?: 'TeamForPlayer';
  id: Scalars['Int'];
  playerId: Scalars['Int'];
  teamId: Scalars['Int'];
};

export type TeamForPlayerFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  playerId?: InputMaybe<Scalars['Int']>;
  playerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  playerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamId?: InputMaybe<Scalars['Int']>;
  teamId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type TeamMatchList = {
  __typename?: 'TeamMatchList';
  id: Scalars['Int'];
  matchId: Scalars['Int'];
  teamForCompetitionId: Scalars['Int'];
};

export type TeamMatchListFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  matchId?: InputMaybe<Scalars['Int']>;
  matchId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamForCompetitionId?: InputMaybe<Scalars['Int']>;
  teamForCompetitionId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  teamForCompetitionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type TeamMatchReport = {
  __typename?: 'TeamMatchReport';
  id: Scalars['Int'];
  created: Scalars['DateTime'];
  matchId: Scalars['Int'];
  lastUpdated?: Maybe<Scalars['Date']>;
  fileId?: Maybe<Scalars['Int']>;
  needRecalculate?: Maybe<Scalars['Boolean']>;
};

export type TeamMatchReportFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  created_lte?: InputMaybe<Scalars['DateTime']>;
  created_gte?: InputMaybe<Scalars['DateTime']>;
  created_lt?: InputMaybe<Scalars['DateTime']>;
  created_gt?: InputMaybe<Scalars['DateTime']>;
  matchId?: InputMaybe<Scalars['Int']>;
  matchId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  matchId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastUpdated?: InputMaybe<Scalars['Date']>;
  lastUpdated_lte?: InputMaybe<Scalars['Date']>;
  lastUpdated_gte?: InputMaybe<Scalars['Date']>;
  lastUpdated_lt?: InputMaybe<Scalars['Date']>;
  lastUpdated_gt?: InputMaybe<Scalars['Date']>;
  lastUpdated_defined?: InputMaybe<Scalars['Boolean']>;
  fileId?: InputMaybe<Scalars['Int']>;
  fileId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fileId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fileId_defined?: InputMaybe<Scalars['Boolean']>;
  needRecalculate?: InputMaybe<Scalars['Boolean']>;
  needRecalculate_defined?: InputMaybe<Scalars['Boolean']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['Int'];
  title: Scalars['String'];
  dateOfBirthFrom: Scalars['Int'];
  dateOfBirthTo?: Maybe<Scalars['Int']>;
  createdByManagerId: Scalars['Int'];
  lastChangedByManagerId?: Maybe<Scalars['Int']>;
  clubId: Scalars['Int'];
  fileId?: Maybe<Scalars['Int']>;
};

export type TeamFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateOfBirthFrom?: InputMaybe<Scalars['Int']>;
  dateOfBirthFrom_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  dateOfBirthFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  dateOfBirthFrom_lte?: InputMaybe<Scalars['Int']>;
  dateOfBirthFrom_gte?: InputMaybe<Scalars['Int']>;
  dateOfBirthFrom_lt?: InputMaybe<Scalars['Int']>;
  dateOfBirthFrom_gt?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  dateOfBirthTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  dateOfBirthTo_lte?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo_gte?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo_lt?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo_gt?: InputMaybe<Scalars['Int']>;
  dateOfBirthTo_defined?: InputMaybe<Scalars['Boolean']>;
  createdByManagerId?: InputMaybe<Scalars['Int']>;
  createdByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  createdByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId?: InputMaybe<Scalars['Int']>;
  lastChangedByManagerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lastChangedByManagerId_defined?: InputMaybe<Scalars['Boolean']>;
  clubId?: InputMaybe<Scalars['Int']>;
  clubId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  clubId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fileId?: InputMaybe<Scalars['Int']>;
  fileId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fileId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fileId_defined?: InputMaybe<Scalars['Boolean']>;
};

export type TemplateStyle = {
  __typename?: 'TemplateStyle';
  id: Scalars['Int'];
  title: Scalars['String'];
  style: Scalars['String'];
};

export type TemplateStyleFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  style?: InputMaybe<Scalars['String']>;
  style_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  style_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_defined?: InputMaybe<Scalars['Boolean']>;
  utcOffset?: InputMaybe<Scalars['Int']>;
  utcOffset_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  utcOffset_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  utcOffset_lte?: InputMaybe<Scalars['Int']>;
  utcOffset_gte?: InputMaybe<Scalars['Int']>;
  utcOffset_lt?: InputMaybe<Scalars['Int']>;
  utcOffset_gt?: InputMaybe<Scalars['Int']>;
};

export type Unit = {
  __typename?: 'Unit';
  id: Scalars['Int'];
  title: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
};

export type UnitFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parentId?: InputMaybe<Scalars['Int']>;
  parentId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  parentId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  parentId_defined?: InputMaybe<Scalars['Boolean']>;
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
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_defined?: InputMaybe<Scalars['Boolean']>;
  lastname?: InputMaybe<Scalars['String']>;
  lastname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstname?: InputMaybe<Scalars['String']>;
  firstname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tenantId?: InputMaybe<Scalars['Int']>;
  tenantId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tenantId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tenantId_defined?: InputMaybe<Scalars['Boolean']>;
};

export type WscContact = {
  __typename?: 'WscContact';
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  wscUserId: Scalars['Int'];
};

export type WscContactFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  wscUserId?: InputMaybe<Scalars['Int']>;
  wscUserId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  wscUserId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type WscMessage = {
  __typename?: 'WscMessage';
  id: Scalars['Int'];
  externalId: Scalars['String'];
  dateTimeRaw: Scalars['String'];
  sender: Scalars['String'];
  content: Scalars['String'];
  wscUserId: Scalars['Int'];
  wscContactId: Scalars['Int'];
};

export type WscMessageFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  externalId?: InputMaybe<Scalars['String']>;
  externalId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateTimeRaw?: InputMaybe<Scalars['String']>;
  dateTimeRaw_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateTimeRaw_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sender?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sender_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  wscUserId?: InputMaybe<Scalars['Int']>;
  wscUserId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  wscUserId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  wscContactId?: InputMaybe<Scalars['Int']>;
  wscContactId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  wscContactId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type WscUser = {
  __typename?: 'WscUser';
  id: Scalars['Int'];
  login: Scalars['String'];
  passwordHash: Scalars['String'];
  accessToken?: Maybe<Scalars['String']>;
};

export type WscUserFilter = {
  q?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['Int']>;
  login?: InputMaybe<Scalars['String']>;
  login_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  login_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  accessToken?: InputMaybe<Scalars['String']>;
  accessToken_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  accessToken_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  accessToken_defined?: InputMaybe<Scalars['Boolean']>;
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
  IP: ResolverTypeWrapper<Scalars['IP']>;
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
  Cuid: ResolverTypeWrapper<Scalars['Cuid']>;
  SemVer: ResolverTypeWrapper<Scalars['SemVer']>;
  AdmRefreshToken: ResolverTypeWrapper<AdmRefreshToken>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AdmRefreshTokenFilter: AdmRefreshTokenFilter;
  ListMetadata: ResolverTypeWrapper<ListMetadata>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
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
  Club: ResolverTypeWrapper<Club>;
  ClubFilter: ClubFilter;
  Competition: ResolverTypeWrapper<Competition>;
  CompetitionFilter: CompetitionFilter;
  ConfigurationVariable: ResolverTypeWrapper<ConfigurationVariable>;
  ConfigurationVariableFilter: ConfigurationVariableFilter;
  Delegation: ResolverTypeWrapper<Delegation>;
  DelegationFilter: DelegationFilter;
  Entity: ResolverTypeWrapper<Entity>;
  EntityFilter: EntityFilter;
  EntitiesTracking: ResolverTypeWrapper<EntitiesTracking>;
  EntitiesTrackingFilter: EntitiesTrackingFilter;
  Event: ResolverTypeWrapper<Event>;
  EventFilter: EventFilter;
  EventTypeCategory: ResolverTypeWrapper<EventTypeCategory>;
  EventTypeCategoryFilter: EventTypeCategoryFilter;
  EventType: ResolverTypeWrapper<EventType>;
  EventTypeFilter: EventTypeFilter;
  File: ResolverTypeWrapper<File>;
  FileFilter: FileFilter;
  Glossary: ResolverTypeWrapper<Glossary>;
  GlossaryFilter: GlossaryFilter;
  EntityType: EntityType;
  HistoryOfPlayerRole: ResolverTypeWrapper<HistoryOfPlayerRole>;
  HistoryOfPlayerRoleFilter: HistoryOfPlayerRoleFilter;
  Language: ResolverTypeWrapper<Language>;
  LanguageFilter: LanguageFilter;
  MailingCampaign: ResolverTypeWrapper<MailingCampaign>;
  MailingCampaignFilter: MailingCampaignFilter;
  MailingCampaignStatus: ResolverTypeWrapper<MailingCampaignStatus>;
  MailingCampaignStatusFilter: MailingCampaignStatusFilter;
  QuantityPerStatus: ResolverTypeWrapper<QuantityPerStatus>;
  MailingMessage: ResolverTypeWrapper<MailingMessage>;
  MailingMessageFilter: MailingMessageFilter;
  MailingMessageStatus: ResolverTypeWrapper<MailingMessageStatus>;
  MailingMessageStatusFilter: MailingMessageStatusFilter;
  MailingType: ResolverTypeWrapper<MailingType>;
  MailingTypeFilter: MailingTypeFilter;
  ManagerLogin: ResolverTypeWrapper<ManagerLogin>;
  ManagerLoginFilter: ManagerLoginFilter;
  ManagerLoginType: ResolverTypeWrapper<ManagerLoginType>;
  ManagerLoginTypeFilter: ManagerLoginTypeFilter;
  Manager: ResolverTypeWrapper<Manager>;
  ManagerFilter: ManagerFilter;
  ManagersToPermission: ResolverTypeWrapper<ManagersToPermission>;
  ManagersToPermissionFilter: ManagersToPermissionFilter;
  ManagersToRole: ResolverTypeWrapper<ManagersToRole>;
  ManagersToRoleFilter: ManagersToRoleFilter;
  Match: ResolverTypeWrapper<Match>;
  MatchFilter: MatchFilter;
  MatchPeriodMarkup: ResolverTypeWrapper<MatchPeriodMarkup>;
  MatchPeriodMarkupFilter: MatchPeriodMarkupFilter;
  MatchRequest: ResolverTypeWrapper<MatchRequest>;
  MatchRequestFilter: MatchRequestFilter;
  MatchStatus: ResolverTypeWrapper<MatchStatus>;
  MatchStatusFilter: MatchStatusFilter;
  MatchVideo: ResolverTypeWrapper<MatchVideo>;
  MatchVideoFilter: MatchVideoFilter;
  MessageTemplateLangVariant: ResolverTypeWrapper<MessageTemplateLangVariant>;
  MessageTemplateLangVariantFilter: MessageTemplateLangVariantFilter;
  MessageTemplate: ResolverTypeWrapper<MessageTemplate>;
  MessageTemplateFilter: MessageTemplateFilter;
  MessageType: ResolverTypeWrapper<MessageType>;
  MessageTypeFilter: MessageTypeFilter;
  Organizator: ResolverTypeWrapper<Organizator>;
  OrganizatorFilter: OrganizatorFilter;
  Parent: ResolverTypeWrapper<Parent>;
  ParentFilter: ParentFilter;
  PeriodType: ResolverTypeWrapper<PeriodType>;
  PeriodTypeFilter: PeriodTypeFilter;
  Permission: ResolverTypeWrapper<Permission>;
  PermissionFilter: PermissionFilter;
  PlayerAggregatedRole: ResolverTypeWrapper<PlayerAggregatedRole>;
  PlayerAggregatedRoleFilter: PlayerAggregatedRoleFilter;
  PlayerCompetitionRating: ResolverTypeWrapper<PlayerCompetitionRating>;
  PlayerCompetitionRatingFilter: PlayerCompetitionRatingFilter;
  PlayerForCompetitionTeam: ResolverTypeWrapper<PlayerForCompetitionTeam>;
  PlayerForCompetitionTeamFilter: PlayerForCompetitionTeamFilter;
  PlayerForMatchRequest: ResolverTypeWrapper<PlayerForMatchRequest>;
  PlayerForMatchRequestFilter: PlayerForMatchRequestFilter;
  PlayerForTeamMatchList: ResolverTypeWrapper<PlayerForTeamMatchList>;
  PlayerForTeamMatchListFilter: PlayerForTeamMatchListFilter;
  PlayerMatchRating: ResolverTypeWrapper<PlayerMatchRating>;
  PlayerMatchRatingFilter: PlayerMatchRatingFilter;
  PlayerRank: ResolverTypeWrapper<PlayerRank>;
  PlayerRankFilter: PlayerRankFilter;
  PlayerRole: ResolverTypeWrapper<PlayerRole>;
  PlayerRoleFilter: PlayerRoleFilter;
  Player: ResolverTypeWrapper<Player>;
  PlayerFilter: PlayerFilter;
  PermissionsWithMeta: ResolverTypeWrapper<PermissionsWithMeta>;
  ReportForClub: ResolverTypeWrapper<ReportForClub>;
  ReportForClubFilter: ReportForClubFilter;
  ReportForOrganization: ResolverTypeWrapper<ReportForOrganization>;
  ReportForOrganizationFilter: ReportForOrganizationFilter;
  ReportForParent: ResolverTypeWrapper<ReportForParent>;
  ReportForParentFilter: ReportForParentFilter;
  ReportForTeam: ResolverTypeWrapper<ReportForTeam>;
  ReportForTeamFilter: ReportForTeamFilter;
  Role: ResolverTypeWrapper<Role>;
  RoleFilter: RoleFilter;
  RolesToPermission: ResolverTypeWrapper<RolesToPermission>;
  RolesToPermissionFilter: RolesToPermissionFilter;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  FileRes: ResolverTypeWrapper<FileRes>;
  Stat: ResolverTypeWrapper<Stat>;
  StatFilter: StatFilter;
  Tag: ResolverTypeWrapper<Tag>;
  TagFilter: TagFilter;
  TeamForCompetition: ResolverTypeWrapper<TeamForCompetition>;
  TeamForCompetitionFilter: TeamForCompetitionFilter;
  TeamForPlayer: ResolverTypeWrapper<TeamForPlayer>;
  TeamForPlayerFilter: TeamForPlayerFilter;
  TeamMatchList: ResolverTypeWrapper<TeamMatchList>;
  TeamMatchListFilter: TeamMatchListFilter;
  TeamMatchReport: ResolverTypeWrapper<TeamMatchReport>;
  TeamMatchReportFilter: TeamMatchReportFilter;
  Team: ResolverTypeWrapper<Team>;
  TeamFilter: TeamFilter;
  TemplateStyle: ResolverTypeWrapper<TemplateStyle>;
  TemplateStyleFilter: TemplateStyleFilter;
  Tenant: ResolverTypeWrapper<Tenant>;
  TenantFilter: TenantFilter;
  Unit: ResolverTypeWrapper<Unit>;
  UnitFilter: UnitFilter;
  User: ResolverTypeWrapper<User>;
  UserFilter: UserFilter;
  WscContact: ResolverTypeWrapper<WscContact>;
  WscContactFilter: WscContactFilter;
  WscMessage: ResolverTypeWrapper<WscMessage>;
  WscMessageFilter: WscMessageFilter;
  WscUser: ResolverTypeWrapper<WscUser>;
  WscUserFilter: WscUserFilter;
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
  IP: Scalars['IP'];
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
  Cuid: Scalars['Cuid'];
  SemVer: Scalars['SemVer'];
  AdmRefreshToken: AdmRefreshToken;
  Int: Scalars['Int'];
  String: Scalars['String'];
  AdmRefreshTokenFilter: AdmRefreshTokenFilter;
  ListMetadata: ListMetadata;
  Query: {};
  ID: Scalars['ID'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
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
  Club: Club;
  ClubFilter: ClubFilter;
  Competition: Competition;
  CompetitionFilter: CompetitionFilter;
  ConfigurationVariable: ConfigurationVariable;
  ConfigurationVariableFilter: ConfigurationVariableFilter;
  Delegation: Delegation;
  DelegationFilter: DelegationFilter;
  Entity: Entity;
  EntityFilter: EntityFilter;
  EntitiesTracking: EntitiesTracking;
  EntitiesTrackingFilter: EntitiesTrackingFilter;
  Event: Event;
  EventFilter: EventFilter;
  EventTypeCategory: EventTypeCategory;
  EventTypeCategoryFilter: EventTypeCategoryFilter;
  EventType: EventType;
  EventTypeFilter: EventTypeFilter;
  File: File;
  FileFilter: FileFilter;
  Glossary: Glossary;
  GlossaryFilter: GlossaryFilter;
  HistoryOfPlayerRole: HistoryOfPlayerRole;
  HistoryOfPlayerRoleFilter: HistoryOfPlayerRoleFilter;
  Language: Language;
  LanguageFilter: LanguageFilter;
  MailingCampaign: MailingCampaign;
  MailingCampaignFilter: MailingCampaignFilter;
  MailingCampaignStatus: MailingCampaignStatus;
  MailingCampaignStatusFilter: MailingCampaignStatusFilter;
  QuantityPerStatus: QuantityPerStatus;
  MailingMessage: MailingMessage;
  MailingMessageFilter: MailingMessageFilter;
  MailingMessageStatus: MailingMessageStatus;
  MailingMessageStatusFilter: MailingMessageStatusFilter;
  MailingType: MailingType;
  MailingTypeFilter: MailingTypeFilter;
  ManagerLogin: ManagerLogin;
  ManagerLoginFilter: ManagerLoginFilter;
  ManagerLoginType: ManagerLoginType;
  ManagerLoginTypeFilter: ManagerLoginTypeFilter;
  Manager: Manager;
  ManagerFilter: ManagerFilter;
  ManagersToPermission: ManagersToPermission;
  ManagersToPermissionFilter: ManagersToPermissionFilter;
  ManagersToRole: ManagersToRole;
  ManagersToRoleFilter: ManagersToRoleFilter;
  Match: Match;
  MatchFilter: MatchFilter;
  MatchPeriodMarkup: MatchPeriodMarkup;
  MatchPeriodMarkupFilter: MatchPeriodMarkupFilter;
  MatchRequest: MatchRequest;
  MatchRequestFilter: MatchRequestFilter;
  MatchStatus: MatchStatus;
  MatchStatusFilter: MatchStatusFilter;
  MatchVideo: MatchVideo;
  MatchVideoFilter: MatchVideoFilter;
  MessageTemplateLangVariant: MessageTemplateLangVariant;
  MessageTemplateLangVariantFilter: MessageTemplateLangVariantFilter;
  MessageTemplate: MessageTemplate;
  MessageTemplateFilter: MessageTemplateFilter;
  MessageType: MessageType;
  MessageTypeFilter: MessageTypeFilter;
  Organizator: Organizator;
  OrganizatorFilter: OrganizatorFilter;
  Parent: Parent;
  ParentFilter: ParentFilter;
  PeriodType: PeriodType;
  PeriodTypeFilter: PeriodTypeFilter;
  Permission: Permission;
  PermissionFilter: PermissionFilter;
  PlayerAggregatedRole: PlayerAggregatedRole;
  PlayerAggregatedRoleFilter: PlayerAggregatedRoleFilter;
  PlayerCompetitionRating: PlayerCompetitionRating;
  PlayerCompetitionRatingFilter: PlayerCompetitionRatingFilter;
  PlayerForCompetitionTeam: PlayerForCompetitionTeam;
  PlayerForCompetitionTeamFilter: PlayerForCompetitionTeamFilter;
  PlayerForMatchRequest: PlayerForMatchRequest;
  PlayerForMatchRequestFilter: PlayerForMatchRequestFilter;
  PlayerForTeamMatchList: PlayerForTeamMatchList;
  PlayerForTeamMatchListFilter: PlayerForTeamMatchListFilter;
  PlayerMatchRating: PlayerMatchRating;
  PlayerMatchRatingFilter: PlayerMatchRatingFilter;
  PlayerRank: PlayerRank;
  PlayerRankFilter: PlayerRankFilter;
  PlayerRole: PlayerRole;
  PlayerRoleFilter: PlayerRoleFilter;
  Player: Player;
  PlayerFilter: PlayerFilter;
  PermissionsWithMeta: PermissionsWithMeta;
  ReportForClub: ReportForClub;
  ReportForClubFilter: ReportForClubFilter;
  ReportForOrganization: ReportForOrganization;
  ReportForOrganizationFilter: ReportForOrganizationFilter;
  ReportForParent: ReportForParent;
  ReportForParentFilter: ReportForParentFilter;
  ReportForTeam: ReportForTeam;
  ReportForTeamFilter: ReportForTeamFilter;
  Role: Role;
  RoleFilter: RoleFilter;
  RolesToPermission: RolesToPermission;
  RolesToPermissionFilter: RolesToPermissionFilter;
  Upload: Scalars['Upload'];
  FileRes: FileRes;
  Stat: Stat;
  StatFilter: StatFilter;
  Tag: Tag;
  TagFilter: TagFilter;
  TeamForCompetition: TeamForCompetition;
  TeamForCompetitionFilter: TeamForCompetitionFilter;
  TeamForPlayer: TeamForPlayer;
  TeamForPlayerFilter: TeamForPlayerFilter;
  TeamMatchList: TeamMatchList;
  TeamMatchListFilter: TeamMatchListFilter;
  TeamMatchReport: TeamMatchReport;
  TeamMatchReportFilter: TeamMatchReportFilter;
  Team: Team;
  TeamFilter: TeamFilter;
  TemplateStyle: TemplateStyle;
  TemplateStyleFilter: TemplateStyleFilter;
  Tenant: Tenant;
  TenantFilter: TenantFilter;
  Unit: Unit;
  UnitFilter: UnitFilter;
  User: User;
  UserFilter: UserFilter;
  WscContact: WscContact;
  WscContactFilter: WscContactFilter;
  WscMessage: WscMessage;
  WscMessageFilter: WscMessageFilter;
  WscUser: WscUser;
  WscUserFilter: WscUserFilter;
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

export interface IpScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IP'], any> {
  name: 'IP';
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

export interface CuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cuid'], any> {
  name: 'Cuid';
}

export interface SemVerScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SemVer'], any> {
  name: 'SemVer';
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
  Club?: Resolver<Maybe<ResolversTypes['Club']>, ParentType, ContextType, RequireFields<QueryClubArgs, 'id'>>;
  allClubs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Club']>>>, ParentType, ContextType, Partial<QueryAllClubsArgs>>;
  _allClubsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllClubsMetaArgs>>;
  Competition?: Resolver<Maybe<ResolversTypes['Competition']>, ParentType, ContextType, RequireFields<QueryCompetitionArgs, 'id'>>;
  allCompetitions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Competition']>>>, ParentType, ContextType, Partial<QueryAllCompetitionsArgs>>;
  _allCompetitionsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllCompetitionsMetaArgs>>;
  ConfigurationVariable?: Resolver<Maybe<ResolversTypes['ConfigurationVariable']>, ParentType, ContextType, RequireFields<QueryConfigurationVariableArgs, 'id'>>;
  allConfigurationVariables?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigurationVariable']>>>, ParentType, ContextType, Partial<QueryAllConfigurationVariablesArgs>>;
  _allConfigurationVariablesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllConfigurationVariablesMetaArgs>>;
  Delegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<QueryDelegationArgs, 'id'>>;
  allDelegations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Delegation']>>>, ParentType, ContextType, Partial<QueryAllDelegationsArgs>>;
  _allDelegationsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllDelegationsMetaArgs>>;
  Entity?: Resolver<Maybe<ResolversTypes['Entity']>, ParentType, ContextType, RequireFields<QueryEntityArgs, 'id'>>;
  allEntities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entity']>>>, ParentType, ContextType, Partial<QueryAllEntitiesArgs>>;
  _allEntitiesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllEntitiesMetaArgs>>;
  EntitiesTracking?: Resolver<Maybe<ResolversTypes['EntitiesTracking']>, ParentType, ContextType, RequireFields<QueryEntitiesTrackingArgs, 'id'>>;
  allEntitiesTrackings?: Resolver<Maybe<Array<Maybe<ResolversTypes['EntitiesTracking']>>>, ParentType, ContextType, Partial<QueryAllEntitiesTrackingsArgs>>;
  _allEntitiesTrackingsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllEntitiesTrackingsMetaArgs>>;
  Event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'id'>>;
  allEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType, Partial<QueryAllEventsArgs>>;
  _allEventsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllEventsMetaArgs>>;
  EventTypeCategory?: Resolver<Maybe<ResolversTypes['EventTypeCategory']>, ParentType, ContextType, RequireFields<QueryEventTypeCategoryArgs, 'id'>>;
  allEventTypeCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventTypeCategory']>>>, ParentType, ContextType, Partial<QueryAllEventTypeCategoriesArgs>>;
  _allEventTypeCategoriesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllEventTypeCategoriesMetaArgs>>;
  EventType?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType, RequireFields<QueryEventTypeArgs, 'id'>>;
  allEventTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventType']>>>, ParentType, ContextType, Partial<QueryAllEventTypesArgs>>;
  _allEventTypesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllEventTypesMetaArgs>>;
  File?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<QueryFileArgs, 'id'>>;
  allFiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['File']>>>, ParentType, ContextType, Partial<QueryAllFilesArgs>>;
  _allFilesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllFilesMetaArgs>>;
  Glossary?: Resolver<Maybe<ResolversTypes['Glossary']>, ParentType, ContextType, RequireFields<QueryGlossaryArgs, 'id'>>;
  allGlossaries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Glossary']>>>, ParentType, ContextType, Partial<QueryAllGlossariesArgs>>;
  _allGlossariesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllGlossariesMetaArgs>>;
  getHelp?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryGetHelpArgs, 'entityType'>>;
  HistoryOfPlayerRole?: Resolver<Maybe<ResolversTypes['HistoryOfPlayerRole']>, ParentType, ContextType, RequireFields<QueryHistoryOfPlayerRoleArgs, 'id'>>;
  allHistoryOfPlayerRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['HistoryOfPlayerRole']>>>, ParentType, ContextType, Partial<QueryAllHistoryOfPlayerRolesArgs>>;
  _allHistoryOfPlayerRolesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllHistoryOfPlayerRolesMetaArgs>>;
  Language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<QueryLanguageArgs, 'id'>>;
  allLanguages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Language']>>>, ParentType, ContextType, Partial<QueryAllLanguagesArgs>>;
  _allLanguagesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllLanguagesMetaArgs>>;
  MailingCampaign?: Resolver<Maybe<ResolversTypes['MailingCampaign']>, ParentType, ContextType, RequireFields<QueryMailingCampaignArgs, 'id'>>;
  allMailingCampaigns?: Resolver<Maybe<Array<Maybe<ResolversTypes['MailingCampaign']>>>, ParentType, ContextType, Partial<QueryAllMailingCampaignsArgs>>;
  _allMailingCampaignsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMailingCampaignsMetaArgs>>;
  MailingCampaignStatus?: Resolver<Maybe<ResolversTypes['MailingCampaignStatus']>, ParentType, ContextType, RequireFields<QueryMailingCampaignStatusArgs, 'id'>>;
  allMailingCampaignStatuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['MailingCampaignStatus']>>>, ParentType, ContextType, Partial<QueryAllMailingCampaignStatusesArgs>>;
  _allMailingCampaignStatusesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMailingCampaignStatusesMetaArgs>>;
  getMessageQuantityPerStatus?: Resolver<ResolversTypes['QuantityPerStatus'], ParentType, ContextType, RequireFields<QueryGetMessageQuantityPerStatusArgs, 'mailingCampaignId'>>;
  MailingMessage?: Resolver<Maybe<ResolversTypes['MailingMessage']>, ParentType, ContextType, RequireFields<QueryMailingMessageArgs, 'id'>>;
  allMailingMessages?: Resolver<Maybe<Array<Maybe<ResolversTypes['MailingMessage']>>>, ParentType, ContextType, Partial<QueryAllMailingMessagesArgs>>;
  _allMailingMessagesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMailingMessagesMetaArgs>>;
  MailingMessageStatus?: Resolver<Maybe<ResolversTypes['MailingMessageStatus']>, ParentType, ContextType, RequireFields<QueryMailingMessageStatusArgs, 'id'>>;
  allMailingMessageStatuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['MailingMessageStatus']>>>, ParentType, ContextType, Partial<QueryAllMailingMessageStatusesArgs>>;
  _allMailingMessageStatusesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMailingMessageStatusesMetaArgs>>;
  MailingType?: Resolver<Maybe<ResolversTypes['MailingType']>, ParentType, ContextType, RequireFields<QueryMailingTypeArgs, 'id'>>;
  allMailingTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['MailingType']>>>, ParentType, ContextType, Partial<QueryAllMailingTypesArgs>>;
  _allMailingTypesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMailingTypesMetaArgs>>;
  ManagerLogin?: Resolver<Maybe<ResolversTypes['ManagerLogin']>, ParentType, ContextType, RequireFields<QueryManagerLoginArgs, 'id'>>;
  allManagerLogins?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManagerLogin']>>>, ParentType, ContextType, Partial<QueryAllManagerLoginsArgs>>;
  _allManagerLoginsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllManagerLoginsMetaArgs>>;
  ManagerLoginType?: Resolver<Maybe<ResolversTypes['ManagerLoginType']>, ParentType, ContextType, RequireFields<QueryManagerLoginTypeArgs, 'id'>>;
  allManagerLoginTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManagerLoginType']>>>, ParentType, ContextType, Partial<QueryAllManagerLoginTypesArgs>>;
  _allManagerLoginTypesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllManagerLoginTypesMetaArgs>>;
  Manager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<QueryManagerArgs, 'id'>>;
  allManagers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Manager']>>>, ParentType, ContextType, Partial<QueryAllManagersArgs>>;
  _allManagersMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllManagersMetaArgs>>;
  ManagersToPermission?: Resolver<Maybe<ResolversTypes['ManagersToPermission']>, ParentType, ContextType, RequireFields<QueryManagersToPermissionArgs, 'id'>>;
  allManagersToPermissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManagersToPermission']>>>, ParentType, ContextType, Partial<QueryAllManagersToPermissionsArgs>>;
  _allManagersToPermissionsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllManagersToPermissionsMetaArgs>>;
  ManagersToRole?: Resolver<Maybe<ResolversTypes['ManagersToRole']>, ParentType, ContextType, RequireFields<QueryManagersToRoleArgs, 'id'>>;
  allManagersToRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManagersToRole']>>>, ParentType, ContextType, Partial<QueryAllManagersToRolesArgs>>;
  _allManagersToRolesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllManagersToRolesMetaArgs>>;
  Match?: Resolver<Maybe<ResolversTypes['Match']>, ParentType, ContextType, RequireFields<QueryMatchArgs, 'id'>>;
  allMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Match']>>>, ParentType, ContextType, Partial<QueryAllMatchesArgs>>;
  _allMatchesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMatchesMetaArgs>>;
  MatchPeriodMarkup?: Resolver<Maybe<ResolversTypes['MatchPeriodMarkup']>, ParentType, ContextType, RequireFields<QueryMatchPeriodMarkupArgs, 'id'>>;
  allMatchPeriodMarkups?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPeriodMarkup']>>>, ParentType, ContextType, Partial<QueryAllMatchPeriodMarkupsArgs>>;
  _allMatchPeriodMarkupsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMatchPeriodMarkupsMetaArgs>>;
  MatchRequest?: Resolver<Maybe<ResolversTypes['MatchRequest']>, ParentType, ContextType, RequireFields<QueryMatchRequestArgs, 'id'>>;
  allMatchRequests?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchRequest']>>>, ParentType, ContextType, Partial<QueryAllMatchRequestsArgs>>;
  _allMatchRequestsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMatchRequestsMetaArgs>>;
  MatchStatus?: Resolver<Maybe<ResolversTypes['MatchStatus']>, ParentType, ContextType, RequireFields<QueryMatchStatusArgs, 'id'>>;
  allMatchStatuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchStatus']>>>, ParentType, ContextType, Partial<QueryAllMatchStatusesArgs>>;
  _allMatchStatusesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMatchStatusesMetaArgs>>;
  MatchVideo?: Resolver<Maybe<ResolversTypes['MatchVideo']>, ParentType, ContextType, RequireFields<QueryMatchVideoArgs, 'id'>>;
  allMatchVideos?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchVideo']>>>, ParentType, ContextType, Partial<QueryAllMatchVideosArgs>>;
  _allMatchVideosMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMatchVideosMetaArgs>>;
  MessageTemplateLangVariant?: Resolver<Maybe<ResolversTypes['MessageTemplateLangVariant']>, ParentType, ContextType, RequireFields<QueryMessageTemplateLangVariantArgs, 'id'>>;
  allMessageTemplateLangVariants?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageTemplateLangVariant']>>>, ParentType, ContextType, Partial<QueryAllMessageTemplateLangVariantsArgs>>;
  _allMessageTemplateLangVariantsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMessageTemplateLangVariantsMetaArgs>>;
  MessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<QueryMessageTemplateArgs, 'id'>>;
  allMessageTemplates?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageTemplate']>>>, ParentType, ContextType, Partial<QueryAllMessageTemplatesArgs>>;
  _allMessageTemplatesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMessageTemplatesMetaArgs>>;
  MessageType?: Resolver<Maybe<ResolversTypes['MessageType']>, ParentType, ContextType, RequireFields<QueryMessageTypeArgs, 'id'>>;
  allMessageTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageType']>>>, ParentType, ContextType, Partial<QueryAllMessageTypesArgs>>;
  _allMessageTypesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllMessageTypesMetaArgs>>;
  Meta?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  Organizator?: Resolver<Maybe<ResolversTypes['Organizator']>, ParentType, ContextType, RequireFields<QueryOrganizatorArgs, 'id'>>;
  allOrganizators?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organizator']>>>, ParentType, ContextType, Partial<QueryAllOrganizatorsArgs>>;
  _allOrganizatorsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllOrganizatorsMetaArgs>>;
  Parent?: Resolver<Maybe<ResolversTypes['Parent']>, ParentType, ContextType, RequireFields<QueryParentArgs, 'id'>>;
  allParents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Parent']>>>, ParentType, ContextType, Partial<QueryAllParentsArgs>>;
  _allParentsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllParentsMetaArgs>>;
  PeriodType?: Resolver<Maybe<ResolversTypes['PeriodType']>, ParentType, ContextType, RequireFields<QueryPeriodTypeArgs, 'id'>>;
  allPeriodTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['PeriodType']>>>, ParentType, ContextType, Partial<QueryAllPeriodTypesArgs>>;
  _allPeriodTypesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllPeriodTypesMetaArgs>>;
  Permission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<QueryPermissionArgs, 'id'>>;
  allPermissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Permission']>>>, ParentType, ContextType, Partial<QueryAllPermissionsArgs>>;
  _allPermissionsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllPermissionsMetaArgs>>;
  PlayerAggregatedRole?: Resolver<Maybe<ResolversTypes['PlayerAggregatedRole']>, ParentType, ContextType, RequireFields<QueryPlayerAggregatedRoleArgs, 'id'>>;
  allPlayerAggregatedRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerAggregatedRole']>>>, ParentType, ContextType, Partial<QueryAllPlayerAggregatedRolesArgs>>;
  _allPlayerAggregatedRolesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllPlayerAggregatedRolesMetaArgs>>;
  PlayerCompetitionRating?: Resolver<Maybe<ResolversTypes['PlayerCompetitionRating']>, ParentType, ContextType, RequireFields<QueryPlayerCompetitionRatingArgs, 'id'>>;
  allPlayerCompetitionRatings?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerCompetitionRating']>>>, ParentType, ContextType, Partial<QueryAllPlayerCompetitionRatingsArgs>>;
  _allPlayerCompetitionRatingsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllPlayerCompetitionRatingsMetaArgs>>;
  PlayerForCompetitionTeam?: Resolver<Maybe<ResolversTypes['PlayerForCompetitionTeam']>, ParentType, ContextType, RequireFields<QueryPlayerForCompetitionTeamArgs, 'id'>>;
  allPlayerForCompetitionTeams?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerForCompetitionTeam']>>>, ParentType, ContextType, Partial<QueryAllPlayerForCompetitionTeamsArgs>>;
  _allPlayerForCompetitionTeamsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllPlayerForCompetitionTeamsMetaArgs>>;
  PlayerForMatchRequest?: Resolver<Maybe<ResolversTypes['PlayerForMatchRequest']>, ParentType, ContextType, RequireFields<QueryPlayerForMatchRequestArgs, 'id'>>;
  allPlayerForMatchRequests?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerForMatchRequest']>>>, ParentType, ContextType, Partial<QueryAllPlayerForMatchRequestsArgs>>;
  _allPlayerForMatchRequestsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllPlayerForMatchRequestsMetaArgs>>;
  PlayerForTeamMatchList?: Resolver<Maybe<ResolversTypes['PlayerForTeamMatchList']>, ParentType, ContextType, RequireFields<QueryPlayerForTeamMatchListArgs, 'id'>>;
  allPlayerForTeamMatchLists?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerForTeamMatchList']>>>, ParentType, ContextType, Partial<QueryAllPlayerForTeamMatchListsArgs>>;
  _allPlayerForTeamMatchListsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllPlayerForTeamMatchListsMetaArgs>>;
  PlayerMatchRating?: Resolver<Maybe<ResolversTypes['PlayerMatchRating']>, ParentType, ContextType, RequireFields<QueryPlayerMatchRatingArgs, 'id'>>;
  allPlayerMatchRatings?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerMatchRating']>>>, ParentType, ContextType, Partial<QueryAllPlayerMatchRatingsArgs>>;
  _allPlayerMatchRatingsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllPlayerMatchRatingsMetaArgs>>;
  PlayerRank?: Resolver<Maybe<ResolversTypes['PlayerRank']>, ParentType, ContextType, RequireFields<QueryPlayerRankArgs, 'id'>>;
  allPlayerRanks?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerRank']>>>, ParentType, ContextType, Partial<QueryAllPlayerRanksArgs>>;
  _allPlayerRanksMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllPlayerRanksMetaArgs>>;
  PlayerRole?: Resolver<Maybe<ResolversTypes['PlayerRole']>, ParentType, ContextType, RequireFields<QueryPlayerRoleArgs, 'id'>>;
  allPlayerRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerRole']>>>, ParentType, ContextType, Partial<QueryAllPlayerRolesArgs>>;
  _allPlayerRolesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllPlayerRolesMetaArgs>>;
  Player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType, RequireFields<QueryPlayerArgs, 'id'>>;
  allPlayers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType, Partial<QueryAllPlayersArgs>>;
  _allPlayersMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllPlayersMetaArgs>>;
  getPermissions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  getPermissionsWithMeta?: Resolver<Array<ResolversTypes['PermissionsWithMeta']>, ParentType, ContextType>;
  getPermissionsOfManagerWithMeta?: Resolver<Array<ResolversTypes['PermissionsWithMeta']>, ParentType, ContextType, RequireFields<QueryGetPermissionsOfManagerWithMetaArgs, 'managerId'>>;
  getRoles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  getRolesOfManager?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetRolesOfManagerArgs, 'managerId'>>;
  ReportForClub?: Resolver<Maybe<ResolversTypes['ReportForClub']>, ParentType, ContextType, RequireFields<QueryReportForClubArgs, 'id'>>;
  allReportForClubs?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReportForClub']>>>, ParentType, ContextType, Partial<QueryAllReportForClubsArgs>>;
  _allReportForClubsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllReportForClubsMetaArgs>>;
  ReportForOrganization?: Resolver<Maybe<ResolversTypes['ReportForOrganization']>, ParentType, ContextType, RequireFields<QueryReportForOrganizationArgs, 'id'>>;
  allReportForOrganizations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReportForOrganization']>>>, ParentType, ContextType, Partial<QueryAllReportForOrganizationsArgs>>;
  _allReportForOrganizationsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllReportForOrganizationsMetaArgs>>;
  ReportForParent?: Resolver<Maybe<ResolversTypes['ReportForParent']>, ParentType, ContextType, RequireFields<QueryReportForParentArgs, 'id'>>;
  allReportForParents?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReportForParent']>>>, ParentType, ContextType, Partial<QueryAllReportForParentsArgs>>;
  _allReportForParentsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllReportForParentsMetaArgs>>;
  ReportForTeam?: Resolver<Maybe<ResolversTypes['ReportForTeam']>, ParentType, ContextType, RequireFields<QueryReportForTeamArgs, 'id'>>;
  allReportForTeams?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReportForTeam']>>>, ParentType, ContextType, Partial<QueryAllReportForTeamsArgs>>;
  _allReportForTeamsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllReportForTeamsMetaArgs>>;
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
  TeamForCompetition?: Resolver<Maybe<ResolversTypes['TeamForCompetition']>, ParentType, ContextType, RequireFields<QueryTeamForCompetitionArgs, 'id'>>;
  allTeamForCompetitions?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamForCompetition']>>>, ParentType, ContextType, Partial<QueryAllTeamForCompetitionsArgs>>;
  _allTeamForCompetitionsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllTeamForCompetitionsMetaArgs>>;
  TeamForPlayer?: Resolver<Maybe<ResolversTypes['TeamForPlayer']>, ParentType, ContextType, RequireFields<QueryTeamForPlayerArgs, 'id'>>;
  allTeamForPlayers?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamForPlayer']>>>, ParentType, ContextType, Partial<QueryAllTeamForPlayersArgs>>;
  _allTeamForPlayersMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllTeamForPlayersMetaArgs>>;
  TeamMatchList?: Resolver<Maybe<ResolversTypes['TeamMatchList']>, ParentType, ContextType, RequireFields<QueryTeamMatchListArgs, 'id'>>;
  allTeamMatchLists?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamMatchList']>>>, ParentType, ContextType, Partial<QueryAllTeamMatchListsArgs>>;
  _allTeamMatchListsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllTeamMatchListsMetaArgs>>;
  TeamMatchReport?: Resolver<Maybe<ResolversTypes['TeamMatchReport']>, ParentType, ContextType, RequireFields<QueryTeamMatchReportArgs, 'id'>>;
  allTeamMatchReports?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamMatchReport']>>>, ParentType, ContextType, Partial<QueryAllTeamMatchReportsArgs>>;
  _allTeamMatchReportsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllTeamMatchReportsMetaArgs>>;
  Team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<QueryTeamArgs, 'id'>>;
  allTeams?: Resolver<Maybe<Array<Maybe<ResolversTypes['Team']>>>, ParentType, ContextType, Partial<QueryAllTeamsArgs>>;
  _allTeamsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllTeamsMetaArgs>>;
  TemplateStyle?: Resolver<Maybe<ResolversTypes['TemplateStyle']>, ParentType, ContextType, RequireFields<QueryTemplateStyleArgs, 'id'>>;
  allTemplateStyles?: Resolver<Maybe<Array<Maybe<ResolversTypes['TemplateStyle']>>>, ParentType, ContextType, Partial<QueryAllTemplateStylesArgs>>;
  _allTemplateStylesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllTemplateStylesMetaArgs>>;
  Tenant?: Resolver<Maybe<ResolversTypes['Tenant']>, ParentType, ContextType, RequireFields<QueryTenantArgs, 'id'>>;
  allTenants?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tenant']>>>, ParentType, ContextType, Partial<QueryAllTenantsArgs>>;
  _allTenantsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllTenantsMetaArgs>>;
  Unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<QueryUnitArgs, 'id'>>;
  allUnits?: Resolver<Maybe<Array<Maybe<ResolversTypes['Unit']>>>, ParentType, ContextType, Partial<QueryAllUnitsArgs>>;
  _allUnitsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllUnitsMetaArgs>>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  allUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<QueryAllUsersArgs>>;
  _allUsersMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllUsersMetaArgs>>;
  WscContact?: Resolver<Maybe<ResolversTypes['WscContact']>, ParentType, ContextType, RequireFields<QueryWscContactArgs, 'id'>>;
  allWscContacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['WscContact']>>>, ParentType, ContextType, Partial<QueryAllWscContactsArgs>>;
  _allWscContactsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllWscContactsMetaArgs>>;
  WscMessage?: Resolver<Maybe<ResolversTypes['WscMessage']>, ParentType, ContextType, RequireFields<QueryWscMessageArgs, 'id'>>;
  allWscMessages?: Resolver<Maybe<Array<Maybe<ResolversTypes['WscMessage']>>>, ParentType, ContextType, Partial<QueryAllWscMessagesArgs>>;
  _allWscMessagesMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllWscMessagesMetaArgs>>;
  WscUser?: Resolver<Maybe<ResolversTypes['WscUser']>, ParentType, ContextType, RequireFields<QueryWscUserArgs, 'id'>>;
  allWscUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['WscUser']>>>, ParentType, ContextType, Partial<QueryAllWscUsersArgs>>;
  _allWscUsersMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllWscUsersMetaArgs>>;
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
  createClub?: Resolver<Maybe<ResolversTypes['Club']>, ParentType, ContextType, RequireFields<MutationCreateClubArgs, 'title'>>;
  updateClub?: Resolver<Maybe<ResolversTypes['Club']>, ParentType, ContextType, RequireFields<MutationUpdateClubArgs, 'id' | 'title'>>;
  removeClub?: Resolver<Maybe<ResolversTypes['Club']>, ParentType, ContextType, RequireFields<MutationRemoveClubArgs, 'id'>>;
  createCompetition?: Resolver<Maybe<ResolversTypes['Competition']>, ParentType, ContextType, RequireFields<MutationCreateCompetitionArgs, 'title' | 'organizationId'>>;
  updateCompetition?: Resolver<Maybe<ResolversTypes['Competition']>, ParentType, ContextType, RequireFields<MutationUpdateCompetitionArgs, 'id' | 'title' | 'organizationId'>>;
  removeCompetition?: Resolver<Maybe<ResolversTypes['Competition']>, ParentType, ContextType, RequireFields<MutationRemoveCompetitionArgs, 'id'>>;
  createConfigurationVariable?: Resolver<Maybe<ResolversTypes['ConfigurationVariable']>, ParentType, ContextType, RequireFields<MutationCreateConfigurationVariableArgs, 'id' | 'value'>>;
  updateConfigurationVariable?: Resolver<Maybe<ResolversTypes['ConfigurationVariable']>, ParentType, ContextType, RequireFields<MutationUpdateConfigurationVariableArgs, 'id' | 'value'>>;
  removeConfigurationVariable?: Resolver<Maybe<ResolversTypes['ConfigurationVariable']>, ParentType, ContextType, RequireFields<MutationRemoveConfigurationVariableArgs, 'id'>>;
  createDelegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<MutationCreateDelegationArgs, 'fromId' | 'toId' | 'active'>>;
  updateDelegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<MutationUpdateDelegationArgs, 'id' | 'fromId' | 'toId' | 'active'>>;
  removeDelegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<MutationRemoveDelegationArgs, 'id'>>;
  createEntity?: Resolver<Maybe<ResolversTypes['Entity']>, ParentType, ContextType, RequireFields<MutationCreateEntityArgs, 'id'>>;
  updateEntity?: Resolver<Maybe<ResolversTypes['Entity']>, ParentType, ContextType, RequireFields<MutationUpdateEntityArgs, 'id'>>;
  removeEntity?: Resolver<Maybe<ResolversTypes['Entity']>, ParentType, ContextType, RequireFields<MutationRemoveEntityArgs, 'id'>>;
  createEntitiesTracking?: Resolver<Maybe<ResolversTypes['EntitiesTracking']>, ParentType, ContextType, RequireFields<MutationCreateEntitiesTrackingArgs, 'entityTypeId' | 'entityId' | 'lastEntityComputed' | 'lastEntityUpdate'>>;
  updateEntitiesTracking?: Resolver<Maybe<ResolversTypes['EntitiesTracking']>, ParentType, ContextType, RequireFields<MutationUpdateEntitiesTrackingArgs, 'id' | 'entityTypeId' | 'entityId' | 'lastEntityComputed' | 'lastEntityUpdate'>>;
  removeEntitiesTracking?: Resolver<Maybe<ResolversTypes['EntitiesTracking']>, ParentType, ContextType, RequireFields<MutationRemoveEntitiesTrackingArgs, 'id'>>;
  downloadEntityRecords?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationDownloadEntityRecordsArgs, 'entityName'>>;
  createEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationCreateEventArgs, 'order' | 'eventTypeId' | 'matchId' | 'points'>>;
  updateEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationUpdateEventArgs, 'id' | 'order' | 'eventTypeId' | 'matchId' | 'points'>>;
  removeEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationRemoveEventArgs, 'id'>>;
  rePostEvent?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationRePostEventArgs, 'id'>>;
  createEventTypeCategory?: Resolver<Maybe<ResolversTypes['EventTypeCategory']>, ParentType, ContextType, RequireFields<MutationCreateEventTypeCategoryArgs, 'id' | 'title'>>;
  updateEventTypeCategory?: Resolver<Maybe<ResolversTypes['EventTypeCategory']>, ParentType, ContextType, RequireFields<MutationUpdateEventTypeCategoryArgs, 'id' | 'title'>>;
  removeEventTypeCategory?: Resolver<Maybe<ResolversTypes['EventTypeCategory']>, ParentType, ContextType, RequireFields<MutationRemoveEventTypeCategoryArgs, 'id'>>;
  createEventType?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType, RequireFields<MutationCreateEventTypeArgs, 'id' | 'title' | 'points'>>;
  updateEventType?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType, RequireFields<MutationUpdateEventTypeArgs, 'id' | 'title' | 'points'>>;
  removeEventType?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType, RequireFields<MutationRemoveEventTypeArgs, 'id'>>;
  createFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationCreateFileArgs, 'originalName' | 'url' | 'mimetype' | 's3Key' | 'eTag'>>;
  updateFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationUpdateFileArgs, 'id' | 'originalName' | 'url' | 'mimetype' | 's3Key' | 'eTag'>>;
  removeFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationRemoveFileArgs, 'id'>>;
  createGlossary?: Resolver<Maybe<ResolversTypes['Glossary']>, ParentType, ContextType, RequireFields<MutationCreateGlossaryArgs, 'title' | 'description' | 'periodTypeId'>>;
  updateGlossary?: Resolver<Maybe<ResolversTypes['Glossary']>, ParentType, ContextType, RequireFields<MutationUpdateGlossaryArgs, 'id' | 'title' | 'description' | 'periodTypeId'>>;
  removeGlossary?: Resolver<Maybe<ResolversTypes['Glossary']>, ParentType, ContextType, RequireFields<MutationRemoveGlossaryArgs, 'id'>>;
  createHistoryOfPlayerRole?: Resolver<Maybe<ResolversTypes['HistoryOfPlayerRole']>, ParentType, ContextType, RequireFields<MutationCreateHistoryOfPlayerRoleArgs, 'matchId' | 'playerId' | 'playerRoleId' | 'order'>>;
  updateHistoryOfPlayerRole?: Resolver<Maybe<ResolversTypes['HistoryOfPlayerRole']>, ParentType, ContextType, RequireFields<MutationUpdateHistoryOfPlayerRoleArgs, 'id' | 'matchId' | 'playerId' | 'playerRoleId' | 'order'>>;
  removeHistoryOfPlayerRole?: Resolver<Maybe<ResolversTypes['HistoryOfPlayerRole']>, ParentType, ContextType, RequireFields<MutationRemoveHistoryOfPlayerRoleArgs, 'id'>>;
  createLanguage?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<MutationCreateLanguageArgs, 'id'>>;
  updateLanguage?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<MutationUpdateLanguageArgs, 'id'>>;
  removeLanguage?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<MutationRemoveLanguageArgs, 'id'>>;
  createMailingCampaign?: Resolver<Maybe<ResolversTypes['MailingCampaign']>, ParentType, ContextType, RequireFields<MutationCreateMailingCampaignArgs, 'title' | 'mailingTypeId' | 'priority' | 'messageTemplateId'>>;
  updateMailingCampaign?: Resolver<Maybe<ResolversTypes['MailingCampaign']>, ParentType, ContextType, RequireFields<MutationUpdateMailingCampaignArgs, 'id' | 'title' | 'mailingTypeId' | 'priority' | 'messageTemplateId'>>;
  removeMailingCampaign?: Resolver<Maybe<ResolversTypes['MailingCampaign']>, ParentType, ContextType, RequireFields<MutationRemoveMailingCampaignArgs, 'id'>>;
  createMailingCampaignStatus?: Resolver<Maybe<ResolversTypes['MailingCampaignStatus']>, ParentType, ContextType, RequireFields<MutationCreateMailingCampaignStatusArgs, 'id' | 'title'>>;
  updateMailingCampaignStatus?: Resolver<Maybe<ResolversTypes['MailingCampaignStatus']>, ParentType, ContextType, RequireFields<MutationUpdateMailingCampaignStatusArgs, 'id' | 'title'>>;
  removeMailingCampaignStatus?: Resolver<Maybe<ResolversTypes['MailingCampaignStatus']>, ParentType, ContextType, RequireFields<MutationRemoveMailingCampaignStatusArgs, 'id'>>;
  createMailingMessage?: Resolver<Maybe<ResolversTypes['MailingMessage']>, ParentType, ContextType, RequireFields<MutationCreateMailingMessageArgs, 'mailingCampaignId' | 'templateId' | 'languageId' | 'to' | 'locals' | 'localsHash' | 'priority' | 'dateCreated' | 'mailingMessageStatusId' | 'messageTemplateLangVariantId'>>;
  updateMailingMessage?: Resolver<Maybe<ResolversTypes['MailingMessage']>, ParentType, ContextType, RequireFields<MutationUpdateMailingMessageArgs, 'id' | 'mailingCampaignId' | 'templateId' | 'languageId' | 'to' | 'locals' | 'localsHash' | 'priority' | 'dateCreated' | 'mailingMessageStatusId' | 'messageTemplateLangVariantId'>>;
  removeMailingMessage?: Resolver<Maybe<ResolversTypes['MailingMessage']>, ParentType, ContextType, RequireFields<MutationRemoveMailingMessageArgs, 'id'>>;
  createMailingMessageStatus?: Resolver<Maybe<ResolversTypes['MailingMessageStatus']>, ParentType, ContextType, RequireFields<MutationCreateMailingMessageStatusArgs, 'id' | 'final'>>;
  updateMailingMessageStatus?: Resolver<Maybe<ResolversTypes['MailingMessageStatus']>, ParentType, ContextType, RequireFields<MutationUpdateMailingMessageStatusArgs, 'id' | 'final'>>;
  removeMailingMessageStatus?: Resolver<Maybe<ResolversTypes['MailingMessageStatus']>, ParentType, ContextType, RequireFields<MutationRemoveMailingMessageStatusArgs, 'id'>>;
  createMailingType?: Resolver<Maybe<ResolversTypes['MailingType']>, ParentType, ContextType, RequireFields<MutationCreateMailingTypeArgs, 'id' | 'title'>>;
  updateMailingType?: Resolver<Maybe<ResolversTypes['MailingType']>, ParentType, ContextType, RequireFields<MutationUpdateMailingTypeArgs, 'id' | 'title'>>;
  removeMailingType?: Resolver<Maybe<ResolversTypes['MailingType']>, ParentType, ContextType, RequireFields<MutationRemoveMailingTypeArgs, 'id'>>;
  createManagerLogin?: Resolver<Maybe<ResolversTypes['ManagerLogin']>, ParentType, ContextType, RequireFields<MutationCreateManagerLoginArgs, 'managerLoginTypeId' | 'login' | 'locked' | 'managerId'>>;
  updateManagerLogin?: Resolver<Maybe<ResolversTypes['ManagerLogin']>, ParentType, ContextType, RequireFields<MutationUpdateManagerLoginArgs, 'id' | 'managerLoginTypeId' | 'login' | 'locked' | 'managerId'>>;
  removeManagerLogin?: Resolver<Maybe<ResolversTypes['ManagerLogin']>, ParentType, ContextType, RequireFields<MutationRemoveManagerLoginArgs, 'id'>>;
  createManagerLoginType?: Resolver<Maybe<ResolversTypes['ManagerLoginType']>, ParentType, ContextType, RequireFields<MutationCreateManagerLoginTypeArgs, 'id'>>;
  updateManagerLoginType?: Resolver<Maybe<ResolversTypes['ManagerLoginType']>, ParentType, ContextType, RequireFields<MutationUpdateManagerLoginTypeArgs, 'id'>>;
  removeManagerLoginType?: Resolver<Maybe<ResolversTypes['ManagerLoginType']>, ParentType, ContextType, RequireFields<MutationRemoveManagerLoginTypeArgs, 'id'>>;
  newManager?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationNewManagerArgs, 'firstName' | 'lastName' | 'email' | 'password'>>;
  deactivateManagers?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationDeactivateManagersArgs, 'managerIds'>>;
  changePasswordByManagerId?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationChangePasswordByManagerIdArgs, 'managerId' | 'password'>>;
  createManager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<MutationCreateManagerArgs, 'lastName' | 'firstName' | 'email' | 'headOfUnit' | 'active'>>;
  updateManager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<MutationUpdateManagerArgs, 'id' | 'lastName' | 'firstName' | 'email' | 'headOfUnit' | 'active'>>;
  removeManager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<MutationRemoveManagerArgs, 'id'>>;
  createManagersToPermission?: Resolver<Maybe<ResolversTypes['ManagersToPermission']>, ParentType, ContextType, RequireFields<MutationCreateManagersToPermissionArgs, 'managerId' | 'permissionId'>>;
  updateManagersToPermission?: Resolver<Maybe<ResolversTypes['ManagersToPermission']>, ParentType, ContextType, RequireFields<MutationUpdateManagersToPermissionArgs, 'id' | 'managerId' | 'permissionId'>>;
  removeManagersToPermission?: Resolver<Maybe<ResolversTypes['ManagersToPermission']>, ParentType, ContextType, RequireFields<MutationRemoveManagersToPermissionArgs, 'id'>>;
  createManagersToRole?: Resolver<Maybe<ResolversTypes['ManagersToRole']>, ParentType, ContextType, RequireFields<MutationCreateManagersToRoleArgs, 'managerId' | 'roleId'>>;
  updateManagersToRole?: Resolver<Maybe<ResolversTypes['ManagersToRole']>, ParentType, ContextType, RequireFields<MutationUpdateManagersToRoleArgs, 'id' | 'managerId' | 'roleId'>>;
  removeManagersToRole?: Resolver<Maybe<ResolversTypes['ManagersToRole']>, ParentType, ContextType, RequireFields<MutationRemoveManagersToRoleArgs, 'id'>>;
  createMatch?: Resolver<Maybe<ResolversTypes['Match']>, ParentType, ContextType, RequireFields<MutationCreateMatchArgs, 'title' | 'competitionId' | 'matchDate' | 'matchTime' | 'duration'>>;
  updateMatch?: Resolver<Maybe<ResolversTypes['Match']>, ParentType, ContextType, RequireFields<MutationUpdateMatchArgs, 'id' | 'title' | 'competitionId' | 'matchDate' | 'matchTime' | 'duration'>>;
  removeMatch?: Resolver<Maybe<ResolversTypes['Match']>, ParentType, ContextType, RequireFields<MutationRemoveMatchArgs, 'id'>>;
  createMatchPeriodMarkup?: Resolver<Maybe<ResolversTypes['MatchPeriodMarkup']>, ParentType, ContextType, RequireFields<MutationCreateMatchPeriodMarkupArgs, 'periodTypeId'>>;
  updateMatchPeriodMarkup?: Resolver<Maybe<ResolversTypes['MatchPeriodMarkup']>, ParentType, ContextType, RequireFields<MutationUpdateMatchPeriodMarkupArgs, 'id' | 'periodTypeId'>>;
  removeMatchPeriodMarkup?: Resolver<Maybe<ResolversTypes['MatchPeriodMarkup']>, ParentType, ContextType, RequireFields<MutationRemoveMatchPeriodMarkupArgs, 'id'>>;
  createMatchRequest?: Resolver<Maybe<ResolversTypes['MatchRequest']>, ParentType, ContextType, RequireFields<MutationCreateMatchRequestArgs, 'matchId' | 'teamForCompetitionId'>>;
  updateMatchRequest?: Resolver<Maybe<ResolversTypes['MatchRequest']>, ParentType, ContextType, RequireFields<MutationUpdateMatchRequestArgs, 'id' | 'matchId' | 'teamForCompetitionId'>>;
  removeMatchRequest?: Resolver<Maybe<ResolversTypes['MatchRequest']>, ParentType, ContextType, RequireFields<MutationRemoveMatchRequestArgs, 'id'>>;
  createMatchStatus?: Resolver<Maybe<ResolversTypes['MatchStatus']>, ParentType, ContextType, RequireFields<MutationCreateMatchStatusArgs, 'id' | 'title'>>;
  updateMatchStatus?: Resolver<Maybe<ResolversTypes['MatchStatus']>, ParentType, ContextType, RequireFields<MutationUpdateMatchStatusArgs, 'id' | 'title'>>;
  removeMatchStatus?: Resolver<Maybe<ResolversTypes['MatchStatus']>, ParentType, ContextType, RequireFields<MutationRemoveMatchStatusArgs, 'id'>>;
  createMatchVideo?: Resolver<Maybe<ResolversTypes['MatchVideo']>, ParentType, ContextType, RequireFields<MutationCreateMatchVideoArgs, 'videoTitle' | 'videoLink'>>;
  updateMatchVideo?: Resolver<Maybe<ResolversTypes['MatchVideo']>, ParentType, ContextType, RequireFields<MutationUpdateMatchVideoArgs, 'id' | 'videoTitle' | 'videoLink'>>;
  removeMatchVideo?: Resolver<Maybe<ResolversTypes['MatchVideo']>, ParentType, ContextType, RequireFields<MutationRemoveMatchVideoArgs, 'id'>>;
  createMessageTemplateLangVariant?: Resolver<Maybe<ResolversTypes['MessageTemplateLangVariant']>, ParentType, ContextType, RequireFields<MutationCreateMessageTemplateLangVariantArgs, 'subjectTemplate' | 'bodyTemplate' | 'messageTemplateId' | 'languageId'>>;
  updateMessageTemplateLangVariant?: Resolver<Maybe<ResolversTypes['MessageTemplateLangVariant']>, ParentType, ContextType, RequireFields<MutationUpdateMessageTemplateLangVariantArgs, 'id' | 'subjectTemplate' | 'bodyTemplate' | 'messageTemplateId' | 'languageId'>>;
  removeMessageTemplateLangVariant?: Resolver<Maybe<ResolversTypes['MessageTemplateLangVariant']>, ParentType, ContextType, RequireFields<MutationRemoveMessageTemplateLangVariantArgs, 'id'>>;
  createMessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<MutationCreateMessageTemplateArgs, 'id' | 'title' | 'secretData' | 'messageTypeId'>>;
  updateMessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<MutationUpdateMessageTemplateArgs, 'id' | 'title' | 'secretData' | 'messageTypeId'>>;
  removeMessageTemplate?: Resolver<Maybe<ResolversTypes['MessageTemplate']>, ParentType, ContextType, RequireFields<MutationRemoveMessageTemplateArgs, 'id'>>;
  createMessageType?: Resolver<Maybe<ResolversTypes['MessageType']>, ParentType, ContextType, RequireFields<MutationCreateMessageTypeArgs, 'id' | 'title'>>;
  updateMessageType?: Resolver<Maybe<ResolversTypes['MessageType']>, ParentType, ContextType, RequireFields<MutationUpdateMessageTypeArgs, 'id' | 'title'>>;
  removeMessageType?: Resolver<Maybe<ResolversTypes['MessageType']>, ParentType, ContextType, RequireFields<MutationRemoveMessageTypeArgs, 'id'>>;
  createOrganizator?: Resolver<Maybe<ResolversTypes['Organizator']>, ParentType, ContextType, RequireFields<MutationCreateOrganizatorArgs, 'title'>>;
  updateOrganizator?: Resolver<Maybe<ResolversTypes['Organizator']>, ParentType, ContextType, RequireFields<MutationUpdateOrganizatorArgs, 'id' | 'title'>>;
  removeOrganizator?: Resolver<Maybe<ResolversTypes['Organizator']>, ParentType, ContextType, RequireFields<MutationRemoveOrganizatorArgs, 'id'>>;
  createParent?: Resolver<Maybe<ResolversTypes['Parent']>, ParentType, ContextType, RequireFields<MutationCreateParentArgs, 'firstname' | 'lastname'>>;
  updateParent?: Resolver<Maybe<ResolversTypes['Parent']>, ParentType, ContextType, RequireFields<MutationUpdateParentArgs, 'id' | 'firstname' | 'lastname'>>;
  removeParent?: Resolver<Maybe<ResolversTypes['Parent']>, ParentType, ContextType, RequireFields<MutationRemoveParentArgs, 'id'>>;
  createPeriodType?: Resolver<Maybe<ResolversTypes['PeriodType']>, ParentType, ContextType, RequireFields<MutationCreatePeriodTypeArgs, 'id' | 'title' | 'order'>>;
  updatePeriodType?: Resolver<Maybe<ResolversTypes['PeriodType']>, ParentType, ContextType, RequireFields<MutationUpdatePeriodTypeArgs, 'id' | 'title' | 'order'>>;
  removePeriodType?: Resolver<Maybe<ResolversTypes['PeriodType']>, ParentType, ContextType, RequireFields<MutationRemovePeriodTypeArgs, 'id'>>;
  createPermission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<MutationCreatePermissionArgs, 'id'>>;
  updatePermission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<MutationUpdatePermissionArgs, 'id'>>;
  removePermission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<MutationRemovePermissionArgs, 'id'>>;
  createPlayerAggregatedRole?: Resolver<Maybe<ResolversTypes['PlayerAggregatedRole']>, ParentType, ContextType, RequireFields<MutationCreatePlayerAggregatedRoleArgs, 'id' | 'title'>>;
  updatePlayerAggregatedRole?: Resolver<Maybe<ResolversTypes['PlayerAggregatedRole']>, ParentType, ContextType, RequireFields<MutationUpdatePlayerAggregatedRoleArgs, 'id' | 'title'>>;
  removePlayerAggregatedRole?: Resolver<Maybe<ResolversTypes['PlayerAggregatedRole']>, ParentType, ContextType, RequireFields<MutationRemovePlayerAggregatedRoleArgs, 'id'>>;
  createPlayerCompetitionRating?: Resolver<Maybe<ResolversTypes['PlayerCompetitionRating']>, ParentType, ContextType, RequireFields<MutationCreatePlayerCompetitionRatingArgs, 'competitionId' | 'playerId' | 'rating'>>;
  updatePlayerCompetitionRating?: Resolver<Maybe<ResolversTypes['PlayerCompetitionRating']>, ParentType, ContextType, RequireFields<MutationUpdatePlayerCompetitionRatingArgs, 'id' | 'competitionId' | 'playerId' | 'rating'>>;
  removePlayerCompetitionRating?: Resolver<Maybe<ResolversTypes['PlayerCompetitionRating']>, ParentType, ContextType, RequireFields<MutationRemovePlayerCompetitionRatingArgs, 'id'>>;
  createPlayerForCompetitionTeam?: Resolver<Maybe<ResolversTypes['PlayerForCompetitionTeam']>, ParentType, ContextType, RequireFields<MutationCreatePlayerForCompetitionTeamArgs, 'teamForCompetitionId' | 'playerId'>>;
  updatePlayerForCompetitionTeam?: Resolver<Maybe<ResolversTypes['PlayerForCompetitionTeam']>, ParentType, ContextType, RequireFields<MutationUpdatePlayerForCompetitionTeamArgs, 'id' | 'teamForCompetitionId' | 'playerId'>>;
  removePlayerForCompetitionTeam?: Resolver<Maybe<ResolversTypes['PlayerForCompetitionTeam']>, ParentType, ContextType, RequireFields<MutationRemovePlayerForCompetitionTeamArgs, 'id'>>;
  createPlayerForMatchRequest?: Resolver<Maybe<ResolversTypes['PlayerForMatchRequest']>, ParentType, ContextType, RequireFields<MutationCreatePlayerForMatchRequestArgs, 'matchRequestId' | 'playerId'>>;
  updatePlayerForMatchRequest?: Resolver<Maybe<ResolversTypes['PlayerForMatchRequest']>, ParentType, ContextType, RequireFields<MutationUpdatePlayerForMatchRequestArgs, 'id' | 'matchRequestId' | 'playerId'>>;
  removePlayerForMatchRequest?: Resolver<Maybe<ResolversTypes['PlayerForMatchRequest']>, ParentType, ContextType, RequireFields<MutationRemovePlayerForMatchRequestArgs, 'id'>>;
  createPlayerForTeamMatchList?: Resolver<Maybe<ResolversTypes['PlayerForTeamMatchList']>, ParentType, ContextType, RequireFields<MutationCreatePlayerForTeamMatchListArgs, 'teamMatchListId' | 'playerId' | 'playerRoleId'>>;
  updatePlayerForTeamMatchList?: Resolver<Maybe<ResolversTypes['PlayerForTeamMatchList']>, ParentType, ContextType, RequireFields<MutationUpdatePlayerForTeamMatchListArgs, 'id' | 'teamMatchListId' | 'playerId' | 'playerRoleId'>>;
  removePlayerForTeamMatchList?: Resolver<Maybe<ResolversTypes['PlayerForTeamMatchList']>, ParentType, ContextType, RequireFields<MutationRemovePlayerForTeamMatchListArgs, 'id'>>;
  createPlayerMatchRating?: Resolver<Maybe<ResolversTypes['PlayerMatchRating']>, ParentType, ContextType, RequireFields<MutationCreatePlayerMatchRatingArgs, 'matchId' | 'playerId' | 'rating'>>;
  updatePlayerMatchRating?: Resolver<Maybe<ResolversTypes['PlayerMatchRating']>, ParentType, ContextType, RequireFields<MutationUpdatePlayerMatchRatingArgs, 'id' | 'matchId' | 'playerId' | 'rating'>>;
  removePlayerMatchRating?: Resolver<Maybe<ResolversTypes['PlayerMatchRating']>, ParentType, ContextType, RequireFields<MutationRemovePlayerMatchRatingArgs, 'id'>>;
  createPlayerRank?: Resolver<Maybe<ResolversTypes['PlayerRank']>, ParentType, ContextType, RequireFields<MutationCreatePlayerRankArgs, 'id' | 'title' | 'rating'>>;
  updatePlayerRank?: Resolver<Maybe<ResolversTypes['PlayerRank']>, ParentType, ContextType, RequireFields<MutationUpdatePlayerRankArgs, 'id' | 'title' | 'rating'>>;
  removePlayerRank?: Resolver<Maybe<ResolversTypes['PlayerRank']>, ParentType, ContextType, RequireFields<MutationRemovePlayerRankArgs, 'id'>>;
  createPlayerRole?: Resolver<Maybe<ResolversTypes['PlayerRole']>, ParentType, ContextType, RequireFields<MutationCreatePlayerRoleArgs, 'id' | 'title' | 'shortTitle' | 'playerAggregatedRoleId'>>;
  updatePlayerRole?: Resolver<Maybe<ResolversTypes['PlayerRole']>, ParentType, ContextType, RequireFields<MutationUpdatePlayerRoleArgs, 'id' | 'title' | 'shortTitle' | 'playerAggregatedRoleId'>>;
  removePlayerRole?: Resolver<Maybe<ResolversTypes['PlayerRole']>, ParentType, ContextType, RequireFields<MutationRemovePlayerRoleArgs, 'id'>>;
  createPlayer?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType, RequireFields<MutationCreatePlayerArgs, 'firstname' | 'lastname' | 'number' | 'dateOfBirth'>>;
  updatePlayer?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType, RequireFields<MutationUpdatePlayerArgs, 'id' | 'firstname' | 'lastname' | 'number' | 'dateOfBirth'>>;
  removePlayer?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType, RequireFields<MutationRemovePlayerArgs, 'id'>>;
  changePassword?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'password'>>;
  createReportForClub?: Resolver<Maybe<ResolversTypes['ReportForClub']>, ParentType, ContextType, RequireFields<MutationCreateReportForClubArgs, 'title' | 'teamId' | 'competitionId' | 'clubId'>>;
  updateReportForClub?: Resolver<Maybe<ResolversTypes['ReportForClub']>, ParentType, ContextType, RequireFields<MutationUpdateReportForClubArgs, 'id' | 'title' | 'teamId' | 'competitionId' | 'clubId'>>;
  removeReportForClub?: Resolver<Maybe<ResolversTypes['ReportForClub']>, ParentType, ContextType, RequireFields<MutationRemoveReportForClubArgs, 'id'>>;
  createReportForOrganization?: Resolver<Maybe<ResolversTypes['ReportForOrganization']>, ParentType, ContextType, RequireFields<MutationCreateReportForOrganizationArgs, 'title' | 'competitionId' | 'organizatorId'>>;
  updateReportForOrganization?: Resolver<Maybe<ResolversTypes['ReportForOrganization']>, ParentType, ContextType, RequireFields<MutationUpdateReportForOrganizationArgs, 'id' | 'title' | 'competitionId' | 'organizatorId'>>;
  removeReportForOrganization?: Resolver<Maybe<ResolversTypes['ReportForOrganization']>, ParentType, ContextType, RequireFields<MutationRemoveReportForOrganizationArgs, 'id'>>;
  createReportForParent?: Resolver<Maybe<ResolversTypes['ReportForParent']>, ParentType, ContextType, RequireFields<MutationCreateReportForParentArgs, 'title' | 'playerId' | 'matchId' | 'parentId'>>;
  updateReportForParent?: Resolver<Maybe<ResolversTypes['ReportForParent']>, ParentType, ContextType, RequireFields<MutationUpdateReportForParentArgs, 'id' | 'title' | 'playerId' | 'matchId' | 'parentId'>>;
  removeReportForParent?: Resolver<Maybe<ResolversTypes['ReportForParent']>, ParentType, ContextType, RequireFields<MutationRemoveReportForParentArgs, 'id'>>;
  createReportForTeam?: Resolver<Maybe<ResolversTypes['ReportForTeam']>, ParentType, ContextType, RequireFields<MutationCreateReportForTeamArgs, 'created' | 'title' | 'teamForCompetitionId' | 'matchId' | 'clubId'>>;
  updateReportForTeam?: Resolver<Maybe<ResolversTypes['ReportForTeam']>, ParentType, ContextType, RequireFields<MutationUpdateReportForTeamArgs, 'id' | 'created' | 'title' | 'teamForCompetitionId' | 'matchId' | 'clubId'>>;
  removeReportForTeam?: Resolver<Maybe<ResolversTypes['ReportForTeam']>, ParentType, ContextType, RequireFields<MutationRemoveReportForTeamArgs, 'id'>>;
  createRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationCreateRoleArgs, 'id' | 'hasAllPermissions' | 'allTenantsAvailable'>>;
  updateRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'id' | 'hasAllPermissions' | 'allTenantsAvailable'>>;
  removeRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationRemoveRoleArgs, 'id'>>;
  createRolesToPermission?: Resolver<Maybe<ResolversTypes['RolesToPermission']>, ParentType, ContextType, RequireFields<MutationCreateRolesToPermissionArgs, 'roleId' | 'permissionId'>>;
  updateRolesToPermission?: Resolver<Maybe<ResolversTypes['RolesToPermission']>, ParentType, ContextType, RequireFields<MutationUpdateRolesToPermissionArgs, 'id' | 'roleId' | 'permissionId'>>;
  removeRolesToPermission?: Resolver<Maybe<ResolversTypes['RolesToPermission']>, ParentType, ContextType, RequireFields<MutationRemoveRolesToPermissionArgs, 'id'>>;
  saveFiles?: Resolver<Array<ResolversTypes['FileRes']>, ParentType, ContextType, RequireFields<MutationSaveFilesArgs, 'files'>>;
  saveFile?: Resolver<ResolversTypes['FileRes'], ParentType, ContextType, RequireFields<MutationSaveFileArgs, 'file'>>;
  sendEmailDebug?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationSendEmailDebugArgs, 'messageTemplate' | 'locals'>>;
  recalculateStat?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  createStat?: Resolver<Maybe<ResolversTypes['Stat']>, ParentType, ContextType, RequireFields<MutationCreateStatArgs, 'id'>>;
  updateStat?: Resolver<Maybe<ResolversTypes['Stat']>, ParentType, ContextType, RequireFields<MutationUpdateStatArgs, 'id'>>;
  removeStat?: Resolver<Maybe<ResolversTypes['Stat']>, ParentType, ContextType, RequireFields<MutationRemoveStatArgs, 'id'>>;
  createTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, Partial<MutationCreateTagArgs>>;
  updateTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationUpdateTagArgs, 'id'>>;
  removeTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationRemoveTagArgs, 'id'>>;
  createTeamForCompetition?: Resolver<Maybe<ResolversTypes['TeamForCompetition']>, ParentType, ContextType, RequireFields<MutationCreateTeamForCompetitionArgs, 'title' | 'teamId' | 'competitionId'>>;
  updateTeamForCompetition?: Resolver<Maybe<ResolversTypes['TeamForCompetition']>, ParentType, ContextType, RequireFields<MutationUpdateTeamForCompetitionArgs, 'id' | 'title' | 'teamId' | 'competitionId'>>;
  removeTeamForCompetition?: Resolver<Maybe<ResolversTypes['TeamForCompetition']>, ParentType, ContextType, RequireFields<MutationRemoveTeamForCompetitionArgs, 'id'>>;
  createTeamForPlayer?: Resolver<Maybe<ResolversTypes['TeamForPlayer']>, ParentType, ContextType, RequireFields<MutationCreateTeamForPlayerArgs, 'playerId' | 'teamId'>>;
  updateTeamForPlayer?: Resolver<Maybe<ResolversTypes['TeamForPlayer']>, ParentType, ContextType, RequireFields<MutationUpdateTeamForPlayerArgs, 'id' | 'playerId' | 'teamId'>>;
  removeTeamForPlayer?: Resolver<Maybe<ResolversTypes['TeamForPlayer']>, ParentType, ContextType, RequireFields<MutationRemoveTeamForPlayerArgs, 'id'>>;
  createTeamMatchList?: Resolver<Maybe<ResolversTypes['TeamMatchList']>, ParentType, ContextType, RequireFields<MutationCreateTeamMatchListArgs, 'matchId' | 'teamForCompetitionId'>>;
  updateTeamMatchList?: Resolver<Maybe<ResolversTypes['TeamMatchList']>, ParentType, ContextType, RequireFields<MutationUpdateTeamMatchListArgs, 'id' | 'matchId' | 'teamForCompetitionId'>>;
  removeTeamMatchList?: Resolver<Maybe<ResolversTypes['TeamMatchList']>, ParentType, ContextType, RequireFields<MutationRemoveTeamMatchListArgs, 'id'>>;
  createTeamMatchReport?: Resolver<Maybe<ResolversTypes['TeamMatchReport']>, ParentType, ContextType, RequireFields<MutationCreateTeamMatchReportArgs, 'created' | 'matchId'>>;
  updateTeamMatchReport?: Resolver<Maybe<ResolversTypes['TeamMatchReport']>, ParentType, ContextType, RequireFields<MutationUpdateTeamMatchReportArgs, 'id' | 'created' | 'matchId'>>;
  removeTeamMatchReport?: Resolver<Maybe<ResolversTypes['TeamMatchReport']>, ParentType, ContextType, RequireFields<MutationRemoveTeamMatchReportArgs, 'id'>>;
  createTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationCreateTeamArgs, 'title' | 'dateOfBirthFrom' | 'clubId'>>;
  updateTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationUpdateTeamArgs, 'id' | 'title' | 'dateOfBirthFrom' | 'clubId'>>;
  removeTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationRemoveTeamArgs, 'id'>>;
  createTemplateStyle?: Resolver<Maybe<ResolversTypes['TemplateStyle']>, ParentType, ContextType, RequireFields<MutationCreateTemplateStyleArgs, 'title' | 'style'>>;
  updateTemplateStyle?: Resolver<Maybe<ResolversTypes['TemplateStyle']>, ParentType, ContextType, RequireFields<MutationUpdateTemplateStyleArgs, 'id' | 'title' | 'style'>>;
  removeTemplateStyle?: Resolver<Maybe<ResolversTypes['TemplateStyle']>, ParentType, ContextType, RequireFields<MutationRemoveTemplateStyleArgs, 'id'>>;
  createTenant?: Resolver<Maybe<ResolversTypes['Tenant']>, ParentType, ContextType, RequireFields<MutationCreateTenantArgs, 'utcOffset'>>;
  updateTenant?: Resolver<Maybe<ResolversTypes['Tenant']>, ParentType, ContextType, RequireFields<MutationUpdateTenantArgs, 'id' | 'utcOffset'>>;
  removeTenant?: Resolver<Maybe<ResolversTypes['Tenant']>, ParentType, ContextType, RequireFields<MutationRemoveTenantArgs, 'id'>>;
  createUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<MutationCreateUnitArgs, 'title'>>;
  updateUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<MutationUpdateUnitArgs, 'id' | 'title'>>;
  removeUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<MutationRemoveUnitArgs, 'id'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'lastname' | 'firstname' | 'email'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'lastname' | 'firstname' | 'email'>>;
  removeUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationRemoveUserArgs, 'id'>>;
  createWscContact?: Resolver<Maybe<ResolversTypes['WscContact']>, ParentType, ContextType, RequireFields<MutationCreateWscContactArgs, 'name' | 'phoneNumber' | 'wscUserId'>>;
  updateWscContact?: Resolver<Maybe<ResolversTypes['WscContact']>, ParentType, ContextType, RequireFields<MutationUpdateWscContactArgs, 'id' | 'name' | 'phoneNumber' | 'wscUserId'>>;
  removeWscContact?: Resolver<Maybe<ResolversTypes['WscContact']>, ParentType, ContextType, RequireFields<MutationRemoveWscContactArgs, 'id'>>;
  createWscMessage?: Resolver<Maybe<ResolversTypes['WscMessage']>, ParentType, ContextType, RequireFields<MutationCreateWscMessageArgs, 'externalId' | 'dateTimeRaw' | 'sender' | 'content' | 'wscUserId' | 'wscContactId'>>;
  updateWscMessage?: Resolver<Maybe<ResolversTypes['WscMessage']>, ParentType, ContextType, RequireFields<MutationUpdateWscMessageArgs, 'id' | 'externalId' | 'dateTimeRaw' | 'sender' | 'content' | 'wscUserId' | 'wscContactId'>>;
  removeWscMessage?: Resolver<Maybe<ResolversTypes['WscMessage']>, ParentType, ContextType, RequireFields<MutationRemoveWscMessageArgs, 'id'>>;
  createWscUser?: Resolver<Maybe<ResolversTypes['WscUser']>, ParentType, ContextType, RequireFields<MutationCreateWscUserArgs, 'login' | 'passwordHash'>>;
  updateWscUser?: Resolver<Maybe<ResolversTypes['WscUser']>, ParentType, ContextType, RequireFields<MutationUpdateWscUserArgs, 'id' | 'login' | 'passwordHash'>>;
  removeWscUser?: Resolver<Maybe<ResolversTypes['WscUser']>, ParentType, ContextType, RequireFields<MutationRemoveWscUserArgs, 'id'>>;
};

export type AggregateTrackingResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateTracking'] = ResolversParentTypes['AggregateTracking']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  entityTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastAggregatesComputed?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  lastAggregatesScheduled?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
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
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entityTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  actionTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  managerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  managerLogin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  foreign?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  foreignEntityType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foreignEntityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  actionData?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
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

export type ClubResolvers<ContextType = any, ParentType extends ResolversParentTypes['Club'] = ResolversParentTypes['Club']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdByManagerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastChangedByManagerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompetitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Competition'] = ResolversParentTypes['Competition']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateOfBirthFrom?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dateOfBirthTo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdByManagerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastChangedByManagerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurationVariableResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurationVariable'] = ResolversParentTypes['ConfigurationVariable']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
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

export type EntitiesTrackingResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitiesTracking'] = ResolversParentTypes['EntitiesTracking']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  entityTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastEntityComputed?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  lastEntityScheduled?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastEntityUpdate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  timeSecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  linkToTimeSecond?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  controversialPoint?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startControversialPoint?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  highlight?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startHighlight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  eventTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videoId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamForCompetitionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mainPlayerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  secondPlayerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstPlayerRoleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondPlayerRoleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  periodTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  periodNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventTypeCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTypeCategory'] = ResolversParentTypes['EventTypeCategory']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventType'] = ResolversParentTypes['EventType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  eventTypeCategoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  showInTranslationMode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  needForSecondPlayer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dependsOnPoint?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  redCard?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  yellowCard?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateBlock?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateTakeaway?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateSelection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateInterseption?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateGuardian?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculatePositionError?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateGrossError?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculatePositiveDribling?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateNegativeDribling?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculatePositiveSgm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateNegativeSgm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculatePositiveRgm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateNegativeRgm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateLosses?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateGegenPressing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculatePressing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateSaveBall?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculatePositiveTransfer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateNegativeTransfer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateHit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateHitTarget?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateCorner?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateFoul?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calculateOffside?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  originalName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  s3Key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eTag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlossaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Glossary'] = ResolversParentTypes['Glossary']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  periodTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HistoryOfPlayerRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['HistoryOfPlayerRole'] = ResolversParentTypes['HistoryOfPlayerRole']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playerRoleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailingCampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailingCampaign'] = ResolversParentTypes['MailingCampaign']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mailingTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  mailingCampaignStatusId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  messageTemplateId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailingCampaignStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailingCampaignStatus'] = ResolversParentTypes['MailingCampaignStatus']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuantityPerStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuantityPerStatus'] = ResolversParentTypes['QuantityPerStatus']> = {
  draft?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stopped?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pending?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cancelled?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  errored?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailingMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailingMessage'] = ResolversParentTypes['MailingMessage']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mailingCampaignId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  templateId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  languageId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locals?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  localsHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dateSent?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uniqueKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mailingMessageStatusId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messageTemplateLangVariantId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailingMessageStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailingMessageStatus'] = ResolversParentTypes['MailingMessageStatus']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  final?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailingTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailingType'] = ResolversParentTypes['MailingType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManagerLoginResolvers<ContextType = any, ParentType extends ResolversParentTypes['ManagerLogin'] = ResolversParentTypes['ManagerLogin']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  managerLoginTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passwordHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  locked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  managerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManagerLoginTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ManagerLoginType'] = ResolversParentTypes['ManagerLoginType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  photoId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
  expiresAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManagersToRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ManagersToRole'] = ResolversParentTypes['ManagersToRole']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  managerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Match'] = ResolversParentTypes['Match']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdByManagerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastChangedByManagerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  competitionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstTeamColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstTeamOnFieldId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  secondTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  secondTeamColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matchDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  matchTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  place?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstTeamPoints?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  secondTeamPoints?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  redCardFirstTeam?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  redCardSecondTeam?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  yellowCardFirstTeam?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  yellowCardSecondTeam?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstTeamHandleTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  secondTeamHandleTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  linkToProtocol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matchStatusId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPeriodMarkupResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPeriodMarkup'] = ResolversParentTypes['MatchPeriodMarkup']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  periodTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchVideoId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchRequest'] = ResolversParentTypes['MatchRequest']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamForCompetitionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchStatus'] = ResolversParentTypes['MatchStatus']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchVideo'] = ResolversParentTypes['MatchVideo']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  videoTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videoLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageTemplateLangVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageTemplateLangVariant'] = ResolversParentTypes['MessageTemplateLangVariant']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subjectTemplate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bodyTemplate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messageTemplateId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  languageId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  additionalStyle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageTemplate'] = ResolversParentTypes['MessageTemplate']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secretData?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  messageTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dataExample?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateStyleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageType'] = ResolversParentTypes['MessageType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organizator'] = ResolversParentTypes['Organizator']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdByManagerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastChangedByManagerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Parent'] = ResolversParentTypes['Parent']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  patronymic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdByManagerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastChangedByManagerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PeriodTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PeriodType'] = ResolversParentTypes['PeriodType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Permission'] = ResolversParentTypes['Permission']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerAggregatedRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerAggregatedRole'] = ResolversParentTypes['PlayerAggregatedRole']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerCompetitionRatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerCompetitionRating'] = ResolversParentTypes['PlayerCompetitionRating']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  competitionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerForCompetitionTeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerForCompetitionTeam'] = ResolversParentTypes['PlayerForCompetitionTeam']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamForCompetitionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerForMatchRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerForMatchRequest'] = ResolversParentTypes['PlayerForMatchRequest']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchRequestId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerForTeamMatchListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerForTeamMatchList'] = ResolversParentTypes['PlayerForTeamMatchList']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamMatchListId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startingPosition?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  onField?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  playerRoleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playerOnMatchNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerMatchRatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerMatchRating'] = ResolversParentTypes['PlayerMatchRating']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  progressivePassAccuracy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  playerRatingAverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerRankResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerRank'] = ResolversParentTypes['PlayerRank']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerRole'] = ResolversParentTypes['PlayerRole']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playerAggregatedRoleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  patronymic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdByManagerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastChangedByManagerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  linkToProfile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerRating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  photoId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playerRatingAverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commonPlayerRatingGoalkeeper?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  commonPlayerRatingAttack?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  commonPlayerRatingMidfielder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  commonPlayerRatingDefender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playedMatches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  averagePlayerRatingGoalkeeper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averagePlayerRatingAttack?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averagePlayerRatingMidfielder?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averagePlayerRatingDefender?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  playerAggregatedRoleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  progressivePassAccuracy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  playerRankId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionsWithMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionsWithMeta'] = ResolversParentTypes['PermissionsWithMeta']> = {
  permissionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  byRoles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  directly?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  byFullAccessRoles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportForClubResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportForClub'] = ResolversParentTypes['ReportForClub']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  competitionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  clubId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastUpdated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportForOrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportForOrganization'] = ResolversParentTypes['ReportForOrganization']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  competitionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  organizatorId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastUpdated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportForParentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportForParent'] = ResolversParentTypes['ReportForParent']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastUpdated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportForTeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportForTeam'] = ResolversParentTypes['ReportForTeam']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamForCompetitionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  clubId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastUpdated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  htmlFileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  jsonFileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  needRecalculate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
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

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type FileResResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileRes'] = ResolversParentTypes['FileRes']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type TeamForCompetitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamForCompetition'] = ResolversParentTypes['TeamForCompetition']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  competitionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamForPlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamForPlayer'] = ResolversParentTypes['TeamForPlayer']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamMatchListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamMatchList'] = ResolversParentTypes['TeamMatchList']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamForCompetitionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamMatchReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamMatchReport'] = ResolversParentTypes['TeamMatchReport']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  matchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastUpdated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  fileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  needRecalculate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateOfBirthFrom?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateOfBirthTo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdByManagerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastChangedByManagerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  clubId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateStyleResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateStyle'] = ResolversParentTypes['TemplateStyle']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  style?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type WscContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['WscContact'] = ResolversParentTypes['WscContact']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wscUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WscMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['WscMessage'] = ResolversParentTypes['WscMessage']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  externalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateTimeRaw?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wscUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wscContactId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WscUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['WscUser'] = ResolversParentTypes['WscUser']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  IP?: GraphQLScalarType;
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
  Cuid?: GraphQLScalarType;
  SemVer?: GraphQLScalarType;
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
  Club?: ClubResolvers<ContextType>;
  Competition?: CompetitionResolvers<ContextType>;
  ConfigurationVariable?: ConfigurationVariableResolvers<ContextType>;
  Delegation?: DelegationResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  EntitiesTracking?: EntitiesTrackingResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventTypeCategory?: EventTypeCategoryResolvers<ContextType>;
  EventType?: EventTypeResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  Glossary?: GlossaryResolvers<ContextType>;
  HistoryOfPlayerRole?: HistoryOfPlayerRoleResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  MailingCampaign?: MailingCampaignResolvers<ContextType>;
  MailingCampaignStatus?: MailingCampaignStatusResolvers<ContextType>;
  QuantityPerStatus?: QuantityPerStatusResolvers<ContextType>;
  MailingMessage?: MailingMessageResolvers<ContextType>;
  MailingMessageStatus?: MailingMessageStatusResolvers<ContextType>;
  MailingType?: MailingTypeResolvers<ContextType>;
  ManagerLogin?: ManagerLoginResolvers<ContextType>;
  ManagerLoginType?: ManagerLoginTypeResolvers<ContextType>;
  Manager?: ManagerResolvers<ContextType>;
  ManagersToPermission?: ManagersToPermissionResolvers<ContextType>;
  ManagersToRole?: ManagersToRoleResolvers<ContextType>;
  Match?: MatchResolvers<ContextType>;
  MatchPeriodMarkup?: MatchPeriodMarkupResolvers<ContextType>;
  MatchRequest?: MatchRequestResolvers<ContextType>;
  MatchStatus?: MatchStatusResolvers<ContextType>;
  MatchVideo?: MatchVideoResolvers<ContextType>;
  MessageTemplateLangVariant?: MessageTemplateLangVariantResolvers<ContextType>;
  MessageTemplate?: MessageTemplateResolvers<ContextType>;
  MessageType?: MessageTypeResolvers<ContextType>;
  Organizator?: OrganizatorResolvers<ContextType>;
  Parent?: ParentResolvers<ContextType>;
  PeriodType?: PeriodTypeResolvers<ContextType>;
  Permission?: PermissionResolvers<ContextType>;
  PlayerAggregatedRole?: PlayerAggregatedRoleResolvers<ContextType>;
  PlayerCompetitionRating?: PlayerCompetitionRatingResolvers<ContextType>;
  PlayerForCompetitionTeam?: PlayerForCompetitionTeamResolvers<ContextType>;
  PlayerForMatchRequest?: PlayerForMatchRequestResolvers<ContextType>;
  PlayerForTeamMatchList?: PlayerForTeamMatchListResolvers<ContextType>;
  PlayerMatchRating?: PlayerMatchRatingResolvers<ContextType>;
  PlayerRank?: PlayerRankResolvers<ContextType>;
  PlayerRole?: PlayerRoleResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  PermissionsWithMeta?: PermissionsWithMetaResolvers<ContextType>;
  ReportForClub?: ReportForClubResolvers<ContextType>;
  ReportForOrganization?: ReportForOrganizationResolvers<ContextType>;
  ReportForParent?: ReportForParentResolvers<ContextType>;
  ReportForTeam?: ReportForTeamResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RolesToPermission?: RolesToPermissionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  FileRes?: FileResResolvers<ContextType>;
  Stat?: StatResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TeamForCompetition?: TeamForCompetitionResolvers<ContextType>;
  TeamForPlayer?: TeamForPlayerResolvers<ContextType>;
  TeamMatchList?: TeamMatchListResolvers<ContextType>;
  TeamMatchReport?: TeamMatchReportResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  TemplateStyle?: TemplateStyleResolvers<ContextType>;
  Tenant?: TenantResolvers<ContextType>;
  Unit?: UnitResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  WscContact?: WscContactResolvers<ContextType>;
  WscMessage?: WscMessageResolvers<ContextType>;
  WscUser?: WscUserResolvers<ContextType>;
};

