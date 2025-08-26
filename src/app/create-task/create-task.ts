import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../services/task';
import { Task, Priority, Status } from '../models/task';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-task.html',
  styleUrls: ['./create-task.scss']
})
export class CreateTask {
  priorities: Priority[] = ['Low Priority', 'Medium Priority', 'High Priority'];
  taskForm: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) {
   

    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(200)]],
      dueDate: [''],
      description: [''],
      priority: ['Low Priority']
    });
  }

  
  private generateId(): string {
    try {
      
      return (crypto && crypto.randomUUID) ? crypto.randomUUID() : Date.now().toString();
    } catch {
      return Date.now().toString();
    }
  }

  onSubmit() {
    if (this.taskForm.invalid) return;

    const value = this.taskForm.value;
    const task: Task = {
      id: this.generateId(),
      title: value.title!.trim(),
      dueDate: value.dueDate || undefined,
      description: value.description?.trim() || undefined,
      priority: (value.priority as Priority) || 'Low Priority',
      status: 'Pending' as Status,
      createdAt: new Date().toISOString()
    };

    this.taskService.addTask(task);

    this.taskForm.reset({ priority: 'Low Priority' });

    this.router.navigate(['/dashboard']);
  }
}
