import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { userInfo } from 'node:os';
import { Observable } from 'rxjs';
import { User } from '../User';
import {Iusers} from "../Iusers";
import { Router } from '@angular/router';

@Injectable(
 // providedIn: 'root'
)
export class AuthentLogService {
  public access:boolean=false;

//sign in
 exist() {
   
   this.access=true;
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

  this.http.get(    
    "http://guinea-pig.ddns.net:5000/api/add/user?"+
    "username="+this.name+"&password="+this.pwd+"&email="+this.email).subscribe();

}
   getuser(){return this.u}//pour oussema

   public _url:string="";
                     
  u;  
  constructor(private http:HttpClient,private router:Router) {}
    getUser():Observable<Iusers>   {
this.http.get(this._url).toPromise().then(data=>{
  this.u=data;
  if (this.u.success){ this.exist();}
  else  this.invalid();
  
  })  
            return this.http.get<Iusers>(this._url);

}
}  