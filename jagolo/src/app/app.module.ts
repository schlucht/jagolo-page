import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

const firebaseConfig = {
  apiKey: "AIzaSyDoZyKDdSSPar5RPpJeKyV02DfBr-tN-hc",
  authDomain: "jagolo-page.firebaseapp.com",
  databaseURL: "https://jagolo-page.firebaseio.com",
  projectId: "jagolo-page",
  storageBucket: "jagolo-page.appspot.com",
  messagingSenderId: "758085332382",
  appId: "1:758085332382:web:b824960ec6773cb72a3a8f",
  measurementId: "G-0D9FNCHZ4X"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AppRoutingModule,
    AuthModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
