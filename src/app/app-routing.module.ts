import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {title: 'Dashboard'}
  },
  {
    path: 'albums',
    loadChildren: () => import('./modules/album-page/album-page.module').then(m => m.AlbumPageModule),
    data: {title: 'Albums'}
  },
  {
    path: 'photos',
    loadChildren: () => import('./modules/photo-page/photo-page.module').then(m => m.PhotoPageModule),
    data: {title: 'Photos'}
  },
  {
    path: 'posts',
    loadChildren: () => import('./modules/post-page/post-page.module').then(m => m.PostPageModule),
    data: {title: 'Posts'}
  },
  {
    path: '', component: NavbarComponent, outlet: 'navbar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
