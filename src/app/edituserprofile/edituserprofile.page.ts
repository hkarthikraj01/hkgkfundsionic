import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../class/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edituserprofile',
  templateUrl: './edituserprofile.page.html',
  styleUrls: ['./edituserprofile.page.scss'],
})
export class EdituserprofilePage implements OnInit {

  userId:any;
  updateUser:FormGroup;
  user:User = new User();
    constructor(private API: UserService,
      private actRoute: ActivatedRoute,
      private router: Router,
      public fb: FormBuilder,
      private alertCtrl:AlertController
      ) {
       }
  
  
       ngOnInit() {
      
          this.userId=this.actRoute.snapshot.paramMap.get('id');
          this.API.getSingleUser(this.userId).subscribe(res=>{
           this.user=res;
           
            this.updateUser =this.fb.group({
              id:new FormControl(this.user.id,[Validators.required,Validators.minLength(1)]),
              userId : new FormControl(this.userId,[Validators.required,Validators.minLength(1)]),
              userName :  new FormControl(this.user.userName,[Validators.required,Validators.minLength(1)]) ,
              userPassword :  new FormControl(this.user.userPassword,[Validators.required,Validators.minLength(1)]) ,
              autoNumber :   new FormControl(this.user.autoNumber,[Validators.required,Validators.minLength(1)]) ,
              userMobileNumber :   new FormControl(this.user.userMobileNumber,[Validators.required,Validators.minLength(1)]) ,
             userTotalAmount :  new FormControl(this.user.userTotalAmount,[Validators.required,Validators.minLength(1)]) ,
              userBalanceAmount :  new FormControl(this.user.userBalanceAmount,[Validators.required,Validators.minLength(1)]) ,
              userAcceptedAmount :  new FormControl(this.user.userAcceptedAmount,[Validators.required,Validators.minLength(1)]) ,
              userProfilePicture :   new FormControl(this.user.userProfilePicture,[Validators.required,Validators.minLength(1)]) ,
              userStatus :   new FormControl(this.user.userStatus,[Validators.required,Validators.minLength(1)]) ,
              role :  new FormControl(this.user.role) ,
              userAddress :   new FormControl(this.user.userAddress,[Validators.required,Validators.minLength(1)]) ,
              identityProof :  new FormControl(this.user.identityProof,[Validators.required,Validators.minLength(1)]) ,
              familyNumberNames :  new FormControl(this.user.familyNumberNames,[Validators.required,Validators.minLength(1)]) ,
        
            })
      
          })
          this.updateUser=this.fb.group({
            userId : new FormControl(this.userId,[Validators.required,Validators.minLength(1)]),
            userName :  new FormControl(this.user.userName,[Validators.required,Validators.minLength(1)]) ,
            userPassword :  new FormControl(this.user.userPassword,[Validators.required,Validators.minLength(1)]) ,
            autoNumber :   new FormControl(this.user.autoNumber,[Validators.required,Validators.minLength(1)]) ,
            userMobileNumber :   new FormControl(this.user.userMobileNumber,[Validators.required,Validators.minLength(1)]) ,
            userTotalAmount :  new FormControl(this.user.userTotalAmount,[Validators.required,Validators.minLength(1)]) ,
            userBalanceAmount :  new FormControl(this.user.userBalanceAmount,[Validators.required,Validators.minLength(1)]) ,
            userAcceptedAmount :  new FormControl(this.user.userAcceptedAmount,[Validators.required,Validators.minLength(1)]) ,
           userProfilePicture :   new FormControl(this.user.userProfilePicture,[Validators.required,Validators.minLength(1)]) ,
           userStatus :   new FormControl(this.user.userStatus,[Validators.required,Validators.minLength(1)]) ,
           role :  new FormControl(this.user.role,[Validators.required,Validators.minLength(1)]) ,
            userAddress :   new FormControl(this.user.userAddress,[Validators.required,Validators.minLength(1)]) ,
            identityProof :  new FormControl(this.user.identityProof,[Validators.required,Validators.minLength(1)]) ,
            familyNumberNames :  new FormControl(this.user.familyNumberNames,[Validators.required,Validators.minLength(1)]) ,
      
          
          })
          console.log(this.userId);
          
          
        }
  
  
  
  
      
      updateForm(){
  
        if (!this.updateUser.valid) {
          console.log(this.updateUser.value);
          console.log("error");
          return false;
        } else { console.log(this.updateUser.value);
  
          this.API.updateSingleUser(this.userId, this.updateUser.value)
            .subscribe((res) => {
              console.log(res);
              this.showAlert(res);
              this.router.navigate(['/user-profile/'+this.userId]);
            })
        }
      }
     
      async showAlert(res:any) { 
        const alert = await this.alertCtrl.create({ 
        header: 'Alert', 
        subHeader: 'Create', 
        message: res+' '+this.user.userName, 
        buttons: ['OK'] 
        }); 
        await alert.present(); 
        const result = await alert.onDidDismiss();  
        console.log(result); 
      }
}
