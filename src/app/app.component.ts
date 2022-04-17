import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private auth:AuthService,private route:Router) {}
  userName:string = localStorage.getItem('userName');
  autoNumber:string = localStorage.getItem('autoNumber');
  signOut(){
  this.auth.doLogout();
  }
  getUserProfile(){
    this.route.navigateByUrl("/user-profile/"+this.autoNumber);
  }
}
