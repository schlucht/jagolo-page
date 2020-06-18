import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './model/user';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { ConfigService } from '../shared/config.service';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    errorMessage = new Subject<any>();

    constructor(private http: HttpClient, private config: ConfigService) {}

    createUser(id: string, user: User) {
        return this.http
            .post(`${this.config.getAPI()}user/${id}`
            ,{
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                role: user.role
            })
            
    }
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.config.getAPI()}user/`);          
            
    }
}
