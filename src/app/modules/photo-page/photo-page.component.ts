import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Photo} from "./Photo-page";
import {FacadePhotoService} from "./store/facade-photo.service";

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html'
})
export class PhotoPageComponent implements OnInit {
  @HostBinding('class') layoutBlock = 'layout__block';

  public photos$!: Observable<Photo[]>;
  constructor(private facade: FacadePhotoService) { }

  ngOnInit(): void {
    this.facade.getAllPhotos();
    this.photos$ = this.facade.photos$
  }

}
