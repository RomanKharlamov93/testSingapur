import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PostPageComponent} from "./post-page.component";
import {PostComponent} from "./components/post/post.component";

const routes: Routes = [
  { path: '', component: PostPageComponent, data: {title: 'Posts'} },
  { path: 'posts/:id', component: PostComponent, data: {title: ':id'} },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostPageRoutingModule {

}
