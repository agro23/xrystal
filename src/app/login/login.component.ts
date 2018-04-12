import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  newUser: User;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginForNow(userName){
    this.newUser = new User ("999", userName, []);
    this.router.navigate(['']);

    // this.router.navigate(['store-top']);
  }

}
