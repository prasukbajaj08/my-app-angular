import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private storageKey = 'tasks_v1';

  private readFromStorage(): Task[] {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) as Task[] : [];
  }

  private writeToStorage(tasks: Task[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  getTasks(): Task[] {
    return this.readFromStorage();
  }

  addTask(task: Task) {
    const tasks = this.readFromStorage();
    tasks.unshift(task); 
    this.writeToStorage(tasks);
  }

  deleteTask(id: string) {
    const tasks = this.readFromStorage().filter(t => t.id !== id);
    this.writeToStorage(tasks);
  }

  updateTask(updated: Task) {
    const tasks = this.readFromStorage().map(t => t.id === updated.id ? updated : t);
    this.writeToStorage(tasks);
  }
}
