import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [{
    name:'Jabon',
    code:'AB0123',
    stock:0
  },{
    name:'Test',
    code:'TM234',
    stock: 4
  }];

  constructor() { }

  ngOnInit(): void {
    
  }

  open(){

  }

}
