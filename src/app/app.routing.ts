import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreTopComponent } from './store-top/store-top.component';
import { PurchaseComponent } from './purchase/purchase.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StoreTopComponent
  },
  {
    path: 'purchase',
    component: PurchaseComponent
  },
  {
    path: 'purchase/:id',
    component: PurchaseComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
