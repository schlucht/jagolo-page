import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isLogged = false;
    user = '';
    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.authChange.subscribe(b => {
            this.isLogged = b;
            console.log(b);
        });
        this.authService.loggedUser.subscribe(loggedUser => {
            this.user = loggedUser;
        });
        console.log(this.authService.isLogged());
    }

    logout() {
        this.authService.logout();
    }
}
