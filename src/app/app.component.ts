import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './layouts/nav/nav.component';
import { PersonalInfoComponent } from './shared/components/ui/personal-info/personal-info.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, PersonalInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myportfiolo';
}
