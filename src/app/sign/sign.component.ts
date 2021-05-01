import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
  
export class SignComponent implements OnInit {
  //uses here
  offset = "";
  form: FormGroup;
  submitted = false;
  data: any;
  dynamique = "form";
  Confirmer = "Confirmer";
  bien = "";
  forgot_pass = false;
  ok = false;
  username = "";

  //functions here

  movee() {
    this.animation = "container sign-up-mode";
  }

  move() { this.animation = "container"; }
  animation = "container";
  
  
  forgot() { this.forgot_pass = true; }

  signin() { this.forgot_pass = false; }

  modifierClasse() {
    this.dynamique = "form loading";
    this.Confirmer = "";
    this.bien = "Récupération en cours";
    let x = setTimeout(() => {
      this.dynamique = "form loading ok";
      this.bien = "Bienvenue ";
    }, 4000);
  }
  
  constructor(private formBuilder: FormBuilder, private dataservice: DataService,
    private toastr: ToastrService) {} 

 
  recupererid(input) {
    console.log(input.value);
    this.username = input.value;
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
    })
  }

  ngOnInit(): void {
    this.createForm();
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.dataservice.registerUser(this.form.value).subscribe(res => {
      this.data = res;
      console.log(res);
    });

  }
}
