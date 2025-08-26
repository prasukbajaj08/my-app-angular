export type Priority = 'Low Priority' | 'Medium Priority' | 'High Priority';
export type Status = 'Pending' | 'In Progress' | 'Completed';

export interface Task {
  id: string;
  title: string;
  dueDate?: string;     
  description?: string;
  priority: Priority;
  status: Status;   
  createdAt: string;
}
