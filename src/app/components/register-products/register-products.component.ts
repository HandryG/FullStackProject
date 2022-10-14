import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-products',
  templateUrl: './register-products.component.html',
  styleUrls: ['./register-products.component.css']
})
export class RegisterProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitProduct(registroProducto : NgForm) {
    console.log(registroProducto.value.product);
    console.log(registroProducto.value.code);
    console.log(registroProducto.valid);
  }

}
