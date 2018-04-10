import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})

export class PurchaseComponent implements OnInit {
  private xrystalId;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.xrystalId = parseInt(urlParameters['id']);
      console.log("id = " + this.xrystalId);
    });
  }

}
