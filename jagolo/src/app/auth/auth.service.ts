import { Injectable } from '@angular/core';
import { User } from './model/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';

import { AuthError } from './model/authError';
import { UserService } from './user.service';
@Injectable({ providedIn: 'root' })
export class AuthService {
    errorMessage = new Subject<AuthError>();

    constructor(private router: Router, private userDB: UserService) {}
    createUser(user: User) {}
    loginUser(user: User) {
        this.userDB
            .confirmUser('lothar', 'schlucht')
            .subscribe((next) => console.log(next));
    }
    /*authSuccessfully() {
        this.router.navigate(['/home']);
    }
    logout() {
        this.afAuth.auth.signOut().then(log => {
            this.router.navigate(['/home']);
        });
    }

    loggedUser(): Observable<string> {
        const name = new Subject<string>();
        this.afAuth.auth.onAuthStateChanged(user => {
            if (user) {
                name.next(user.displayName);
            } else {
                name.next('');
            }
        });
        return name.asObservable();
    }
*/
    isAuth(): Observable<boolean> {
        const state = new Subject<boolean>();
        /*this.afAuth.auth.onAuthStateChanged(user => {
            if (user) {
                state.next(true);
            } else {
                state.next(false);
            }
        });*/
        return state.asObservable();
    }
}
