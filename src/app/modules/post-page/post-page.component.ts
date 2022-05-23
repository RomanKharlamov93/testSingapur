import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "./post-page";
import {FacadePostPageService} from "./store/facade-post-page.service";
import {Router} from "@angular/router";
import {PageInfo} from "../../shared/components/pagination/pagination";
import {RequestQueryParams} from "../../core/common";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html'
})
export class PostPageComponent implements OnInit {
  @HostBinding('class') layoutBlock = 'layout__block';

  public posts$!: Observable<Post[]>;
  public pageInfo$!: Observable<PageInfo>;
  public postsSearchValue$!: Observable<string>;

  constructor(
    private _facadePostsPageService: FacadePostPageService,
    private router: Router
    ) {
    this._facadePostsPageService.getPosts();
    this.posts$ = this._facadePostsPageService.posts$;
    this.postsSearchValue$ = this._facadePostsPageService.postsSearchValue$;
  }

  ngOnInit(): void {
  }

  public onSearch(event: { search: string }): void {
    this._facadePostsPageService.getPosts(event)
  }

  public handleRequest(postId: number): void {
    this._facadePostsPageService.getCurrentPostById(postId);
    this.router.navigateByUrl(`posts/${postId}`);
  }

  public handleParams(event: RequestQueryParams) {
    this._facadePostsPageService.getPosts(event);
  }
}
