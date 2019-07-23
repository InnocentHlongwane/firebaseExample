import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class UserService {
 

  constructor() { }

  Login(email, password ){
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }).then ((result)=>{

      console.log("user is logged in");
      
    });

  }
  signUp(name,email,password ){
    console.log(email);
    
   firebase.auth().createUserWithEmailAndPassword(email,password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      
      // ...
   }).then((result) =>{
     console.log(result);
     })
  }
 
  logOut(){
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error.Message);
      
    });
  }

  resetPassword(email){
    var auth =firebase.auth()
    auth.sendPasswordResetEmail(email).then(() => {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
      var errorCode =error.code
      var errorMessage= error.message
      console.log(errorMessage);
      
     
    });
 
  }
}
