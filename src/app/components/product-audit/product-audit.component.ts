import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-audit',
  templateUrl: './product-audit.component.html',
  styleUrls: ['./product-audit.component.css']
})
export class ProductAuditComponent implements OnInit {

  products : Product[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
