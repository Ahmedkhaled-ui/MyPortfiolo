import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  input,
  signal,
  WritableSignal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CartComponent } from '../../shared/components/ui/cart/cart.component';
import { Ido } from '../../shared/interfaces/ido';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  group,
} from '@angular/animations';
@Component({
  selector: 'app-home',
  imports: [ButtonModule, PasswordModule, CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('animated', [
      transition(':enter', [
        group([
          query('.animation1', [
            style({ opacity: 0, transform: 'translateY(200px)' }),
            stagger('0ms ease-out', [
              animate(500, style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
          ]),
          query('.animation', [
            style({ opacity: 1, transform: 'translateX(200px)' }),
            stagger('300ms ease-out', [
              animate(500, style({ opacity: 1, transform: 'translateX(0)' })),
            ]),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class HomeComponent {
  data: Ido[] = [
    {
      color: '#FFEBD1',
      darkColor: ' #A38D75',
      head: ' 🧩Angular Development',
      desc: 'I craft fully responsive layouts using modern CSS techniques and frameworks like Tailwind CSS. I ensure every design works seamlessly across all devices, providing smooth experiences for both mobile and desktop users.',
    },
    {
      color: '#F2F7FC',
      darkColor: '#6A7D8E',

      head: '🎨  Responsive Design',
      desc: 'I craft fully responsive layouts using modern CSS techniques and frameworks like Tailwind CSS. I ensure every design works seamlessly across all devices, providing smooth experiences for both mobile and desktop users.',
    },
    {
      color: '#F2F7FC',
      darkColor: '#6A7D8E',

      head: '⚙️ Vanilla JavaScript',
      desc: "I have solid experience using pure JavaScript to create dynamic features without relying on heavy libraries. Whether it's DOM manipulation or creating lightweight components, I love keeping things simple and efficient.",
    },
    {
      color: '#FFEBD1',
      darkColor: '#A38D75',

      head: '🔄  API Integration',
      desc: 'I work with RESTful APIs and services, connecting front-end interfaces with real-time data. I use tools like RxJS for handling asynchronous data and building reactive applications in Angular.',
    },
  ];
}
