import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  constructor(private product:ProductService){

  }
addProductmessage:string|undefined;
  submit(data:product)
  {
    console.warn(data);
    this.product.addProduct(data).subscribe((result)=>{
      if(result)
      this.addProductmessage='Product added successfully';
    });
    setTimeout(() => {
      this.addProductmessage=undefined;
    },3000);
  }
}
