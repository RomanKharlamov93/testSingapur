import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {AlbumPageModule} from "./modules/album-page/album-page.module";
import {PostPageModule} from "./modules/post-page/post-page.module";
import {PhotoPageModule} from "./modules/photo-page/photo-page.module";
import {SharedModule} from "./shared/shared.module";
import {NavbarModule} from "./shared/components/navbar/navbar.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";
import {NgxsDispatchPluginModule} from "@ngxs-labs/dispatch-decorator";
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsResetPluginModule} from "ngxs-reset-plugin";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AlbumPageModule,
    PostPageModule,
    PhotoPageModule,
    SharedModule,
    NavbarModule,
    NgbModule,
    HttpClientModule,
    CoreModule,
    //  state-modules //
    NgxsModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsResetPluginModule.forRoot()
    //  end state-modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
