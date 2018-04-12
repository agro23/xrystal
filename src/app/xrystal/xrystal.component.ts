import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xrystal',
  templateUrl: './xrystal.component.html',
  styleUrls: ['./xrystal.component.scss']
})
export class XrystalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goToGenerate() {
     this.router.navigate(['store-top']);
  };

  goToMarket() {
     this.router.navigate(['market']);
  };

  goToVisualizer() {
     this.router.navigate(['visualizer']);
  };

}
