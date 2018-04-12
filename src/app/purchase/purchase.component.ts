import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { MessagerService } from '../messager.service'; // stole this
import { User } from '../models/user';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  providers: [MessagerService]
})

export class PurchaseComponent implements OnInit {
  private xrystalId;
  message: string; // stole this
  price: string;

  constructor(private router: Router, private route: ActivatedRoute, private data: MessagerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.xrystalId = parseInt(urlParameters['id']);
      console.log("id = " + this.xrystalId);
    });
    this.data.currentMessage.subscribe(message => this.message = message) // stole this
    // this.price = this.message.price;
  }

  newMessage(msg) {
    this.data.changeMessage(msg) // stole this
  }

  passMyData(){

  }

  buyXrystal(boughtXrystal){

  }

}
/*
import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-sibling',
  template: `
    {{message}}
    <button (click)="newMessage()">New Message</button>
  `,
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

}

*/
