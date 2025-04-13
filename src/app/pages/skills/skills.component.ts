import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Iprojects } from '../../shared/interfaces/iprojects';

@Component({
  selector: 'app-skills',
  imports: [CardModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  project: Iprojects[] = [
    {
      image: '/image/e-com_1.webp',
      title: '',
      subtitle: '',
    },
    {
      image: '/image/f-com.webp',
      title: '',
      subtitle: '',
    },
    {
      image: '/image/elmulim.webp',
      title: '',
      subtitle: '',
    },
    {
      image: '/image/games.webp',
      title: '',
      subtitle: '',
    },
    {
      image: '/image/weather.webp',
      title: '',
      subtitle: '',
    },
    {
      image: '/image/porti.webp',
      title: '',
      subtitle: '',
    },
    {
      image: '/image/book.webp',
      title: '',
      subtitle: '',
    },
  ];
}
