import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtransactionPageRoutingModule } from './addtransaction-routing.module';

import { AddtransactionPage } from './addtransaction.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    AddtransactionPageRoutingModule
  ],
  declarations: [AddtransactionPage]
})
export class AddtransactionPageModule {}
