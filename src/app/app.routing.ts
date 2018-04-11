import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreTopComponent } from './store-top/store-top.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { MarketComponent } from './market/market.component';

const appRoutes: Routes = [
  {
    path: '',
    // component: StoreTopComponent
    component: MarketComponent

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
