import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 @Input() products: any[];
 @Output() send = new EventEmitter<any>();
 productClicked='';
  constructor() { }
  ngOnInit() {
    console.log("child222",this.products);
  }
  cartify(product){
  
  product.cart=true;
  
  this.send.emit(product);

  }

  
}
