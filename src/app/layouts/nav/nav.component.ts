import {
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
          style({ opacity: 0, transform: ' scale(0%)   ' }),
          stagger('100ms ease-out', [
            animate(500, style({ opacity: 1, transform: 'scale(100%)   ' })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class NavComponent implements AfterViewInit {
  animationState: WritableSignal<string> = signal<'start' | ' in'>('start');
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationState.set('in');
      this.changeDetectorRef.detectChanges();
    });
  }
}
