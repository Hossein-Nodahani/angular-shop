import { Component , OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from "../cart.service"
import { Product } from "../products"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

    items : Product[] = this.cartService.getItems()

    formData = this.formBuilder.group({name : "" , address : ""})

    constructor(private cartService : CartService , private formBuilder: FormBuilder){
    }

    submitHandeler(){
      alert(`your name :  ${this.formData.value.name}  | your addres :  ${this.formData.value.address} `)
      this.cartService.clearCart()
      this.formData.reset()
    }
}
