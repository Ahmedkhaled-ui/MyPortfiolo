import { Component } from '@angular/core';
import { PersonalInfoComponent } from '../../shared/components/ui/personal-info/personal-info.component';
import { Ilinks } from '../../shared/interfaces/ilinks';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
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
  cv: string = './resume/ahmed.pdf';
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
