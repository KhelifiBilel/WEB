import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';
import { DirectiveDirective } from './directive.directive';
import { AccueilComponent } from './accueil/accueil.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    DirectiveDirective,
    AccueilComponent,
    Login2Component,
    Login3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
