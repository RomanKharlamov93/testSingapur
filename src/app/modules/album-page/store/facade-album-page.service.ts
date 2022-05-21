import {Injectable} from "@angular/core";
import {Select} from "@ngxs/store";
import {AlbumPageState} from "./album-page.state";
import {Observable} from "rxjs";
import {Album, AlbumItem} from "../album-page";
import {Dispatch} from "@ngxs-labs/dispatch-decorator";
import {GetAlbumById, GetAlbums} from "./album-page.actions";

@Injectable({
  providedIn: 'root'
})

export class FacadeAlbumPageService {
  @Select(AlbumPageState.getAlbums) albums$!: Observable<AlbumItem[]>;
  @Select(AlbumPageState.getAlbumById) album$!: Observable<Album>;

  @Dispatch()
  getAlbums = () => new GetAlbums()

  @Dispatch()
  getAlbumById = (id: number) => new GetAlbumById(id)
}
