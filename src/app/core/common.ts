export class ServerResponse<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalPages: number;
  totalElements: number;

  constructor() {
    this.content = [];
    this.empty = false;
    this.first = false;
    this.last = false;
    this.number = 0;
    this.numberOfElements = 0;
    this.size = 0;
    this.totalPages = 0;
    this.totalElements = 0;
  }
}

export interface RequestQueryParams {
  _page?: number;
  size?: number;
  search?: string;
}
