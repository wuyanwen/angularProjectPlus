import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductService} from "./shared/product.service";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FilterPipe } from './pipe/filter.pipe';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HttpModule} from "@angular/http";
const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductDetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    SearchComponent,
    HomeComponent,
    ProductDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ProductService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
