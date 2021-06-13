import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { userInfo } from 'node:os';
import { Observable } from 'rxjs';
import { User } from '../User';
import { Router } from '@angular/router';

@Injectable(
 // providedIn: 'root'
)
export class AuthentLogService {
  public access:boolean=false;

//sign in
 exist() {
   
   this.access=true;
   let user_hash=this.u.user_hash;
   let secret_hash=this.u.secret_hash;
   localStorage.setItem('token',user_hash+"-"+secret_hash);
    this.router.navigate(['/home']);
                    }
 invalid(){
   alert(this.u.error);
 }                   

    //signup              
public email;name;pwd;
signup(email,name,pwd){
  this.email=email;
  this.name=name;
  this.pwd=pwd;
   
  let request= "http://guinea-pig.ddns.net:5000/api/add/user?"+
             "username="+this.name+"&password="+this.pwd+"&email="+this.email;
  let response;
    this.http.get(request).subscribe(data=>{
    response=data;
      if (response.success)alert(this.name+" : Welcome to our network");
      else alert("Error : "+response.error);
    })
      
}
   getuser():User{return this.u}

   public _url:string="";
                     
  u;  
  constructor(private http:HttpClient,private router:Router) {}
   
  getUser(){
   this.http.get(this._url).toPromise().then(data=>{
    this.u=data;
    if (this.u.success) this.exist();
    else {this.invalid();}
  
  })  
         

}

}  