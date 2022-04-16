import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Transaction } from '../class/transaction';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-user-transaction',
  templateUrl: './user-transaction.page.html',
  styleUrls: ['./user-transaction.page.scss'],
})
export class UserTransactionPage implements OnInit {
  id:any;
  Filter:any="";
  User:Transaction = new Transaction();
  constructor(private route:Router,private API:TransactionService,private arouter:ActivatedRoute,private router:Router,private alertCtrl:AlertController) { }

  ngOnInit() {
    this.id=this.arouter.snapshot.paramMap.get("id");
    console.log(this.id);
    this.API.getSingleUser(this.id).subscribe(res=>{
    console.log(res);
    this.User=res;
    })
  }
  active:boolean=true;
  nonactive:boolean=false;
  activecolor(){  
   // debugger
   this.route.navigateByUrl("/user-profile/"+this.User.autoNumber);
  }
 
  deleteUser(id){
    this.API.deleteSingleUser(this.id).subscribe(res=>{
      console.log(res);
     this.showAlert(res);
      this.router.navigateByUrl("/viewalltransaction");
    })
  }
  async showAlert(res:any) { 
    const alert = await this.alertCtrl.create({ 
    header: 'Alert', 
    subHeader: 'Delete', 
    message: res+' '+this.User.userName, 
    buttons: ['OK'] 
    }); 
    await alert.present(); 
    const result = await alert.onDidDismiss();  
    console.log(result); 
  }
}