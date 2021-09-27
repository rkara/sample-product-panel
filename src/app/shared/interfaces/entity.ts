export interface EntityResponse<T> {
  count: number;
  next?: null;
  previous?: null;
  results?: T[] | null;
}
