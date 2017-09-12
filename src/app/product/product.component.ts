import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/product.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Array<Product>;
  private imgUrl = 'http://placehold.it/320x150';
  constructor(private productService:ProductService) { }

  ngOnInit() {
    //静态返回数据
    // this.products = [
    //   new Product(1,"第一个商品",1.99,3.5,"商品一的详细描述",["电子产品","硬件设备"]),
    //   new Product(2,"第二个商品",2.99,2.5,"商品二的详细描述",["数码产品","移动设备"]),
    //   new Product(3,"第三个商品",3.99,3.0,"商品三的详细描述",["电子产品","硬件设备"]),
    //   new Product(4,"第四个商品",4.99,4.5,"商品四的详细描述",["图书"]),
    //   new Product(5,"第五个商品",5.99,1.5,"商品五的详细描述",["电子产品","硬件设备"]),
    //   new Product(6,"第六个商品",6.99,2.0,"商品六的详细描述",["数码产品","硬件设备"])
    // ]
    //service动态注入数据
    this.products=this.productService.getProducts();
  }


}
export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}
