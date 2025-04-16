import {
  ChangeDetectorRef,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { InavItem } from '../../shared/interfaces/inav-item';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  animate,
  animation,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-list-option',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './list-option.component.html',
  styleUrl: './list-option.component.css',
  animations: [
    trigger('navAnimated', [
      transition('* => in', [
        query('.test', [
          style({ opacity: 0, transform: 'translateY(-50px)' }),
          stagger('300ms ease-out', [
            animate(300, style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ]),
        query('.test', []),
      ]),
    ]),
  ],
})
export class ListOptionComponent {
  animationState: WritableSignal<string> = signal<'start' | 'in'>('start');

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationState.set('in');
      this.changeDetectorRef.detectChanges();
    });
  }
  navItem: InavItem[] = [
    {
      icon: 'pi-home',
      name: 'home',
      rout: '/home',
    },
    {
      icon: 'pi-book',
      name: 'Resume',
      rout: '/reusme',
    },
    {
      icon: 'pi-briefcase',
      name: 'Work',
      rout: '/skills',
    },
    {
      icon: 'pi-address-book',
      name: 'Contact',
      rout: '/contact',
    },
  ];
}
