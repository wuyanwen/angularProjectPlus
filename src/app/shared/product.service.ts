import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  
  constructor() { }
  private products: Product[]=[
    new Product(1,"第一个商品",1.99,3.5,"商品一的详细描述",["电子产品","硬件设备"]),
    new Product(2,"第二个商品",2.99,2.5,"商品二的详细描述",["数码产品","移动设备"]),
    new Product(3,"第三个商品",3.99,3.0,"商品三的详细描述",["电子产品","硬件设备"]),
    new Product(5,"第五个商品",5.99,1.5,"商品五的详细描述",["电子产品","硬件设备"]),
    new Product(6,"第六个商品",6.99,2.0,"商品六的详细描述",["数码产品","硬件设备"])
  ]
  getProducts() {
    return this.products;
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

