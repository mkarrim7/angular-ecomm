import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import{ product } from '../data-type';
import{ faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {

  deleteMessage:undefined|string;
  product:undefined|product[];
  icon=faTrash;
  iconEdit=faEdit;
  name:undefined|string;
  constructor(private productList:ProductService){
  }
    ProductDetails()
    {
      this.productList.ProductList().subscribe((result)=>{
        this.product=result;  
      })
    }
    delete(id:number)
    {
      this.productList.deleteList(id).subscribe((result)=>{
         if(result)
         {
          this.deleteMessage="Product deleted Successfully";
          this.ProductDetails();
         }
      });
    }
    ngOnInit():void{
      this.ProductDetails();
    }

  }
  



