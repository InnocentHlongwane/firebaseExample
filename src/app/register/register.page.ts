import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
name
email
password
  constructor(public userService:UserService) { }

  ngOnInit() {
  }
register(){
  this.userService.signUp(this.name,this.email, this.password)
}
}
