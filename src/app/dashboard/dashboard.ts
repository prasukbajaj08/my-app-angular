import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task';
import { Router } from '@angular/router';
import { Task } from '../models/task';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {
    this.refresh();
  }

  refresh() {
    this.tasks = this.taskService.getTasks();
  }

  goBack() {
    this.router.navigate(['/']);
  }

  deleteTask(id: string) {
    if (!confirm('Delete this task?')) return;
    this.taskService.deleteTask(id);
    this.refresh();
  }
}
