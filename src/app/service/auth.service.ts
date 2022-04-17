import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'https://hkgkapi.herokuapp.com/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  api:any="https://hkgkapi.herokuapp.com/";

  constructor(private Http: HttpClient, public router: Router) {}

  // Sign-up
  sigIn(user:any,pass:any){
    return this.Http.get<any>(this.api+'api/HkgkFunds/User/Login/'+user+','+pass)
    .subscribe((res:any)=>{
      localStorage.setItem('access_token', res.token);
      localStorage.setItem('userName',res.userName);
      localStorage.setItem('autoNumber',res.autoNumber);
           this.currentUser = res;
           console.log(res);
           this.router.navigate(['']);
    })
     
  }
  getUserProfile() {
    let api = this.api+'/Users';
    return this.Http.get<any>(api)
    .pipe(map((res:any)=>{
      return res;    
    }))
  }

 
  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

}
