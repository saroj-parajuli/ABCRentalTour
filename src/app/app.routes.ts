import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'scheduling-card',
    pathMatch: 'full',
  },
  {
    path: 'scheduling-card',
    loadComponent: () =>
      import('./components/scheduling-card/scheduling-card').then(
        (m) => m.SchedulingCardComponent
      ),
  },
];
