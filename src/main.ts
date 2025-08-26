import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';

import { Routes } from '@angular/router';
import { CreateTask } from './app/create-task/create-task';
import { Dashboard } from './app/dashboard/dashboard';

const routes: Routes = [
  { path: '', component: CreateTask },
  { path: 'dashboard', component: Dashboard },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
