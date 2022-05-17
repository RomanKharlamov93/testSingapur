export class GetPosts {
  static readonly type = '[PostPage] Get Posts';
  constructor(public params?: any) {}
}

export class GetPostById {
  static readonly type = '[PostPage] Get Post By Id';
  constructor(public postId: number) {}
}
