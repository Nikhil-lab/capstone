import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from "./products.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'addproduct-form',
  templateUrl: './addproduct-form.component.html'
})
export class AddProductFormComponent {

  products: any[];
  //@ViewChild('formRef', {static: false}) addEmployeeForm:NgForm;
  @ViewChild('formRef') addProductsForm:NgForm;

  constructor(private _productService: ProductsService, private router: Router) { }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    

    console.log("description 2ND TIME:"+formValue.description)
    let newProduct = {
		
          name: formValue.name,
          description: formValue.description,
          manufacturer: formValue.manufacturer,
          price: formValue.price,
          quantity: formValue.quantity, 
        };
		
		//console.log("NewProduct ID = " + this.count);
		
    this._productService.addProduct(newProduct).subscribe(
	(x:any) =>  this.router.navigate(['products']),
      err => console.log(err)
	
	);
    
  }
}
