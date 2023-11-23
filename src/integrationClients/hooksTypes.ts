export interface ClientBeforeRequestArgs {
  requestId: string;
  methodName: string;
  args: Record<string, any>;
}
export interface ClientAfterRequestArgs {
  requestId: string;
  methodName: string;
  args: Record<string, any>;
  milliseconds: number;
  result: Record<string, any>;
}
export interface ClientOnErrorArgs {
  requestId: string;
  methodName: string;
  args: Record<string, any>;
  milliseconds: number;
  error: any;
}

