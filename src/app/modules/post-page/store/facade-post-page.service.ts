import {Injectable} from "@angular/core";
import {Select} from "@ngxs/store";
import {PostPageState} from "./post-page.state";
import {Observable} from "rxjs";
import {Post} from "../post-page";
import {Dispatch} from "@ngxs-labs/dispatch-decorator";
import {GetCurrentPostById, GetPosts} from "./post-page.action";
import {PageInfo} from "../../../shared/components/pagination/pagination";
import {RequestQueryParams} from "../../../core/common";

@Injectable({
  providedIn: 'root'
})

export class FacadePostPageService {
  @Select(PostPageState.getPosts) posts$!: Observable<Post[]>;
  @Select(PostPageState.getCurrentPostById) currentPost$!: Observable<Post>;
  @Select(PostPageState.getPostPageInfo) pageInfo$!: Observable<PageInfo>;
  @Select(PostPageState.getPostsPageSearchValue) postsSearchValue$!: Observable<string>;

  @Dispatch()
  getPosts = (params?: RequestQueryParams) => new GetPosts(params)

  @Dispatch()
  getCurrentPostById = (postId: number) => new GetCurrentPostById(postId)
}
