import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';


const routes: Routes = [
  {path: 'members', component: MembersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'email', component: EmailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
