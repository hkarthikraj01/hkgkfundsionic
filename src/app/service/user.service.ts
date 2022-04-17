import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  api:any="https://hkgkapi.herokuapp.com/api/HkgkFunds/User/";
      constructor(private Http:HttpClient) { }
      Register(data:any){
        return this.Http.post<any>(this.api+'Register',data)
        .pipe(map((res:any)=>{
          return res;
        }))
      }
      getAllUser(){
        return this.Http.get<any>(this.api+'GetAll')
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
      userLogin(id:any,password:any){
        return this.Http.delete<any>(this.api+'Login/'+id+','+password)
        .pipe(map((res:any)=>{
          return res;
        
        }))
      }
  }