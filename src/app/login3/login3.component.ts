import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {
 dynamique="login";
  constructor() { }
  modifierClasse(){    this.dynamique="login loading";

   let x= setTimeout(()=>{
      this.dynamique="login loading ok";
    },5000);
   // this.dynamique="login loading";
  }
  ngOnInit(): void {
  }

}
