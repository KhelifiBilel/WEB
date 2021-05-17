import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../loader.service';
import { AuthentLogService } from '../services/authent-log.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  icon;
  constructor(public load: LoaderService,
              public auth:AuthentLogService ) { 
                console.log("éééé"+this.auth.u);
      //this.icon=this.auth.u.icon;
              }

  ngOnInit(): void { }

}
