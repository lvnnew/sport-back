export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export type PartialMaybe<T> = {
  [P in keyof T]?: T[P] | null;
};

export type NonNullableRecord<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

export type DefinedRecord<T> = NonNullableRecord<Required<T>>;

