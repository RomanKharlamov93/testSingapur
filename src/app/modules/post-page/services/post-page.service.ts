import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Post} from "../post-page";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class PostPageService {
  constructor(private _http: HttpClient) {}

  public getPosts(): Observable<Post> {
    return this._http.get<Post>('posts');
  }
}
