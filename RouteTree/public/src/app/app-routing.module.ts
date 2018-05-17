import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { ProBrandComponent } from './pro-brand/pro-brand.component';
import { ProCategoryComponent } from './pro-category/pro-category.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RevDetailsComponent } from './rev-details/rev-details.component';
import { RevAuthorComponent } from './rev-author/rev-author.component';
import { RevAllComponent } from './rev-all/rev-all.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent,
    children: [
    { path: 'details/:id', component: ProDetailsComponent },
    { path: 'brand/:brand', component: ProBrandComponent },
    { path: 'category/:cat', component: ProCategoryComponent },]
  },
  { path: 'reviews', component: ReviewsComponent,
    children: [
    { path: 'details/:id', component: RevDetailsComponent },
    { path: 'author/:id', component: RevAuthorComponent },
    { path: 'all/:id', component: RevAllComponent},]
  },
  { path: '', pathMatch: 'full', redirectTo: 'products'},
  { path: '**', redirectTo: 'products'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
