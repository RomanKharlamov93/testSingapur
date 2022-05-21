import {Album, AlbumItem} from "../album-page";

export class AlbumPageStateModel {
  albums!: AlbumItem[] | null;
  album!: Album;

  constructor() {}
}
