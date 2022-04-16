import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdituserprofilePageRoutingModule } from './edituserprofile-routing.module';

import { EdituserprofilePage } from './edituserprofile.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    ReactiveFormsModule,
    HttpClientModule,
    EdituserprofilePageRoutingModule
  ],
  declarations: [EdituserprofilePage]
})
export class EdituserprofilePageModule {}
