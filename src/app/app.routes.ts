import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'home' },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
    title: 'home',
  },
  {
    path: 'reusme',
    loadComponent: () =>
      import('./pages/resume/resume.component').then((c) => c.ResumeComponent),
    title: 'reusme',
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./pages/skills/skills.component').then((c) => c.SkillsComponent),
    title: 'skills',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
    title: 'contact',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/notfound/notfound.component').then(
        (c) => c.NotfoundComponent
      ),
    title: 'notfound',
  },
];
