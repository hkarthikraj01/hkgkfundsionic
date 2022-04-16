import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Transaction } from '../class/transaction';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.page.html',
  styleUrls: ['./addtransaction.page.scss'],
})
export class AddtransactionPage implements OnInit {
user:Transaction;
TransactionId:any;
addTransaction:FormGroup;
constructor(private API: TransactionService,private actRoute: ActivatedRoute,private router: Router,private fb: FormBuilder,  private alertCtrl:AlertController) {}

  ngOnInit() {
    this.addTransaction = this.fb.group({ 
      //id:new FormControl(this.user.id),
     // userId : new FormControl(this.userId,[Validators.required,Validators.minLength(1)]),
      userName :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
      place :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
      autoNumber :   new FormControl('',[Validators.required,Validators.minLength(1)]) ,
      amountRecived :   new FormControl('',[Validators.required,Validators.minLength(1)]) ,
    //
    recivedBy :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
    recivedDate :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
     // 
     userBalanceAmount :  new FormControl('',[Validators.required,Validators.minLength(1)]) ,
     //
     gienBy :   new FormControl('',[Validators.required,Validators.minLength(1)]) ,
      //
     

    })
  }
  addTransactionForm() {
    if (!this.addTransaction.valid) {
      console.log(this.addTransaction.value);
      console.log("error");
      
      return false;
    } else {
      console.log(this.addTransaction.value)
      this.API.Register(this.addTransaction.value)
        .subscribe((res) => {
          console.log(res);
          this.showAlert(res);
          this.router.navigate(['transactions']);
        })
        this.router.navigate(['transactions']);
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
