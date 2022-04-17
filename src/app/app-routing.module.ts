import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'transactions',
    canActivate: [AuthGuard],
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'user-profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'viewtransaction',
    canActivate: [AuthGuard],
    loadChildren: () => import('./user-transaction/user-transaction.module').then( m => m.UserTransactionPageModule)
  },
  {
    path: 'addtransaction',
    canActivate: [AuthGuard],
    loadChildren: () => import('./addtransaction/addtransaction.module').then( m => m.AddtransactionPageModule)
  },
  {
    path: 'adduserprofile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./adduserprofile/adduserprofile.module').then( m => m.AdduserprofilePageModule)
  },
  {
    path: 'edittransaction',
    canActivate: [AuthGuard],
    loadChildren: () => import('./edittransaction/edittransaction.module').then( m => m.EdittransactionPageModule)
  },
  {
    path: 'edituserprofile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./edituserprofile/edituserprofile.module').then( m => m.EdituserprofilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
