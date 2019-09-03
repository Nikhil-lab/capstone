import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { ProductsService } from "./products.service";



@Component({
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    id: any;
    product: any;
    
    constructor(private _productService: ProductsService, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
		
		console.log("product ID  from parameters:"+ this.id);
        this._productService.getProduct(this.id).subscribe(
	(x:any) =>   this.product =x,
      err => console.log(err)
	
	);
	
	console.log("product values"+ this.product.id);
	
		
    }

    goBack(): void {
        this.location.back();
    }
}
