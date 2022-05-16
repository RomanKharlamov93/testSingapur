import {PostPageStateModel} from "./post-page.state-model";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Post} from "../post-page";
import {GetPosts} from "./post-page.action";
import {Observable} from "rxjs";
import {PostPageService} from "../services/post-page.service";
import {tap} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";
import {patch} from "@ngxs/store/operators";


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
  static getPosts(state: PostPageStateModel): Post[] | null {
    return state.posts;
  }

  @Action(GetPosts)
  getPosts(ctx: StateContext<PostPageStateModel>, { params }: GetPosts): Observable<HttpResponse<Post[]>> {
    return this._postPageService.getPosts().pipe(tap(
      (response: HttpResponse<Post[]>) => {
        ctx.setState(
          patch<PostPageStateModel>({
            posts: response.body
          })
        )
      }
    ))
  }
}
