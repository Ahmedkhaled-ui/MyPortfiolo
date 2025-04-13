import { Component } from '@angular/core';
import { ListOptionComponent } from '../list-option/list-option.component';

@Component({
  selector: 'app-nav',
  imports: [ListOptionComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {}
