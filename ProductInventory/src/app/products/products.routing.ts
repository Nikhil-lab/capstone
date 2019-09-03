import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { AddProductFormComponent } from './addproduct-form.component';
import { EditProductFormComponent } from './editproduct-form.component';
import { ProductDetailGuardService } from './product-detail-guard.service';
import { AddProductGuardService } from './addproduct-guard.service';



const productsRoutes: Routes = [
  
  { path: '', component: ProductsComponent },
  { path: 'addProduct', component: AddProductFormComponent,canActivate:[ProductDetailGuardService],canDeactivate: [AddProductGuardService]},
  { path: 'editProduct/:id', component: EditProductFormComponent,canActivate:[ProductDetailGuardService]},
  { path: ':id', component: ProductComponent,canActivate:[ProductDetailGuardService] }
  
  
  
 /*{ 
    path: 'products', 
    children: [
      
      { path: '', component: ProductsComponent },
  { path: 'addProduct', component: AddProductFormComponent},
  { path: 'editProduct/:id', component: EditProductFormComponent},
  { path: ':id', component: ProductComponent }
    ]
  }*/
  
];

@NgModule({
  imports: [
    RouterModule.forChild(productsRoutes)
  ],
  exports: [ RouterModule ]
})

export class ProductsRoutingModule { }
