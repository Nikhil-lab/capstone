import { Injectable} from '@angular/core';
//import { Init } from "./initial-products";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductsService {
	
	
	
	 private _productsUrl = "http://localhost:3000/products";
    private count=100;
    private httpOptions = {
        headers: new HttpHeaders({
			
          'Content-Type':  'application/json'
        })
    };
	
	constructor (private _http: HttpClient) { 
	
	console.log("Initializing Products service ...");
	}
	

  getProductCount() {
    let products = this._http.get(this._productsUrl);
	let count=0;
    //return products.length;
	
	var keys = Object.keys(products);
	var len = keys.length;
	console.log("array keys:"+Object.keys(products));
	console.log("array keys:"+len);
	return len;
	
	
  } 

  getProducts() {
    let products = this._http.get(this._productsUrl);
    return products;
  }

  getProduct(id: any) {
	  
	  let URL = `${this._productsUrl}/${id}`;
        return this._http.get(URL);

  }

 addProduct(newProduct: any) {
    let products = newProduct;
     return this._http.post(this._productsUrl, products, this.httpOptions);
    
  }

  updateProduct(updatedProduct: any) {
    
	console.log("updating...");
	console.log(updatedProduct.description);
	console.log(updatedProduct.id)
	let editproductsURL = `${this._productsUrl}/${updatedProduct.id}`;
     return this._http.put(editproductsURL,updatedProduct, this.httpOptions);
  }
  
 
	
	
	
  deleteProduct(id: any) {

	 let deleteProductsURL = `${this._productsUrl}/${id}`;
        return this._http.delete(deleteProductsURL);
	

  } 
}
