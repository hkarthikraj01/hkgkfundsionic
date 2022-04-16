import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Transaction } from '../class/transaction';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-edittransaction',
  templateUrl: './edittransaction.page.html',
  styleUrls: ['./edittransaction.page.scss'],
})
export class EdittransactionPage implements OnInit {
  transactionId:any;
  transaction:Transaction=new Transaction();
  updateTransaction:FormGroup;
    constructor(private API: TransactionService,
      private actRoute: ActivatedRoute,
      private router: Router,
      public fb: FormBuilder,
      private alertCtrl:AlertController) { }
      date:Date=new Date();
    ngOnInit() { 
      this.transactionId=this.actRoute.snapshot.paramMap.get('id');
      this.API.getSingleUser(this.transactionId).subscribe(res=>{
        this.transaction=res;
        this.updateTransaction =this.fb.group({
        id:new FormControl(this.transaction.id),
        transactionId : new FormControl(this.transaction.transactionId),
        userName :  new FormControl(this.transaction.userName,[Validators.required,Validators.minLength(1)]) ,
        place :  new FormControl(this.transaction.place,[Validators.required,Validators.minLength(1)]) ,
        autoNumber :   new FormControl(this.transaction.autoNumber,[Validators.required,Validators.minLength(1)]) ,
        amountRecived :   new FormControl(this.transaction.amountRecived,[Validators.required,Validators.minLength(1)]) ,
        recivedBy :  new FormControl(this.transaction.recivedBy,[Validators.required,Validators.minLength(1)]) ,
        recivedDate :  new FormControl(this.transaction.recivedDate,[Validators.required,Validators.minLength(1)]) ,
        userBalanceAmount :  new FormControl(this.transaction.userBalanceAmount,[Validators.required,Validators.minLength(1)]) ,
        gienBy :   new FormControl(this.transaction.gienBy,[Validators.required,Validators.minLength(1)]) ,
      })
      this.date=this.transaction.recivedDate;
    })
        
        this.updateTransaction =this.fb.group({
  
          id:new FormControl(this.transaction.id),
      transactionId : new FormControl(this.transaction.transactionId),
         userName :  new FormControl(this.transaction.userName,[Validators.required,Validators.minLength(1)]) ,
          place :  new FormControl(this.transaction.place,[Validators.required,Validators.minLength(1)]) ,
          autoNumber :   new FormControl(this.transaction.autoNumber,[Validators.required,Validators.minLength(1)]) ,
          amountRecived :   new FormControl(this.transaction.amountRecived,[Validators.required,Validators.minLength(1)]) ,
        //
        recivedBy :  new FormControl(this.transaction.recivedBy,[Validators.required,Validators.minLength(1)]) ,
        recivedDate :  new FormControl(this.transaction.recivedDate,[Validators.required,Validators.minLength(1)]) ,
         // 
         userBalanceAmount :  new FormControl(this.transaction.userBalanceAmount,[Validators.required,Validators.minLength(1)]) ,
         //
         gienBy :   new FormControl(this.transaction.gienBy,[Validators.required,Validators.minLength(1)]) ,
          //
         
    
        })
        console.log(this.date);
    }
    updateTransactionForm(){
  
      if (!this.updateTransaction.valid) {
        console.log(this.updateTransaction.value);
        console.log("error");
        return false;
      } else { console.log(this.updateTransaction.value);
  
        this.API.updateSingleUser(this.transactionId, this.updateTransaction.value)
          .subscribe((res) => {
            console.log(res);
            this.showAlert(res);
            this.router.navigate(['/viewtransaction/'+this.transactionId]);
          })
      }
    }
    
      async showAlert(res:any) { 
        const alert = await this.alertCtrl.create({ 
        header: 'Alert', 
        subHeader: 'Create', 
        message: res+' '+this.transaction.userName, 
        buttons: ['OK'] 
        }); 
        await alert.present(); 
        const result = await alert.onDidDismiss();  
        console.log(result); 
      }

}
