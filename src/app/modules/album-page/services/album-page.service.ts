import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Album, AlbumItem} from "../album-page";

@Injectable()
export class AlbumPageService {

  constructor(private _http: HttpClient) { }
  public getAlbums(params?: any): Observable<HttpResponse<AlbumItem[]>> {
    return this._http.get<AlbumItem[]>('photos', {params, observe: 'response' });
  }

  public getAlbumById(id: number): Observable<Album> {
    return this._http.get<Album>(`albums/${id}`);
  }

  // public getPhotosOfAlbumById(albumId: number): Observable<HttpResponse<AlbumItem>> {
  //   return this._http.get<AlbumItem>(`photos?albumId=${albumId}`, { observe: 'response'})
  // }
}
