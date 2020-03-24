import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
    authError: any;

    registerForm = new FormGroup({
        firstname: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        passwordConfirm: new FormControl('', [Validators.required])
    });

    constructor(private authService: AuthService) {}

    ngOnInit(): void {}

    onSubmit() {
        this.authService.createUser(this.registerForm.value);
        this.authService.errorMessage.subscribe(err => (this.authError = err));
    }
}
