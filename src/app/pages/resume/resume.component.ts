import { Component } from '@angular/core';
import { CartComponent } from '../../shared/components/ui/cart/cart.component';
import { Ido } from '../../shared/interfaces/ido';
import { IworkSkills } from '../../shared/interfaces/iwork-skills';

@Component({
  selector: 'app-resume',
  imports: [CartComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
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
