import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    isLogged = false;
    user = '';
    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.isAuth().subscribe((status) => {
            this.isLogged = status;
        });
        /*this.authService.loggedUser().subscribe(loggedUser => {
            this.user = loggedUser;
        });*/
    }

    logout() {
        /*this.authService.logout();*/
    }
}
