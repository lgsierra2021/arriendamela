import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RentingListPageRoutingModule } from './renting-list-routing.module';
import { RentingListPage } from './renting-list.page';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentingListPageRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [RentingListPage]
})
export class RentingListPageModule { }
