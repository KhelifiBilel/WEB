import { Component, OnInit } from '@angular/core';
import {InteractService} from '../interact.service';
import { AuthentLogService } from '../services/authent-log.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  constructor(public interact: InteractService,
              public auth:AuthentLogService) {
              

               }

  ngOnInit(): void {
    this.interact.loadFollowers();
    this.interact.loadFollowing();
  }

}
