import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../class/transaction';
import { TransactionService } from '../service/transaction.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  transaction:Transaction[]=[];
  Filter:any="";
    constructor(private API:TransactionService, private route:Router) { } 
    
      ngOnInit(){
        this.API.getAllUser().subscribe(res=>{
          console.log(res);
          this.transaction=res;
        })
        
      }
      //edittransaction
      async viewProfile(id:any) {
    
        this.route.navigateByUrl("/viewtransaction/"+id);
      }
      exportexcel(): void
      {
        /* pass here the table id */
        const workBook = XLSX.utils.book_new(); // create a new blank book
        const workSheet = XLSX.utils.json_to_sheet(this.transaction);
    
        XLSX.utils.book_append_sheet(workBook, workSheet, 'Users Transaction List'); // add the worksheet to the book
        XLSX.writeFile(workBook, 'All Transaction List - '+new Date+'.xlsx');
     
      }
  
}
