import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    authError: any;

    loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit(): void {}
    onSubmit() {
        this.authService.loginUser(this.loginForm.value);
        this.authService.errorMessage.subscribe(err => (this.authError = err));
    }
}
