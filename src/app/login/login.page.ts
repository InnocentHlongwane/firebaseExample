import { Component, OnInit, ErrorHandler } from '@angular/core';
import { UserService } from '../user.service';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { AlertController } from '@ionic/angular';
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email
password
  //alertCtrl: any;
  constructor(public userService:UserService,public alertController:AlertController ) { }

  ngOnInit() {
  }
  Login(){

  this.userService.Login(this.email, this.password)
  }
  async resetpassword(){
    var alert =await this.alertController.create({
      header :'reset password',
      inputs :[{
        name:'email',
        type: 'text',
        placeholder :'please enter your password'
      }],
      buttons: [{
        text :'cancel',
        role: 'cancel',
        handler : ()=> {
          console.log('confirm cancel')
        }
      },{
        text:'ohk',
        handler:(email)=>{
          this.userService.resetPassword(email.email)
          console.log(email);
         
        }
      }]
    });
    await alert.present();
  }

  
}