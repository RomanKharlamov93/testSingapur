import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Post} from "../post-page";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {ServerResponse} from "../../../core/common";

@Injectable()

export class PostPageService {
  constructor(private _http: HttpClient) {}

  public getPosts(params?: any): Observable<ServerResponse<Post[]>> {
    return this._http.get<ServerResponse<Post[]>>('posts', { params });
  }

  public getCurrentPostById(postId: number): Observable<Post> {
    return this._http.get<Post>(`posts/${postId}`)
  }
}
