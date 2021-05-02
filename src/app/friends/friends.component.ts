import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
 //all users
 amy = new User('Amy', '/assets/images/resources/admin.jpg');
 alexis = new User('Alexis', '/assets/images/resources/nearly1.jpg');
 sarah = new User('Sarah', '/assets/images/resources/nearly6.jpg');
 trump = new User('Trump', '/assets/images/resources/trump.jpg');
 mechichi = new User('Mechichi', '/assets/images/resources/mechichi1.png');
 
Follow="Follow";
Unfollow="Unfollow";
 /* Follow="Follow";Unfollow="Unfollow;"
  change(name:string):void {
  let état=this.f_u.get(name);
  this.f_u.get(name)=!état;
}*/
  

  is_followed(username0:string):boolean{
   if(this.followings.has(username0))
      return true;

  else  return false;
  }


  followings = new Map<string, string>([
    [this.amy.userName, this.amy.userIconURL],
    [this.alexis.userName, this.alexis.userIconURL],
    [this.sarah.userName, this.sarah.userIconURL]
  ]);
 
  followers = new Map<string, string>([
    
    [this.trump.userName, this.trump.userIconURL],
    [this.mechichi.userName, this.mechichi.userIconURL],
    [this.amy.userName, this.amy.userIconURL]
  ]);

  f_u = new Map<string, boolean>([
    [this.amy.userName, this.is_followed(this.amy.userName)],
    [this.alexis.userName,this.is_followed(this.alexis.userName)],
    [this.sarah.userName, this.is_followed(this.sarah.userName)]
  ]);



  constructor() { }
  remove(name:string):void{
    this.followings.delete(name);
    let etat=this.f_u.get(name);
    this.f_u.delete(name);
    this.f_u.set(name,!etat);
    console.log(this.f_u);console.log(this.followings);
       }
  add(name:string):void{
        this.followings.set(name,this.users.get(name));
        let etat=this.f_u.get(name);
        this.f_u.delete(name);
        this.f_u.set(name,!etat);
        console.log(this.f_u);console.log(this.followings)
           }
  
  users = new Map<string, string>([
    [this.amy.userName, this.amy.userIconURL],
    [this.alexis.userName, this.alexis.userIconURL],
    [this.sarah.userName, this.sarah.userIconURL],
    [this.trump.userName, this.trump.userIconURL],
    [this.mechichi.userName, this.mechichi.userIconURL]
  ]);

  
  ngOnInit(): void {
  }

}
