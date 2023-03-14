import { Component, OnInit } from '@angular/core';
import { logIn, signUp } from '../data-type';
import { SellerService } from '../services/seller.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
 showLogin:boolean=false;
 showInvalid:String='';
 name="I am Manikanta";
  constructor(private seller: SellerService) { }
  signUp(data: signUp) {
    this.seller.userSignUp(data);
  }

  Login(data:logIn){
     this.seller.loginUser(data);
     this.seller.inValid.subscribe((isError)=>{
      if(isError)
      {
        this.showInvalid='Invalid email or password';
      }
     })
  }
  toggleLogin()
  {
    this.showLogin=true;
  }
  togglesignUp()
  {
    this.showLogin=false;
  }

  ngOnInit(){
    this.seller.reloadSeller();
  }
}

