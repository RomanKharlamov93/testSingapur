import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {AlbumPageModule} from "./modules/album-page/album-page.module";
import {PostPageModule} from "./modules/post-page/post-page.module";
import {PhotoPageModule} from "./modules/photo-page/photo-page.module";
import {SharedModule} from "./shared/shared.module";
import {NavbarModule} from "./shared/components/navbar/navbar.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
