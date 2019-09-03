import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { AddProductFormComponent } from './addproduct-form.component';
import { EditProductFormComponent } from './editproduct-form.component';
import { ProductFilterPipe } from './products-filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products.routing';
import { ProductDetailGuardService } from './product-detail-guard.service';
import { AddProductGuardService } from './addproduct-guard.service';

@NgModule({
  imports: [ SharedModule,
    ProductsRoutingModule
  ],
  providers:[ProductDetailGuardService,AddProductGuardService],
  declarations: [ ProductsComponent, ProductComponent, AddProductFormComponent, EditProductFormComponent,ProductFilterPipe]
})
export class ProductsModule { }
