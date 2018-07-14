import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Input} from '@angular/core';
import { test_products } from '../shared/Data/test-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class cartComponent implements OnInit{
 @Input() cartItem= new Array();
 @Output() send = new EventEmitter<any>();
  // cartStatus=false;
  productRemoved='';
// cartify(product){
// this.  cartStatus=true;
// }
  ngOnInit(){
    console.log("ch111",this.cartItem);  
  }
  constructor()
  { console.log("child11111",this.cartItem);  
  }

  remove(){
    console.log("remove")
  }


  
decartify(product){
console.log('abcdf',product);
  //  this.productRemoved='removed from cart';
  this.send.emit(product);

  }

}
