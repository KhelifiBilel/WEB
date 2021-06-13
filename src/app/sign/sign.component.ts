import { HtmlAstPath } from '@angular/compiler';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentLogService } from '../services/authent-log.service';
import { User } from '../User';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
   offset="";
   
   movee(){  this.animation="container sign-up-mode"; 
            }
   move(){  this.animation="container";  }
  animation="container";
  
  dynamique="form";
  Confirmer="Confirmer";
  bien="";
  forgot_pass=false;
  forgot() {this.forgot_pass=true;}
  signin(){this.forgot_pass=false;}
  modifierClasse(){    this.dynamique="form loading";
  this.Confirmer="";
  this.bien="Récupération en cours";

   let x= setTimeout(()=>{
      this.dynamique="form loading ok";
      this.bien="Bienvenue ";
    },4000);}
  
  constructor(private _usersService:AuthentLogService,private router:Router) {   
     let y=setTimeout(()=>{this.ok=true},2000);
}
   ok=false;
  



   // public user=[];   //JSON  
     //public current_user;
    
  ngOnInit(): void {
    
  }
              name:String;
              pass:string;url;u;
  loginData(){
    
   this.url="http://guinea-pig.ddns.net:5000/api/authentication?username="+
              this.name+"&password="+this.pass;

this._usersService._url=this.url;
this._usersService.getUser();
    }
//SIGN UP
    email:string;
    username:string; //DATA ENTREE
    pwd:string;    pwdd:string;  //DATA ENTREE
    not_valide=false;

  Register(reg:NgForm){
    if (this.pwd!==this.pwdd){this.not_valide=true;}
    else{
      this.not_valide=false;
      this._usersService.signup(this.email,this.username,this.pwd);
    }
    
  }
  }



