import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "./post-page";
import {FacadePostPageService} from "./store/facade-post-page.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html'
})
export class PostPageComponent implements OnInit {
  @HostBinding('class') layoutBlock = 'layout__block';

  public posts$!: Observable<Post[]>;
  public page = 1;
  public pageSize = 5;

  constructor(
    private _facadePostsPageService: FacadePostPageService,
    private router: Router
    ) {
    this._facadePostsPageService.getPosts();
    this.posts$ = this._facadePostsPageService.posts$;
  }

  ngOnInit(): void {

  }

  public handleRequest(postId: number): void {
    this._facadePostsPageService.getPostById(postId);
    this.router.navigateByUrl(`posts/${postId}`);
  }

}
