import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  @HostBinding('class') public layoutBlock = 'layout__block shrink';

  constructor() { }

  ngOnInit(): void {
    console.log('kek')
  }

}
