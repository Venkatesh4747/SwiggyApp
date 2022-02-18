import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FooterTabsPage } from './footer-tabs/footer-tabs.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./footer-tabs/footer-tabs.module').then(m => m.FooterTabsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
