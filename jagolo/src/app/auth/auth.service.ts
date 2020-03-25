import { Injectable } from '@angular/core';
import { User } from './model/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthError } from './model/authError';
import { UserService } from './user.service';
@Injectable({ providedIn: 'root' })
export class AuthService {
    isAuthenticated = false;
    authChange = new Subject<boolean>();
    loggedUser = new Subject<string>();
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
            .then(userLogin => {
                this.authSuccessfully();
            })
            .catch((err: AuthError) => {
                this.errorMessage.next(err);
            });
    }
    authSuccessfully() {
        this.isAuthenticated = true;
        this.router.navigate(['/home']);
        this.authChange.next(true);
        this.loggedUser.next(this.afAuth.auth.currentUser.displayName);
    }
    logout() {
        this.afAuth.auth.signOut().then(log => {
            this.router.navigate(['/home']);
            this.authChange.next(false);
            this.loggedUser.next('');
            this.isAuthenticated = false;
        });
    }
    isLogged() {
        return this.afAuth.auth.currentUser;
    }
    isAuth(): boolean {
        return this.isAuthenticated;
    }
}
