import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterTabsPage } from './footer-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: FooterTabsPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          },
          {
            path: 'food-details/:foodid',
            loadChildren: () => import('../food-details/food-details.module').then( m => m.FoodDetailsPageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
          }
        ]
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterTabsPageRoutingModule {}
