import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { ProBrandComponent } from './pro-brand/pro-brand.component';
import { ProCategoryComponent } from './pro-category/pro-category.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RevDetailsComponent } from './rev-details/rev-details.component';
import { RevAuthorComponent } from './rev-author/rev-author.component';
import { RevAllComponent } from './rev-all/rev-all.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProDetailsComponent,
    ProBrandComponent,
    ProCategoryComponent,
    ReviewsComponent,
    RevDetailsComponent,
    RevAuthorComponent,
    RevAllComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
