import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentingListPage } from './renting-list.page';

const routes: Routes = [
  {
    path: '',
    component: RentingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentingListPageRoutingModule {}
