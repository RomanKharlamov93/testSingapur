import {NgModule} from "@angular/core";
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";

@NgModule({
  providers: [],
  declarations: [
    DashboardHeaderComponent,
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule
  ]
})

export class DashboardModule {

}
