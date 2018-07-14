import { Component,Output,Input,EventEmitter} from '@angular/core';
import  {test_products} from "./shared/Data/test-product";
// import  {test_products1} from "./test_product1";
import {AppService} from "./shared/services/app.service"
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit{
  // cartItems=Array();
  // @Input() send:any[];
//  cartItems=[];
  // @Output() cartItems:any[];
  // @Output() cartItems=[];
 cartItems= new Array();
  products;
   data;
   cart;

   constructor(private appservice:AppService){
    this.products = test_products;
  }
  getCartItems(){
    return this.appservice.getCartItems();
  }


onServerAdded(eventData){
  
this.appservice.serverAdd(eventData, this.products);
this.products=this.appservice.getProducts();
this.cartItems=this.appservice.getCartItems();
// console.log('111111',this.cartItems);
}
onServerremoved(eventData){
  
  this.appservice.serverremoved(eventData, this.products);
//  return this.products;//my code
  // this.products=this.appservice.getProducts();
  // this.cartItems=this.appservice.getCartItems();
  
  }
  onSubmit(){
    // <!-- <script>
// Get the modal
// var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// </script> -->
console.log("")
    
  }





  ngOnInit(){
     console.log("app",this.products)
  }
  
}
