import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdittransactionPageRoutingModule } from './edittransaction-routing.module';

import { EdittransactionPage } from './edittransaction.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    EdittransactionPageRoutingModule
  ],
  declarations: [EdittransactionPage]
})
export class EdittransactionPageModule {}
