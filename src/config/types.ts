export type ValueBasedOnRequired<Req extends boolean, Val extends number | string | boolean | Date | bigint = string>
  = Req extends true ? Val : Val | undefined

