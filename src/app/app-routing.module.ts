import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'renting-list',
    loadChildren: () => import('./modules/renting/renting-list/renting-list.module').then( m => m.RentingListPageModule)
  },
  {
    path: 'renting-form',
    loadChildren: () => import('./modules/renting/renting-form/renting-form.module').then( m => m.RentingFormPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
