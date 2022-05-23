import {NgModule} from "@angular/core";
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { VirtualScrollerComponent } from './components/virtual-scroller/virtual-scroller.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    VirtualScrollerComponent,
    PaginationComponent,
    SearchBarComponent
  ],
  providers: [],
  exports: [
    BreadcrumbsComponent,
    PaginationComponent,
    SearchBarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ]
})

export class SharedModule {

}
