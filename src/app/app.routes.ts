import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'scheduling-card',
    pathMatch: 'full',
  },
  {
    path: 'scheduling-card',
    loadChildren: () =>
      loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4200/remoteEntry.js',
          exposedModule: './SchedulingModule',
      }).then((m) => m.SchedulingModule),
  },
];
