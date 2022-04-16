import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdittransactionPage } from './edittransaction.page';

const routes: Routes = [
  {
    path: ':id',
    component: EdittransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdittransactionPageRoutingModule {}
