import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CreateTask } from './create-task/create-task';
import { Dashboard } from './dashboard/dashboard';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: CreateTask },
  { path: 'dashboard', component: Dashboard },
  { path: '**', redirectTo: '' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  template: `<main><router-outlet></router-outlet></main>`,
})
export class App {}
