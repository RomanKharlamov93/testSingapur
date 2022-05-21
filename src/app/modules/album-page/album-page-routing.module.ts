import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AlbumPageComponent} from "./album-page.component";
import {AlbumItemComponent} from "./components/album-item/album-item.component";

const routes: Routes = [
  {path: '', component: AlbumPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AlbumPageRoutingModule {

}
