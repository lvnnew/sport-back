import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  Tag?: Maybe<Tag>;
  allTags?: Maybe<Array<Maybe<Tag>>>;
  _allTagsMeta?: Maybe<ListMetadata>;
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

export type Mutation = {
  __typename?: 'Mutation';
  createTag?: Maybe<Tag>;
  updateTag?: Maybe<Tag>;
  removeTag?: Maybe<Scalars['Boolean']>;
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

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
};

export type TagFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  comment?: Maybe<Scalars['String']>;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Tag: ResolverTypeWrapper<Tag>;
  TagFilter: TagFilter;
  ListMetadata: ResolverTypeWrapper<ListMetadata>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int'];
  String: Scalars['String'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
  Tag: Tag;
  TagFilter: TagFilter;
  ListMetadata: ListMetadata;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  Tag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QueryTagArgs, 'id'>>;
  allTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<QueryAllTagsArgs, never>>;
  _allTagsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, RequireFields<Query_AllTagsMetaArgs, never>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationCreateTagArgs, never>>;
  updateTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationUpdateTagArgs, 'id'>>;
  removeTag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveTagArgs, 'id'>>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListMetadata'] = ResolversParentTypes['ListMetadata']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  ListMetadata?: ListMetadataResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
