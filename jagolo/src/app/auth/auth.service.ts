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

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFirestore,
        private router: Router,
        private userDB: UserService
    ) {}
    createUser(user: User) {
        this.afAuth.auth
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(userCredential => {
                user.role = 'user';
                userCredential.user.updateProfile({
                    displayName: user.firstname + ' ' + user.lastname
                });
                this.userDB
                    .createUser(userCredential.user.uid, user)
                    .then(data => {
                        console.log(data);
                    });
                this.authSuccessfully();
            })
            .catch((err: AuthError) => {
                this.errorMessage.next(err);
            });
    }
    loginUser(user: User) {
        this.afAuth.auth
            .signInWithEmailAndPassword(user.email, user.password)
            .then(() => {
                this.authSuccessfully();
            })
            .catch((err: AuthError) => {
                this.errorMessage.next(err);
            });
    }
    authSuccessfully() {
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

    isAuth(): Observable<boolean> {
        const state = new Subject<boolean>();
        this.afAuth.auth.onAuthStateChanged(user => {
            if (user) {
                state.next(true);
            } else {
                state.next(false);
            }
        });
        return state.asObservable();
    }
}
