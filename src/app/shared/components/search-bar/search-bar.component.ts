import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
  ]
})
export class SearchBarComponent implements OnInit, AfterViewInit {
  @Input() value = '';
  @Output() searched: EventEmitter<{ search: any }>;
  @ViewChild('searchInput') searchInput!: ElementRef;

  public previousEmitValue!: string;

  constructor() {
    this.searched = new EventEmitter<{ search: any }>();
  }

  ngOnInit(): void {
    this.previousEmitValue = this.value;
  }

  public ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      filter((e: any) => e.key === 'Enter')).subscribe(() => {
        if (!this.previousEmitValue && this.value.length > 0 || this.previousEmitValue && this.previousEmitValue !== this.value) {
          this.emitValue();
        }
      }
    )
  }

  public onChange(): void {
    this.value = this.value.trim();
    if (this.value.length === 0 && this.previousEmitValue && this.previousEmitValue.length !== 0) {
      this.emitValue();
      return;
    }
  }

  public emitValue(): void {
    this.previousEmitValue = this.value;
    this.searched.emit({ search: this.value })
  }

}
