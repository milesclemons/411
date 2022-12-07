import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
readonly FoodUrl = "https://foodish-api.herokuapp.com";


  constructor(private http:HttpClient) { }

  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/employee/');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl + '/employee/',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl + '/employee/',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl + '/employee/'+val);
  }

  getFoodPic(val:string){
    return this.http.get<any[]>(this.FoodUrl + '/api/images/'+val);  
  }

  /** 
  getCurrentUser():Observable<any[]>{
    var User = []

    //User = this.getEmpList().subscribe(data=>{
     // this.User=data;
    //})
    ///User = this.http.get<any[]>(this.APIUrl + '/employee/');
    return User[-1];
  }
  */
}
