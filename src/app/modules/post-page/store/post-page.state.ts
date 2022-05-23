import {PostPageStateModel} from "./post-page.state-model";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Post} from "../post-page";
import {GetCurrentPostById, GetPosts} from "./post-page.action";
import {Observable} from "rxjs";
import {PostPageService} from "../services/post-page.service";
import {tap} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";
import {patch} from "@ngxs/store/operators";
import {PageInfo} from "../../../shared/components/pagination/pagination";
import {ServerResponse} from "../../../core/common";


@State<PostPageStateModel>({
  name: 'post',
  defaults: new PostPageStateModel(),
  children: []
})

@Injectable()

export class PostPageState {
  constructor(private _postPageService: PostPageService) {
  }

  @Selector()
  static getPosts(state: PostPageStateModel): ServerResponse<Post[]> | null {
    return state.posts;
  }

  @Selector()
  static getCurrentPostById(state: PostPageStateModel): Post | null {
    return state.currentPost;
  }

  @Selector()
  static getPostsPageSearchValue(state: PostPageStateModel): string {
    return state.postsPageSearchValue;
  }

  @Selector()
  static getPostPageInfo(state: PostPageStateModel): PageInfo {
    return  {
      empty: state.posts.empty,
      first: state.posts.first,
      last: state.posts.last,
      number: state.posts.number,
      numberOfElements: state.posts.numberOfElements,
      size: state.posts.size,
      totalPages: state.posts.totalPages,
      totalElements: state.posts.totalElements
    }
  }

  @Action(GetPosts)
  getPosts(ctx: StateContext<PostPageStateModel>, { params }: GetPosts): Observable<ServerResponse<Post[]>> {
    const parameters = params ? { ...ctx.getState().requestQueryParams, ...params }: {};
    console.log(parameters);
    if (params && params.hasOwnProperty('search')) {
      parameters._page = 1;
      if (!params.search) {
        delete parameters.search;
      }
    }

    return this._postPageService.getPosts(parameters).pipe(tap(
      (response: ServerResponse<Post[]>) => {
        ctx.setState(
          patch<PostPageStateModel>({
            posts: response,
            requestQueryParams: parameters,
            postsPageSearchValue: parameters.search ? parameters.search: ''
          })
        )
      }
    ))
  }

  @Action(GetCurrentPostById)
  getCurrentPostById(ctx: StateContext<PostPageStateModel>, { postId }: GetCurrentPostById): Observable<Post> | undefined{
    return this._postPageService.getCurrentPostById(postId).pipe(tap(
      (response: Post) => {
        ctx.setState(
          patch<PostPageStateModel>({
            currentPost: response
          })
        )
      }
    ));
  }
}
