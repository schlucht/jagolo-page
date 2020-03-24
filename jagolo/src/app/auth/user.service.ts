import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './model/user';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    errorMessage = new Subject<any>();

    constructor(private db: AngularFirestore) {}

    createUser(id: string, user: User) {
        return this.db
            .doc(`user/${id}`)
            .set({
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                role: user.role
            })
            .catch(err => this.errorMessage.next(err));
    }
    getUsers(): Observable<User[]> {
        return this.db
            .collection('user')
            .valueChanges()
            .pipe(
                map(value => {
                    return value as User[];
                })
            );
    }
}
