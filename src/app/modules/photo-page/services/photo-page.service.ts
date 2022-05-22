import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from "../Photo-page";

@Injectable()

export class PhotoPageService {
  constructor(private _http: HttpClient) {}

  public getAllPhotos(params?: any):Observable<HttpResponse<Photo[]>> {
    return this._http.get<Photo[]>('photos', {params, observe: 'response'});
  }

  public getPhotoById(photoId: number): Observable<Photo> {
    return this._http.get<Photo>(`photos/${photoId}`)
  }
}
