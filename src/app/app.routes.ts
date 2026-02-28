import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'jyotirlingas', pathMatch: 'full' },
  {
    path: 'jyotirlingas',
    loadComponent: () =>
      import('./pages/jyotirlingas/jyotirlingas').then(m => m.Jyotirlingas),
  },
  {
    path: 'local-temples',
    loadComponent: () =>
      import('./pages/local-temples/local-temples').then(m => m.LocalTemples),
  },
  {
    path: 'devotional',
    loadComponent: () =>
      import('./pages/devotional/devotional').then(m => m.Devotional),
  },
  { path: '**', redirectTo: 'jyotirlingas' },
];
