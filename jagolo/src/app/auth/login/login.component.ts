import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
// import { moveIn } from '../router.animations'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: [moveIn()],
  // host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

}
