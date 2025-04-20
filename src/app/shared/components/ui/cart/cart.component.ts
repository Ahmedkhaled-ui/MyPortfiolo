import {
  afterNextRender,
  Component,
  Input,
  input,
  signal,
  WritableSignal,
} from '@angular/core';

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
  @Input() 'darkColor': string;

  isDarkMode(): boolean {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false; // أو القيمة اللي تناسب الوضع الافتراضي
  }
}
