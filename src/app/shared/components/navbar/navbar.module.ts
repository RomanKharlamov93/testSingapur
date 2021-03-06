import {NgModule} from "@angular/core";
import {NavbarComponent} from "./navbar.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared.module";

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})

export class NavbarModule {
}
