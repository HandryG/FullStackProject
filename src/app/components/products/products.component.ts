import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product.model';
import { RegisterProductsComponent } from '../register-products/register-products.component';

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

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }

  open(){
    const modalRef = this.modalService.open(RegisterProductsComponent);
  }

}
