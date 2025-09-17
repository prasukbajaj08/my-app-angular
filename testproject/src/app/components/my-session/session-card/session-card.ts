import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Session } from '../my-session';

@Component({
  selector: 'app-session-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './session-card.html',
  styleUrls: ['./session-card.scss'],
})
export class SessionCard {
  @Input() session!: Session;
  @Output() view = new EventEmitter<string>();
  @Output() edit = new EventEmitter<string>();

  emitView() { this.view.emit(this.session.id); }
  emitEdit() { this.edit.emit(this.session.id); }

  formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleString();
  }
}
