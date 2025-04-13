import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CartComponent } from '../../shared/components/ui/cart/cart.component';
import { Ido } from '../../shared/interfaces/ido';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, PasswordModule, CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  data: Ido[] = [
    {
      color: '#FFEBD1',
      head: ' 🧩Angular Development',
      desc: 'I craft fully responsive layouts using modern CSS techniques and frameworks like Tailwind CSS. I ensure every design works seamlessly across all devices, providing smooth experiences for both mobile and desktop users.',
    },
    {
      color: '#F2F7FC',

      head: '🎨  Responsive Design',
      desc: 'I craft fully responsive layouts using modern CSS techniques and frameworks like Tailwind CSS. I ensure every design works seamlessly across all devices, providing smooth experiences for both mobile and desktop users.',
    },
    {
      color: '#F2F7FC',

      head: '⚙️ Vanilla JavaScript',
      desc: "I have solid experience using pure JavaScript to create dynamic features without relying on heavy libraries. Whether it's DOM manipulation or creating lightweight components, I love keeping things simple and efficient.",
    },
    {
      color: '#FFEBD1',

      head: '🔄  API Integration',
      desc: 'I work with RESTful APIs and services, connecting front-end interfaces with real-time data. I use tools like RxJS for handling asynchronous data and building reactive applications in Angular.',
    },
  ];
}
