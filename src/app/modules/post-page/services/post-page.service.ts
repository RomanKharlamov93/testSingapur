import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Post} from "../post-page";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable()

export class PostPageService {
  constructor(private _http: HttpClient) {}

  public getPosts(params?: any): Observable<HttpResponse<Post[]>> {
    return this._http.get<Post[]>('posts', { params, observe: 'response' });
  }
}
