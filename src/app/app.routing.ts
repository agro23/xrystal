import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreTopComponent } from './store-top/store-top.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { MarketComponent } from './market/market.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    // component: StoreTopComponent
    component: MarketComponent

  },
  {
    path: 'about',
    component: AboutComponent
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
