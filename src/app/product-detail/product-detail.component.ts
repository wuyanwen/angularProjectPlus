import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public productId : number;
  //(注入器)
  constructor(private routerInfo: ActivatedRoute) {}
  ngOnInit() {
      //----------------------------
      this.productId=this.routerInfo.snapshot.params["id"]
      //----------------------------
  }

}
