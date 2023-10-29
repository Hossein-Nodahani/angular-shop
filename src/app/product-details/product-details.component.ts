import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from "../cart.service"

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit{

  product : Product | undefined

  constructor(private route : ActivatedRoute , private cartService : CartService ){

  }

  addToCart(product : Product ){
    this.cartService.addToCart(product)
    alert(`${product.name} added to your cart!`)
  }

  ngOnInit(){
    // set current product data based on link
    const productId : number = Number(this.route.snapshot.paramMap.get("productId"))
    this.product = products.find( p => p.id === productId)
  }
}
