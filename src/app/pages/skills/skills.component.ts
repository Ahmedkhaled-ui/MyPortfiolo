import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Iprojects } from '../../shared/interfaces/iprojects';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-skills',
  imports: [CardModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  animations: [
    trigger('skillAnimation', [
      transition(':enter', [
        query('.animation', [
          style({ opacity: 0, transform: ' scale(0%)   ' }),
          stagger('300ms ease-out', [
            animate(500, style({ opacity: 1, transform: 'scale(100%)   ' })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class SkillsComponent {
  project: Iprojects[] = [
    {
      image: '/image/elmulim.webp',
      title: 'El_mulim Academy',
      subtitle: '',
      link: 'https://elmullim.com/',
    },
    {
      image: '/image/sailor.png',
      title: 'Sailor',
      subtitle: '',
      link: 'https://ship-crew.premiumasp.net/signin',
    },
    {
      image: '/image/futurist buldung.JPG',
      title: 'Futurist-Building',
      subtitle: '',
      link: 'https://futurist-building.vercel.app/',
    },

    {
      image: '/image/e-com_1.webp',
      title: 'Trendify',
      subtitle: '',
      link: 'https://trendify-one-beta.vercel.app/',
    },
    {
      image: '/image/f-com.webp',
      title: ' Production Soon',
      subtitle: '',
      link: '',
    },
    {
      image: '/image/weather.webp',
      title: ' Production Soon',
      subtitle: '',
      link: '',
    },
    {
      image: '/image/porti.webp',
      title: '',
      subtitle: '',
      link: '',
    },
    {
      image: '/image/book.webp',
      title: '',
      subtitle: '',
      link: '',
    },
  ];
}
