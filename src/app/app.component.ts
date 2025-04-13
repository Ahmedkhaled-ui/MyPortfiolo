import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './layouts/nav/nav.component';
import { ListOptionComponent } from './layouts/list-option/list-option.component';
import { PersonalInfoComponent } from './shared/components/ui/personal-info/personal-info.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HomeComponent,
    NavComponent,
    ListOptionComponent,
    PersonalInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myportfiolo';
}
