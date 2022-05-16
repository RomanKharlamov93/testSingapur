import { Component, OnInit } from '@angular/core';
import {PostPageService} from "./services/post-page.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html'
})
export class PostPageComponent implements OnInit {

  constructor(private _postPageService: PostPageService) { }

  ngOnInit(): void {

  }

}
