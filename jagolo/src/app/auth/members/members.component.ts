import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
    members: User[] = [];
    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.getUsers().subscribe(items => {
            this.members = items;
        });
    }
}
