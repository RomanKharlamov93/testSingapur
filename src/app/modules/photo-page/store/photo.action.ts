export class GetAllPhotos {
  static readonly type = '[Photos-page] Get All Photos';
  constructor(public params?: any) {}
}

export class GetPhotoById {
  static readonly type = '[Photos Page] Get Photo By Id';
  constructor(public photoId: number) {}
}
