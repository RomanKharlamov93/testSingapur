import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Post} from "../../post-page";
import {Observable} from "rxjs";
import {FacadePostPageService} from "../../store/facade-post-page.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  public post$!: Observable<Post>;

  constructor(private _facadePostsPageService: FacadePostPageService,
              private _location: Location) {
    this.post$ = this._facadePostsPageService.post$;
  }

  ngOnInit(): void {
  }

  public goBack(): void {
    this._location.back();
  }
}
