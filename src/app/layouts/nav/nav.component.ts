import {
  afterNextRender,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { ListOptionComponent } from '../list-option/list-option.component';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-nav',
  imports: [ListOptionComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  animations: [
    trigger('Animation', [
      transition(':enter', [
        query('.animation', [
          style({ opacity: 0, transform: ' scale(1000%)   ' }),
          stagger('100ms ease-out', [
            animate(1000, style({ opacity: 1, transform: 'scale(100%)   ' })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class NavComponent implements AfterViewInit {
  animationState: WritableSignal<string> = signal<'start' | ' in'>('start');
  thems: WritableSignal<string> = signal('');
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    afterNextRender(() => {
      this.thems.set(localStorage.getItem('theme')!);
      console.log(this.thems());
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationState.set('in');
      this.changeDetectorRef.detectChanges();
    });
  }
  mode() {
    this.thems.set('dark');
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.toggle(
      'dark',
      localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }

  ligthMode() {
    this.thems.set('ligth');

    localStorage.setItem('theme', 'ligth');
    document.documentElement.classList.toggle(
      'dark',
      localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }
}
