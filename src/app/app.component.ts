import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xrystal Top Page';

  constructor(private router: Router) { }

  loginFake(){
    alert("Let's pretend you logged in here.");
  }

}
