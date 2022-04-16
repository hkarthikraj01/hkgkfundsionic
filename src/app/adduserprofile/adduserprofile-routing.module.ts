import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdduserprofilePage } from './adduserprofile.page';

const routes: Routes = [
  {
    path: '',
    component: AdduserprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdduserprofilePageRoutingModule {}
