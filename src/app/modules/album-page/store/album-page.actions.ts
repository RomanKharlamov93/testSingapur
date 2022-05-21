
export class GetAlbums {
  static readonly type = '[Album-page] Get Albums';
  constructor() {}
}

export class GetAlbumById {
  static readonly type = '[Album-page] Get Album By Id';
  constructor(public id: number) {}
}

export class GetPhotosOfAlbum {
  static readonly type = '[Album-page] Get Photos of Album';
  constructor(public albumId: number) {}
}
