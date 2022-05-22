import {NgModule} from "@angular/core";
import { PhotoPageComponent } from './photo-page.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import {OverlayModule} from "@angular/cdk/overlay";
import {PhotoPageRoutingModule} from "./photo-page-routing.module";
import {PhotoPageService} from "./services/photo-page.service";
import {CommonModule} from "@angular/common";
import {NgxsModule} from "@ngxs/store";
import {PhotoState} from "./store/photo.state";
import { PhotoListComponent } from './components/photo-list/photo-list.component';

@NgModule({
  declarations: [
    PhotoPageComponent,
    PhotoItemComponent,
    PhotoListComponent
  ],
  providers: [PhotoPageService],
  imports: [
    OverlayModule,
    PhotoPageRoutingModule,
    CommonModule,
    NgxsModule.forFeature([PhotoState])
  ]
})

export class PhotoPageModule {

}
