import {NgModule} from "@angular/core";
import { AlbumPageComponent } from './album-page.component';
import {AlbumPageRoutingModule} from "./album-page-routing.module";
import { AlbumItemComponent } from './components/album-item/album-item.component';
import {AlbumPageService} from "./services/album-page.service";
import {CommonModule} from "@angular/common";
import {NgxsModule} from "@ngxs/store";
import {AlbumPageState} from "./store/album-page.state";

@NgModule({
  declarations: [
    AlbumPageComponent,
    AlbumItemComponent
  ],
  imports: [
    CommonModule,
    AlbumPageRoutingModule,
    NgxsModule.forFeature([AlbumPageState])
  ],
  providers: [AlbumPageService]
})

export class AlbumPageModule {

}
