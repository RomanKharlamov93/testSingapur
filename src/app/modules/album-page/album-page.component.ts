import {Component, HostBinding, OnInit} from '@angular/core';
import {FacadeAlbumPageService} from "./store/facade-album-page.service";
import {Observable} from "rxjs";
import {Album, AlbumItem} from "./album-page";
import {AlbumPageService} from "./services/album-page.service";

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html'
})
export class AlbumPageComponent implements OnInit {
  @HostBinding('class') layoutBlock = 'layout__block';

  public albums$!: Observable<AlbumItem[]>;

  constructor(private _facade: FacadeAlbumPageService, private albumService: AlbumPageService) {
      this._facade.getAlbums();
      this.albums$ = this._facade.albums$;
  }

  ngOnInit(): void {
  }

  public openAlbum(id: number): void {

  }
}
