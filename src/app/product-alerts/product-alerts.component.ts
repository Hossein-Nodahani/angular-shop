import { Component , Input  , Output , EventEmitter} from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent {
  
  @Input() productData: Product | undefined;
  @Output() notify = new EventEmitter()

  log() {
    console.log(this.notify)
    alert(this.notify)
  }

}
