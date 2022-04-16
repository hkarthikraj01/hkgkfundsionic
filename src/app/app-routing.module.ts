import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'viewtransaction',
    loadChildren: () => import('./user-transaction/user-transaction.module').then( m => m.UserTransactionPageModule)
  },
  {
    path: 'addtransaction',
    loadChildren: () => import('./addtransaction/addtransaction.module').then( m => m.AddtransactionPageModule)
  },
  {
    path: 'adduserprofile',
    loadChildren: () => import('./adduserprofile/adduserprofile.module').then( m => m.AdduserprofilePageModule)
  },
  {
    path: 'edittransaction',
    loadChildren: () => import('./edittransaction/edittransaction.module').then( m => m.EdittransactionPageModule)
  },
  {
    path: 'edituserprofile',
    loadChildren: () => import('./edituserprofile/edituserprofile.module').then( m => m.EdituserprofilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
