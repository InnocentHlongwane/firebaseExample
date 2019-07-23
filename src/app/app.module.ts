import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyA3VxRkBfKhcmd-IDj3tAPmcm75tDK5E4s",
  authDomain: "example-678c0.firebaseapp.com",
  databaseURL: "https://example-678c0.firebaseio.com",
  projectId: "example-678c0",
  storageBucket: "",
  messagingSenderId: "1043637633098",
  appId: "1:1043637633098:web:b5da92b3250bc9ba"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
