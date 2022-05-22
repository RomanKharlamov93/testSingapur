import {Component, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {Photo} from "../../Photo-page";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})

export class PhotoListComponent implements OnInit {
  @HostBinding('class') layoutBlock = 'layout__block';
  @ViewChild('cdk-virtual-scroll-viewport') viewport!: CdkVirtualScrollViewport;
  @Input() photosList!: Photo[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
