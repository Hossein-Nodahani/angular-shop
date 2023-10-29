import { Component  , OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from "../cart.service"

@Component({
  selector: 'app-shiping',
  templateUrl: './shiping.component.html',
  styleUrls: ['./shiping.component.css']
})
export class ShipingComponent {

  items!: Observable<{ type: string, price: number }[]>;

  constructor( private cartService :CartService){
  }

  ngOnInit(){
    this.items = this.cartService.getShipingPrices()
  }

}
