import {NgModule} from "@angular/core";
import { PostPageComponent } from './post-page.component';
import {PostPageRoutingModule} from "./post-page-routing.module";
import {PostPageService} from "./services/post-page.service";
import {CommonModule} from "@angular/common";
import {NgxsModule} from "@ngxs/store";
import {PostPageState} from "./store/post-page.state";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PostPageComponent
  ],
  providers: [PostPageService],
  imports: [
    PostPageRoutingModule,
    CommonModule,
    //  state Module
    NgxsModule.forFeature([
      PostPageState
    ]),
    NgbPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class PostPageModule {

}
