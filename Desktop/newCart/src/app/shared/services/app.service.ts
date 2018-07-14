import { Injectable } from '@angular/core';

@Injectable()

export class AppService {
    products :any[];
    cartItems : any[];

    serverAdd(data,products){
        // console.log("app component",eventData);
        // this.cartItems.push(this.data);
        products.map((obj)=>{
          (obj.id == data.id) ? obj.cart=true:null
        });
        console.log('altered',products);
        this.cartItems=[];
        for(let product of products){
          (product.cart ==true)  ? this.cartItems.push(product) : null
        }
        this.products = products;
    }

    getProducts(){
        return this.products;
    }

    getCartItems(){
        return this.cartItems;
    }
    serverremoved(data,products){
        
        products.map((obj)=>{
          (obj.id == data.id) ? obj.cart=false:null
        });
        console.log('altered',products);
         this.cartItems=[];
        for(let product of products){
          (product.cart ==true)  ? this.cartItems.push(product) : null
        }
        this.products = products;
       
    }
   


}