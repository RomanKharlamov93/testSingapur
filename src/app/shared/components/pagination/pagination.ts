export class PageInfo {
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;

    constructor() {
      this.empty = false;
      this.first = false;
      this.last = false;
      this.number = 0;
      this.numberOfElements = 0;
      this.size = 0;
      this.totalElements = 0;
      this.totalPages = 0;
    }
}
