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
    code:'ABCD1234',
    stock:0
  }];

  constructor() { }

  ngOnInit(): void {
    
  }

}
