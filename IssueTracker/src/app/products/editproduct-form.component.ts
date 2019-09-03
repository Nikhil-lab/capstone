import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from "./products.service";

@Component({
  selector: 'editproduct-form',
  templateUrl: './editproduct-form.component.html'
})
export class EditProductFormComponent {
	id: any;
  product: any;
  products:any[];
    addProductsForm: any;

  

  constructor(private _productService: ProductsService, private route: ActivatedRoute, private router: Router) { }
  
  
  getFun(){
	
	this._productService.getProducts().subscribe(
      (x:any) =>  this.products = x,
      err => console.log(err)
    );
	
	
}

  ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
          this.id = +params['id'];
      });
	  
	  console.log("to be edited ID = " + this.id);
	  
     this._productService.getProduct(this.id).subscribe(
		(x:any) =>  this.product = x,
      err => console.log(err)
    );
	  
	  
	  
  }

  onSubmit(formValue: any){

	  
    console.log("Form to be udpated Value = " + JSON.stringify(formValue, null, 4));
    let updatedProduct = {
          id:this.product.id,
          description: formValue.description,
          name: formValue.name,
          manufacturer: formValue.manufacturer,
          price: formValue.price,
          quantity: formValue.quantity
          /*severity: formValue.severity,
          status: formValue.status,
          createdDate: formValue.createdDate,
		  resolvedDate: formValue.resolvedDate*/
        };
		
		console.log("Checking desc = " + updatedProduct.description );
		console.log("updatedProduct.id  = " + updatedProduct.id );
		
    this._productService.updateProduct(updatedProduct).subscribe(
	(x:any) =>  this.router.navigate(['products']),
      err => console.log(err)
	  ); 
	  
    //this.router.navigate(['products']);
  }
}
