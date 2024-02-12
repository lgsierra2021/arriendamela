import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentingFormPage } from './renting-form.page';

const routes: Routes = [
  {
    path: '',
    component: RentingFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentingFormPageRoutingModule {}
