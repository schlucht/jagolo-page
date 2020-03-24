import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'email', component: EmailComponent },
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
