export interface IAllRequestArgs {
  filter?: object | null;
  page?: number | null;
  perPage?: number | null;
  sortField?: string | null;
  sortOrder?: string | null;
}

export interface IOptions {
  noId?: boolean;
}
