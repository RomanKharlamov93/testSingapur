import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageInfo} from "./pagination";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() set info(info: PageInfo) {
    if (info) {
      this.pageInfo = info;
    }
  }

  @Input() totalSize!: number;

  @Output() changePageDispatch: EventEmitter<{ _page: number }>;

  public dropdownState = false;
  public sizeOptions: number[] = [1,2,3,4,5,6,7,8,9,10];
  public pageCounter: number = 1;
  public inputVaule: FormControl;
  public pageInfo: PageInfo;
  public layoutBlock = 'layout__block';

  constructor() {
    this.changePageDispatch = new EventEmitter<{ _page: number }>();
    this.pageInfo = new PageInfo();
    this.inputVaule = new FormControl();
  }

  ngOnInit(): void {
  }

  public setCountPerPage(size: number): void {
    this.dropdownState = !this.dropdownState;
    this.pageCounter = size;
    // this.pageInfo.size = size;

    this.changePageDispatch.emit({ _page: size });
  }

  public setPage(pageNumber: number): void {
    this.pageCounter = pageNumber;
    this.changePageDispatch.emit({_page: pageNumber});
  }

  public setPageFromKey(event: any): void {
    const page = Number(event.target.value) - 1;
    this.setPage(page);
  }

}
