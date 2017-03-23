import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { TrollComponent } from './shared/troll/troll.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "detail/:key",
    component: DetailComponent
  },
  {
    path: "troll",
    component: TrollComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
