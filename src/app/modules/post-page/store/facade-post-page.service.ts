import {Injectable} from "@angular/core";
import {Select} from "@ngxs/store";
import {PostPageState} from "./post-page.state";
import {Observable} from "rxjs";
import {Post} from "../post-page";
import {Dispatch} from "@ngxs-labs/dispatch-decorator";
import {GetPosts} from "./post-page.action";

@Injectable({
  providedIn: 'root'
})

export class FacadePostPageService {
  @Select(PostPageState.getPosts) posts$!: Observable<Post[]>;

  @Dispatch()
  getPosts = (params?: any) => new GetPosts(params)
}
