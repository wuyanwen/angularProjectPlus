# AngularProjectPlus
##### 项目源码地址： https://github.com/wuyanwen/angularProjectPlus.git 喜欢的欢迎star
#### 1.angular4的优点
> angular是一个比较完善的前端MVC框架，包含了模板，数据双向绑定，路由，服务，过滤器，依赖注入等等所有的功能，基本上只要你做web开发，angular都会提供一个，换句话说，相对于一些其它的只关注前端某一方面的框架来说，学习angluar这么一个框架，往框架里填东西，基本上可以搞定前端开发的所有问题。
---

![image](http://note.youdao.com/yws/public/resource/ebfb116af6c843a652ade1443c36785b/xmlnote/1FE386FF2A924093AEE8EA1D174061F9/9802)
---
>
#### 2.全新的命令行工具Angular CLI
> angular官方开发团队提供的一个命令行工具,可以生成一个新项目的骨架，或者生成我们需要的组件的基础代码，或者做为一个开发调试服务器构建部署运行我们的代码,自动化的单元测试等等。
---

#### 3.搭建angular开发环境
```
#全局安装 Angular CLI (可以例用 ng -v 查看安装的版本信息)
npm install -g @angular/cli
```
#### 4.创建项目
```
ng new angularProjectPlus 
```
>如果在后面加上 --routing参数，会在app目录下面多出来一个路由配置app-routing.module.ts文件,同时在app.module.ts文件中自动引入生成的路由配置文件，同时在app.component.html中引入<router-outlet></router-outlet>(注意本项目生成时没用这个参数，后面咱们是手写的，便于学习)
#### 5.启动开发服务器
```
cd angularProjectPlus
ng serve --open
```
> ng serve命令会启动开发服务器，监听文件变化，并在修改这些文件时重新构建此应用。使用--open（或-o）参数可以自动打开浏览器并访问http://localhost:4200/。应用会用一条消息来跟你打招呼：Welcome to app如下图!
---
![image](https://www.angular.cn/generated/images/guide/cli-quickstart/app-works.png)

#### 6.angular启动过程

>通过项目根目录下的angular-cli.json文件可以发现启动js文件位于src文件夹下的main.ts,页面的入口文件位于src文件夹下的index.html

####  7.实战开始
#####  7.1.开发准备:引入第三方库,jquery及bootstrap
```
npm install jquery --save
npm install @types/jquery --save-dev
npm install bootstrap --save
npm install @types/bootstrap --save-dev
```
> @types/jquery和@types/bootstrap,因为Angular是使用TypeScript语言开发的，而jquery本质是JavaScript，TypeScript是不能直接使用的。我们需要先安装类型描述文件，让TypeScript认识jquery,bootstrap
---

同时安装完上面的包之后，需要到根目录下找到.angular-cli.json文件，把其中的 "scripts": []修改成如下：
```
"scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
同时需要把.angular-cli.json文件中的"styles": ["styles.css"]修改成如下：
```
 "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
 ],
```
> ~~安装完成后，修改src目录下的tsconfig.app.json文件，将jquery添加到types数组中。把其中的"types": []修改成如下(此步现在最新版本已经不需要改了)~~：
```
 "types": ["jquery"]
```
#####  7.2.生成项目组件
```
ng g component navbar
ng g component footer
ng g component carousel
ng g component product
ng g component stars
ng g component search
ng g component home
ng g component product-detail
 
```
>以上生成了页面的八个组件，每个组件都有相对应的组件的html页面，可以在入口页面app.component.html中加入组件如下代码（本项目用的是bootstrap样式）：
```
<app-navbar></app-navbar>
<div class="container">
  <div class="row">
    <div class="col-md-3">
      <app-search></app-search>
    </div>
    <div class="col-md-9">
      <div class="row carousel-container">
        <app-carousel></app-carousel>
      </div>
      <div class="row">
        <app-product></app-product>
      </div>
    </div>
  </div>
</div>
<app-footer></app-footer>
```
>其中组件如果是动态，需要循环数据的时候，会用到angular的循环标签*ngFor，父子组件之间传值会用到angular里的@Input()至此基于angular页面组件方面的工作就到一段落了。
#####  7.3 使用angular路由(创建项目时如果带有--routing参数，会生成下面的这个文件，本项目是手工写入的，只需要修改app.module.ts文件就行)（app-routing.module.ts）
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
> 在const routes: Routes = [];数组里自定义我们的路由即可（带参数用的）。
> app.module.ts文件需要修改的地方如下(本项目用的)：
```
import {RouterModule, Routes} from "@angular/router";
const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductDetailComponent}
];
imports: [
   RouterModule.forRoot(routeConfig)
],
```
> 说到路由，就会让人想起页面之间的传递参数问题，好在angular路由里可以配置参数，如下：
```
<a [routerLink]="['/product', product.id]">{{product.title}}</a>
```
在详情页就可以用如下方式得到ID关在展示层html中显示如下;
```
export class ProductDetailComponent implements OnInit {
  public productId : number;
  
  constructor(private routerInfo: ActivatedRoute) {}
  ngOnInit() {
      //----得到了id,并把它给了productId
      this.productId=this.routerInfo.snapshot.params["id"]
      //----------------------------
  }

}
```
html组件页面中：
```
商品ID为{{productId}}
```
---

#####  7.4 angular依赖注入(DI)
> 学过java的朋友可能更了解，回为java中有个有名的框架springmvc,里面就有依赖注入，不过没关系，js估计也是学习各家语言所长，咱从头开始学。用到两个概念，提供器和注入器
- [x]  app.module.ts文件中一般写提供器(组件中也可以写提供器)如下：
```
providers: [],
```
- [x] 注入器一般写在组件的构造函数中
```
import {ActivatedRoute, Params} from "@angular/router";
constructor(private routerInfo: ActivatedRoute) {}
```
- [x] 生成服务的命令 ng g service shared/product(服务名)
> 本项目中用ng g service shared/product 生成一个产品服务来共享数据，期中用到angular依赖注入，具体本项目配置如下：
##### app.module.ts
```
providers: [ProductService]
```
##### product.component.ts
```
constructor(private productService:ProductService) { }

export class ProductComponent implements OnInit {
  ngOnInit() {
    //service动态注入数据
    this.products=this.productService.getProducts();
  }
}
```
#####  7.5.数据双向绑定和管道
##### 页面如下：
```
<input [(ngmodel)] ="name">
{{name}}
```
> 生成管道的命令是 ng g pipe pipe/multiple
#####  7.6 http通讯
> app.module.ts文件修改如下：
```
import {HttpModule} from "@angular/http";
imports: [
    HttpModule
  ]
```
![image](http://note.youdao.com/yws/public/resource/ebfb116af6c843a652ade1443c36785b/xmlnote/3574DF3266624C999D8CF8E6FDE6E960/10243)
#### ==注意：http请求不是由get方法触发的，是由subscribe方法触发的，所以只写get方法不会在网络中有请求==。


#### 8.构建和部署
- 构建：编译和合并（ng build）
- 部署：与服务器整合
>部署时有一个坑(不加的话刷新页面的话就找不到路由了)，需要在app.module.ts配置如下代码
```
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
```
>另令如果后台接口和前台项目开发的时候不在同一个端口，还需要配置代理文件：新建 proxy.conf.json：
```
{
  "/api": {
    "target": "http://localhost:8000"
  }
}
```
> 并且在package.json文件修改如下：
```
"start": "ng serve --proxy-config proxy.conf.json",
```
- 多环境：一套代码，支持多种环境
#### 9.实践总结
> 你的应用由些什么组件组成，组件之间的父子关系是什么样的，组件之间是如何路由的，组件之间是如何通讯的。组件需要输入什么东西，输出什么东西，动手写代码之前，这些问题必须有明确的答案，画一个组件树出来，让所有开发的人员，有一个共识。制定开发计划。
1. 使用Angular-CLI工具创建一个新项目；
2. 按照你们之前设计的组件关系开始从下往上编写组件；
3. 按照父子关系组装组件并配置路由；
4. 在开发环境下测试应用；
5. 构建应用并部署到测试/生产环境

