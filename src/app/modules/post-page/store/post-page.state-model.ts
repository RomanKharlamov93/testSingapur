import {Post} from "../post-page";
import {RequestQueryParams, ServerResponse} from "../../../core/common";

export class PostPageStateModel {
    posts: ServerResponse<Post[]>;
    requestQueryParams: RequestQueryParams;
    currentPost!: Post;
    postsPageSearchValue: string;

    constructor() {
      this.posts = new ServerResponse<Post[]>();
      this.requestQueryParams = {};
      this.postsPageSearchValue = '';
    }
}
