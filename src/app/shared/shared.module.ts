import {NgModule} from "@angular/core";
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { VirtualScrollerComponent } from './components/virtual-scroller/virtual-scroller.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    VirtualScrollerComponent
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
