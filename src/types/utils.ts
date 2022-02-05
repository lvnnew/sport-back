export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export type PartialMaybe<T> = {
    [P in keyof T]?: T[P] | null;
  };

