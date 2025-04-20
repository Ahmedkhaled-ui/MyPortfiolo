import {
  afterNextRender,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
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
import { TranslateServices } from '../../core/services/translate/translate.service';
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
  private readonly translateServices = inject(TranslateServices);
  animationState: WritableSignal<string> = signal<'start' | ' in'>('start');
  thems: WritableSignal<string> = signal('');
  lang: WritableSignal<string> = signal('');
  langIcon = false;
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    afterNextRender(() => {
      this.thems.set(localStorage.getItem('theme')!);
      // console.log(this.thems());
      this.lang.set(localStorage.getItem('lang')!);
      if (localStorage.getItem('lang') == 'en') {
        this.langIcon = !this.langIcon;
      }
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

  langUse() {
    if (this.lang() == 'en') {
      this.langIcon = true;
    } else if (this.lang() == 'ar') {
      this.langIcon = true;
    }
  }
  changeLang(): void {
    this.langIcon = !this.langIcon;
  }
  typeLang(l: string): void {
    if (l == 'en') {
      console.log('en');
      localStorage.setItem('lang', 'en');
    } else {
      console.log('ar');
      localStorage.setItem('lang', 'ar');
    }
    this.translateServices.diraction();
  }
}
