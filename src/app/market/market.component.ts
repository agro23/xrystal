import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  public myInterval: number = 1000;
  public activeSlideIndex: number = 0;
  public noWrapSlides:boolean = false;

  public slides:Array<Object> = [
    {"image": "../assets/img/xrystal1.jpg", "id": 1},
    {"image": "../assets/img/xrystal17.jpg", "id": 17},
    {"image": "../assets/img/xrystal5.jpg", "id": 5 },
    {"image": "../assets/img/xrystal33.jpg", "id": 33},
    {"image": "../assets/img/xrystal12.jpg", "id": 12},
    {"image": "../assets/img/xrystal9.jpg", "id": 9},
    {"image": "../assets/img/xrystal41.jpg", "id": 41},
    {"image": "../assets/img/xrystal37.jpg", "id": 37},
    {"image": "../assets/img/xrystal15.jpg", "id": 15}
  ];

  constructor(private router: Router) { }

  activeSlideChange(){
      console.log(this.activeSlideIndex);
  }

  // public slides:Array<Object> = [
  //     {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"},
  //     {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg"},
  //     {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg"},
  // ];

  ngOnInit() {
  }

  purchaseMarketXrystal(clickedXrystal) {
     this.router.navigate(['purchase', clickedXrystal]);
   };
}
