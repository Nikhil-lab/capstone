import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing }  from './app.routing';

import {AboutComponent} from './about/about.component';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [ BrowserModule, FormsModule,HttpClientModule,routing ],
  declarations: [ AppComponent, AboutComponent,LoginComponent,PageNotFoundComponent],
  providers:[ProductsService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



//declarations: [ AppComponent, AboutComponent, ProductsComponent, ProductComponent, AddProductFormComponent, EditProductFormComponent, ProductFilterPipe ],