import { Action, Selector, State, StateContext} from "@ngxs/store";
import { AlbumPageStateModel } from "./album-page.state-model";
import {Album, AlbumItem} from "../album-page";
import { Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import { AlbumPageService } from "../services/album-page.service";
import { tap } from "rxjs/operators";
import {GetAlbumById, GetAlbums} from "./album-page.actions";
import { patch } from "@ngxs/store/operators";
import { Injectable } from "@angular/core";

@State<AlbumPageStateModel>({
  name: 'album',
  defaults: new AlbumPageStateModel(),
  children: []
})

@Injectable()

export class AlbumPageState {

  constructor(private _albumsPageService: AlbumPageService) {}

  @Selector()
  static getAlbums(state: AlbumPageStateModel): AlbumItem[] | null {
    return state.albums
  }

  @Selector()
  static getAlbumById(state: AlbumPageStateModel): Album | null {
    return state.album
  }


  @Action(GetAlbums)
  getAlbums(ctx: StateContext<AlbumPageStateModel>): Observable<HttpResponse<AlbumItem[]>> {
    return this._albumsPageService.getAlbums({ _limit: 10 }).pipe(
      tap((response: HttpResponse<AlbumItem[]>) => {
          ctx.setState(patch<AlbumPageStateModel>({
            albums: response.body
          }));
          console.log(ctx.getState().albums)
        }
      )
    )
  }

  @Action(GetAlbumById)
  getAlbumById(ctx: StateContext<AlbumPageStateModel>, { id }: GetAlbumById): Observable<Album> {
    return this._albumsPageService.getAlbumById(id).pipe(
      tap((response: Album) => {
          ctx.setState(patch<AlbumPageStateModel>({
            album: response
          }));
        }
      )
    )
  }


}
