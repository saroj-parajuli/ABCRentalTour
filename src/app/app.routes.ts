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
      import('./scheduling-card/scheduling-card').then(
        (m) => m.SchedulingCardComponent
      ).catch((error) => {
        console.error(`Error loading SchedulingCardComponent: ${error}`);
        return Promise.reject(error);
      }),
  },
];