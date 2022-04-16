import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../class/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:User[]=[];
  Filter:any="";
  constructor(private API:UserService,public alertController: AlertController, private route:Router) { } 
     ngOnInit(){
      this.API.getAllUser().subscribe(res=>{
        console.log(res);
        this.user=res;
      })
    }    
  async viewProfile(id:any) {
    this.route.navigateByUrl("/user-profile/"+id);
  }
}