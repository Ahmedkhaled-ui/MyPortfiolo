import { Component } from '@angular/core';
import { CartComponent } from '../../shared/components/ui/cart/cart.component';
import { Ido } from '../../shared/interfaces/ido';
import { IworkSkills } from '../../shared/interfaces/iwork-skills';
import {
  transition,
  trigger,
  group,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-resume',
  imports: [CartComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  animations: [
    trigger('animated', [
      transition(':enter', [
        group([
          query('.animation2', [
            style({ opacity: 0, transform: 'translateY(200px)' }),
            stagger('200ms ease-out', [
              animate(500, style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
          ]),
          query('.animation1', [
            style({ opacity: 0, transform: 'translateY(-200px)' }),
            stagger('200ms ease-out', [
              animate(500, style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
          ]),
          query('.animation', [
            style({ opacity: 0, transform: 'translateX(200px)' }),
            stagger('300ms ease-out', [
              animate(500, style({ opacity: 1, transform: 'translateX(0)' })),
            ]),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class ResumeComponent {
  data: Ido[] = [
    {
      color: '#FFE3BF',
      date: '📘 2023 / 2024',
      head: 'Front-End Development ',
      desc: 'Route Academy',
    },
    {
      color: '#FFEED9',
      date: '💻 2024 / Present',
      head: 'Freelance Projects ',
      desc: 'Freelance Projects ',
    },
    {
      color: '#FFEED9',
      date: '📘 2022 / 2023',
      head: 'Civil Engineering',
      desc: '15 May Institute',
    },
    {
      color: '#FFE3BF',
      date: '💻 2023 / 2024',
      head: 'Route  Projects ',
      desc: 'Projects ',
    },
  ];
  wSkills: IworkSkills[] = [
    {
      wSkill: 'Angular',
    },
    {
      wSkill: 'JavaScript',
    },
    {
      wSkill: 'TypeScript',
    },
    {
      wSkill: 'HTML 5',
    },
    {
      wSkill: 'CSS 3',
    },
    {
      wSkill: 'Tailwind CSS',
    },
    {
      wSkill: 'Sass',
    },
    {
      wSkill: 'Figma ',
    },
    {
      wSkill: 'BootStrape ',
    },
  ];
  sSkills: IworkSkills[] = [
    {
      wSkill: 'Time Management',
    },
    {
      wSkill: 'Mentorship',
    },
    {
      wSkill: 'Impeccable Communication',
    },
    {
      wSkill: 'Flexibility',
    },
    {
      wSkill: 'Research',
    },
    {
      wSkill: 'Writing',
    },
  ];
}
