import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

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
 
  modifierClasse(){    this.dynamique="form loading";
  this.Confirmer="";
  this.bien="Récupération en cours";

   let x= setTimeout(()=>{
      this.dynamique="form loading ok";
      this.bien="Bienvenue ";
    },4000);}
  
  constructor() {     let y=setTimeout(()=>{this.ok=true},2000);
}
   ok=false;
  username="";
  recupererid(input){console.log(input.value);
    this.username=input.value;}
  ngOnInit(): void {
  }

}
