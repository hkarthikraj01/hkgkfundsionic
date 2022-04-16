import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdituserprofilePage } from './edituserprofile.page';

const routes: Routes = [
  {
    path: ':id',
    component: EdituserprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdituserprofilePageRoutingModule {}
