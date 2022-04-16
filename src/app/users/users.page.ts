import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../class/user';
import { UserService } from '../service/user.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
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
  exportexcel(): void
      {
        /* pass here the table id */
        const workBook = XLSX.utils.book_new(); // create a new blank book
        const workSheet = XLSX.utils.json_to_sheet(this.user);
    
        XLSX.utils.book_append_sheet(workBook, workSheet, 'Users List'); // add the worksheet to the book
        XLSX.writeFile(workBook, 'All Users List - '+new Date+'.xlsx');
     
      }
}
