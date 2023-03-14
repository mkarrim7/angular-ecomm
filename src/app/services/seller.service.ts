import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { logIn, signUp } from '../data-type';
import{Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  inValid=new EventEmitter<boolean>(false);
 sellerService:boolean=false;
  constructor(private http:HttpClient,private router:Router) { }
  userSignUp(data:signUp){
     this.http.post('http://localhost:3000/seller',data).subscribe(result=>{
      if(result)
      {
        
        localStorage.setItem("seller",JSON.stringify(result));
       
      }
    })
  }
 
  reloadSeller()
  {
    if(localStorage.getItem('seller'))
    {
      this.sellerService=true;
      this.router.navigate(['seller-home']);
    }
  }
  loginUser(data:logIn){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
   {observe:'response'}).subscribe((result:any)=>{
    if(result && result.body && result.body.length===1)
    {
      this.inValid.emit(false);
      localStorage.setItem("seller",JSON.stringify(result));
      this.router.navigate(['seller-home']);
    }
    else{
      this.inValid.emit(true);
    }
    })
  }
}
