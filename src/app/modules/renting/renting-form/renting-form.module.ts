import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentingFormPageRoutingModule } from './renting-form-routing.module';

import { RentingFormPage } from './renting-form.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RentingFormPageRoutingModule
  ],
  declarations: [RentingFormPage]
})
export class RentingFormPageModule {}
