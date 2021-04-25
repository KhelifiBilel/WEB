import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

   movee(){  this.animation="container sign-up-mode"; 
            }
   move(){  this.animation="container";  }
  animation="container";
  
  dynamique="form";
  Confirmer="Confirmer";
  bien="";
 
  modifierClasse(){    this.dynamique="form loading";
  this.Confirmer="";
  this.bien="Récupération en cours";

   let x= setTimeout(()=>{
      this.dynamique="form loading ok";
      this.bien="Bienvenue "+this.username;
    },3000);}
  
  constructor() {  }
   
  username="";
  recupererid(input){console.log(input.value);
    this.username=input.value;}
  ngOnInit(): void {
  }

}
