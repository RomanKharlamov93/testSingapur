import {NgModule} from "@angular/core";
import { PhotoPageComponent } from './photo-page.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    PhotoPageComponent,
    PhotoItemComponent
  ],
  providers: [],
  imports: []
})

export class PhotoPageModule {

}
