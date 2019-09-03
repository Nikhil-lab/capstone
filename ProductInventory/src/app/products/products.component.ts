import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./products.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[];

  constructor(private _productService: ProductsService,private _authService: AuthService, private route: ActivatedRoute, private router: Router) { }

 
getFun(){ 


	this._productService.getProducts().subscribe(
      (x:any) =>  this.products = x,
      err => console.log(err)
    );
	
}
  ngOnInit() {
     this.getFun();
  }
  
  

  deleteProduct(empid: any) {

    if (this._authService.isLoggedIn()) {
      console.log("Yes, the route can be activated as we are already logged in.");

      console.log("ID to be delted:"+empid);

      this._productService.deleteProduct(empid).subscribe(
	
    	(data:any) => this.getFun(),
	    err => console.log(err)
      );
	
	
     this.router.navigate(['products'])
  } 
  
  else {
      console.log("CANNOT ACTIVATE the route until logged in...");
      this.router.navigate(['login']);
      return false;
  }
	  
	  
 }

}
