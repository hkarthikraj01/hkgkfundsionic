import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  api:any="https://hkgkapi.herokuapp.com/api/HkgkFunds/Transaction/";
  //api:any="https://localhost:5001/api/HkgkFunds/Transaction/";
    constructor(private Http:HttpClient) { }
    Register(data:any){
      return this.Http.post<any>(this.api+'Add',data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }GetSingle
    getAllUser(){
      return this.Http.get<any>(this.api+'GetAll')
      .pipe(map((res:any)=>{
        return res;
      
      }))
    }
    getMyTransaction(data:any){
      return this.Http.get<any>(this.api+'GetMyTransaction/'+data)
      .pipe(map((res:any)=>{
        return res;
      
      }))
    }
    getSingleUser(id:any){
      return this.Http.get<any>(this.api+'GetSingle/'+id)
      .pipe(map((res:any)=>{
        return res;
      
      }))
    }
    updateSingleUser(id:any,data:any){
      return this.Http.put<any>(this.api+'Update/'+id,data)
      .pipe(map((res:any)=>{
        return res;
      
      }))
    }
    deleteSingleUser(id:any){
      return this.Http.delete<any>(this.api+'Delete/'+id)
      .pipe(map((res:any)=>{
        return res;
      
      }))
    }
}
