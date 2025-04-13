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
      image: '/image/e-com.png',
      title: '',
      subtitle: '',
    },
    {
      image: '/image/f-com.JPG',
      title: '',
      subtitle: '',
    },
    {
      image: '/image/elmulim.JPG',
      title: '',
      subtitle: '',
    },
    {
      image: '/image/games.JPG',
      title: '',
      subtitle: '',
    },
    {
      image: '/image/weather.JPG',
      title: '',
      subtitle: '',
    },
    {
      image: '/image/porti.JPG',
      title: '',
      subtitle: '',
    },
    {
      image: '/image/book.JPG',
      title: '',
      subtitle: '',
    },
  ];
}
