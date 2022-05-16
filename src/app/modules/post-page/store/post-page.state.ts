import {PostPageStateModel} from "./post-page.state-model";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Post} from "../post-page";
import {GetPosts} from "./post-page.action";
import {Observable} from "rxjs";
import {PostPageService} from "../services/post-page.service";


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
  static getPosts(state: PostPageStateModel): Post[] {
    return state.posts;
  }

  @Action(GetPosts)
  getPosts(ctx: StateContext<PostPageStateModel>): Observable<Post> {
    return this._postPageService.getPosts()
  }
}
