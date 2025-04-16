import { Component } from '@angular/core';
import { Ilinks } from '../../../interfaces/ilinks';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-personal-info',
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
  animations: [
    trigger('personalAnimation', [
      transition(':enter', [
        query(
          '.animate',
          [
            style({ opacity: 0, transform: 'scale(0%)' }),
            stagger('300ms ease-out', [
              animate(1000, style({ opacity: 1, transform: 'scale(100%)' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class PersonalInfoComponent {
  socail: Ilinks[] = [
    {
      color: 'green',
      icon: 'pi-whatsapp',
      link: 'https://wa.me/01124460598',
    },

    {
      color: 'black',
      icon: 'pi-github',
      link: 'https://github.com/Ahmedkhaled-ui?tab=repositories',
    },
    {
      color: 'blue',
      icon: 'pi-linkedin',
      link: 'https://www.linkedin.com/in/ahmad-khaled-b04a3928a/',
    },
    {
      color: 'black',
      icon: 'pi-twitter',
      link: '',
    },
  ];

  email: string = 'ahmedkamel1446@gmail.com';
  cv: string = './resume/Ahmed_Khaled_CV.pdf';
  downloadCV() {
    const link = document.createElement('a');
    link.href = this.cv;
    link.setAttribute('download', 'Ahmed-CV.pdf');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
