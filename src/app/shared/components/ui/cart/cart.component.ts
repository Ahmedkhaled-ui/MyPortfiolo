import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  @Input() 'head': string;
  @Input() 'desc': string;
  @Input() 'date': string | undefined;
  @Input() 'color': string;
}
