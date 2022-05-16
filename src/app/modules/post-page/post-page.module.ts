import {NgModule} from "@angular/core";
import { PostPageComponent } from './post-page.component';
import {PostPageRoutingModule} from "./post-page-routing.module";
import {PostPageService} from "./services/post-page.service";

@NgModule({
  declarations: [
    PostPageComponent
  ],
  providers: [PostPageService],
  imports: [PostPageRoutingModule]
})

export class PostPageModule {

}
