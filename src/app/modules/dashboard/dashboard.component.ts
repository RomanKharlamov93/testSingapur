import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  @HostBinding('class') public layoutBlock = 'layout__block';

  constructor() { }

  ngOnInit(): void {
  }

}
