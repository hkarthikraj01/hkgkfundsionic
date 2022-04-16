import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../class/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-adduserprofile',
  templateUrl: './adduserprofile.page.html',
  styleUrls: ['./adduserprofile.page.scss'],
})
export class AdduserprofilePage implements OnInit {
  user:User ;
  userId:any;
  addUser:FormGroup;
    constructor(private API: UserService,
      private actRoute: ActivatedRoute,
      private router: Router,
      public fb: FormBuilder ,
      private alertCtrl:AlertController) {
       
       }
  
       ngOnInit() {
       
        this.addUser = this.fb.group({ 
          //id:new FormControl(this.user.id),
         // userId : new FormControl(this.userId,[Validators.required,Validators.minLength(1)]),
          userName :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
          userPassword :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
          autoNumber :   new FormControl('',[Validators.required,Validators.minLength(1)]) ,
          userMobileNumber :   new FormControl('',[Validators.required,Validators.minLength(1)]) ,
        //
          userTotalAmount :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
          userBalanceAmount :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
         // 
         userAcceptedAmount :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
         //
          userProfilePicture :   new FormControl('',[Validators.required,Validators.minLength(1)]) ,
          //
          userStatus :   new FormControl('',[Validators.required,Validators.minLength(1)]) ,
          //
          role :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
          userAddress :   new FormControl('',[Validators.required,Validators.minLength(1)]) ,
          identityProof :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
          familyNumberNames :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
    
        })
      }
      addUserForm() {
        if (!this.addUser.valid) {
          console.log(this.addUser.value);
          console.log("error");
          
          return false;
        } else {
          console.log(this.addUser.value)
          this.API.Register(this.addUser.value)
            .subscribe((res) => {
              console.log(res);
              this.showAlert(res);
              this.router.navigate(['']);
            })
            this.router.navigate(['']);
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
