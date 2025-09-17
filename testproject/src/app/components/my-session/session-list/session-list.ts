import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionCard } from '../session-card/session-card';
import type { Session } from '../my-session';

@Component({
  selector: 'app-session-list',
  standalone: true,
  imports: [CommonModule, SessionCard],
  templateUrl: './session-list.html',
  styleUrls: ['./session-list.scss'],
})
export class SessionList {
  @Input() sessions: Session[] = [];
  @Output() view = new EventEmitter<string>();
  @Output() edit = new EventEmitter<string>();

  onView(id: string) { this.view.emit(id); }
  onEdit(id: string) { this.edit.emit(id); }
}
