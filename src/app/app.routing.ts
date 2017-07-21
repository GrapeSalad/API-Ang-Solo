import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from
import { TreasureComponent } from './treasure/treasure.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TreasureComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
