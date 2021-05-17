import { Component } from '@angular/core';
import { AuthentLogService } from './services/authent-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialNetwork';

constructor(public auth:AuthentLogService){
 
}

}
