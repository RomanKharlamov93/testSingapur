import {Post} from "../post-page";

export class PostPageStateModel {
    posts!: Post[] | null;
    post!: Post;

    constructor() { }
}
