import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdduserprofilePageRoutingModule } from './adduserprofile-routing.module';

import { AdduserprofilePage } from './adduserprofile.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdduserprofilePageRoutingModule
  ],
  declarations: [AdduserprofilePage]
})
export class AdduserprofilePageModule {}
