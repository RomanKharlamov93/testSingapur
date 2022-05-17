import {NgModule} from "@angular/core";
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  providers: [],
  exports: [
    BreadcrumbsComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})

export class SharedModule {

}
