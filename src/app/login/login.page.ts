import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../class/user';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:User;
  userId:any;
  sign:FormGroup;
    constructor(private API: AuthService, private actRoute: ActivatedRoute, private router: Router, public fb: FormBuilder , private alertCtrl:AlertController) {}

  ngOnInit() {
    this.sign = this.fb.group({ 
      username :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
      password :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
    })
  }
  login() {
    if (!this.sign.valid) {
      console.log(this.sign.value);
      console.log("error");
      
      return false;
    } else {
      var user =this.sign.get('username').value;
      var pass = this.sign.get('password').value;
      this.API.sigIn(user,pass)
        
    }
  }
  async showAlert(res:any) { 
    const alert = await this.alertCtrl.create({ 
    header: 'Alert', 
    subHeader: 'Create', 
    message: res, 
    buttons: ['OK'] 
    }); 
    await alert.present(); 
    const result = await alert.onDidDismiss();  
    console.log(result); 
  }
}
