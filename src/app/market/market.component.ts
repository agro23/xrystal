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
  public whichXrystal: number =0;

  public xrystals:Array<Object> = [
    [
      {"image": "../assets/img/xrystal1.jpg", "id": 1},
      {"image": "../assets/img/xrystal17.jpg", "id": 17},
      {"image": "../assets/img/xrystal5.jpg", "id": 5 },
      {"image": "../assets/img/xrystal33.jpg", "id": 33},
      {"image": "../assets/img/xrystal12.jpg", "id": 12},
      {"image": "../assets/img/xrystal9.jpg", "id": 9},
      {"image": "../assets/img/xrystal41.jpg", "id": 41},
      {"image": "../assets/img/xrystal37.jpg", "id": 37},
      {"image": "../assets/img/xrystal15.jpg", "id": 15}
    ],
    [
      {"image": "../assets/img/xrystal2.jpg", "id": 2},
      {"image": "../assets/img/xrystal18.jpg", "id": 18},
      {"image": "../assets/img/xrystal45.jpg", "id": 45 },
      {"image": "../assets/img/xrystal36.jpg", "id": 36},
      {"image": "../assets/img/xrystal22.jpg", "id": 22},
      {"image": "../assets/img/xrystal29.jpg", "id": 29},
      {"image": "../assets/img/xrystal40.jpg", "id": 40},
      {"image": "../assets/img/xrystal3.jpg", "id": 3},
      {"image": "../assets/img/xrystal16.jpg", "id": 16}
    ],
    [
      {"image": "../assets/img/xrystal8.jpg", "id": 8},
      {"image": "../assets/img/xrystal7.jpg", "id": 7},
      {"image": "../assets/img/xrystal25.jpg", "id": 25 },
      {"image": "../assets/img/xrystal35.jpg", "id": 35},
      {"image": "../assets/img/xrystal21.jpg", "id": 21},
      {"image": "../assets/img/xrystal19.jpg", "id": 19},
      {"image": "../assets/img/xrystal44.jpg", "id": 44},
      {"image": "../assets/img/xrystal27.jpg", "id": 27},
      {"image": "../assets/img/xrystal10.jpg", "id": 10}
    ],
    [
      {"image": "../assets/img/xrystal11.jpg", "id": 11},
      {"image": "../assets/img/xrystal31.jpg", "id": 31},
      {"image": "../assets/img/xrystal14.jpg", "id": 14 },
      {"image": "../assets/img/xrystal30.jpg", "id": 30},
      {"image": "../assets/img/xrystal32.jpg", "id": 32},
      {"image": "../assets/img/xrystal23.jpg", "id": 23},
      {"image": "../assets/img/xrystal42.jpg", "id": 42},
      {"image": "../assets/img/xrystal28.jpg", "id": 28},
      {"image": "../assets/img/xrystal4.jpg", "id": 4}
    ],
    [
      {"image": "../assets/img/xrystal6.jpg", "id": 6},
      {"image": "../assets/img/xrystal13.jpg", "id": 13},
      {"image": "../assets/img/xrystal26.jpg", "id": 26 },
      {"image": "../assets/img/xrystal43.jpg", "id": 43},
      {"image": "../assets/img/xrystal34.jpg", "id": 34},
      {"image": "../assets/img/xrystal24.jpg", "id": 24},
      {"image": "../assets/img/xrystal38.jpg", "id": 38},
      {"image": "../assets/img/xrystal20.jpg", "id": 20},
      {"image": "../assets/img/xrystal39.jpg", "id": 39}
    ]
  ];

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

  goLeft() {
    this.whichXrystal--;
    if(this.whichXrystal < 0 ) { this.whichXrystal = 4 }
    // console.log(this.whichXrystal);
    return this.whichXrystal;
  }

  goRight() {
    this.whichXrystal++;
    if(this.whichXrystal > 4 ) { this.whichXrystal = 0 }
    // console.log(this.whichXrystal);
    return this.whichXrystal;
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
