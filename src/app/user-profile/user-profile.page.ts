import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Transaction } from '../class/transaction';
import { User } from '../class/user';
import { TransactionService } from '../service/transaction.service';
import { UserService } from '../service/user.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  id:any;
  User:User = new User();
  MyTrasaction:Transaction[]=[];
  Filter:string;
    constructor(private route:Router,private API:UserService,private API2:TransactionService,private arouter:ActivatedRoute,private router:Router,private alertCtrl:AlertController) { }
  
    ngOnInit() {
      this.id=this.arouter.snapshot.paramMap.get("id");
      console.log(this.id);
      this.API.getSingleUser(this.id).subscribe(res=>{
        console.log(res);
        this.User=res;
      })
      this.API2.getMyTransaction(this.id).subscribe(res=>{
        console.log(res);
        this.MyTrasaction=res;
      })
    }
    deleteUser(id){
      this.API.deleteSingleUser(this.id).subscribe(res=>{
        console.log(res);
       this.showAlert(res);
        this.router.navigateByUrl("");
      })
    }
    active:boolean=true;
    nonactive:boolean=false;
    activecolor(){  
     // debugger
  if(!this.active)
  {
   this.active=!this.active;
   this.nonactive=!this.nonactive;
  }
  
   console.log(this.active);
    }
    nonactiveColor(){
      if(!this.nonactive)
      {
       this.active=!this.active;
       this.nonactive=!this.nonactive;
      }
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
    async viewProfile(id:any) {
    
      this.route.navigateByUrl("/viewtransaction/"+id);
    }
    exportexcel(): void
      {
        /* pass here the table id */
        const workBook = XLSX.utils.book_new(); // create a new blank book
        const workSheet = XLSX.utils.json_to_sheet(this.MyTrasaction);
    
        XLSX.utils.book_append_sheet(workBook, workSheet, this.User.userName+' Transaction List'); // add the worksheet to the book
        XLSX.writeFile(workBook, this.User.userName+' Transaction List - '+new Date+'.xlsx');
     
      }
  }
