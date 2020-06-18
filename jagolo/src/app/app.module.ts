import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { AuthModule } from './auth/auth.module';
import { BibleRoutingModule } from './bible/bible-routing.module';
import { BibleModule } from './bible/bible.module';
import { SharedModule } from './shared/shared.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthRoutingModule,
    BibleRoutingModule,
    AppRoutingModule,
    AuthModule,
    BibleModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
