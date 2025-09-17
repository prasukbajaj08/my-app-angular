import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sessions-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessions-tabs.html',
  styleUrls: ['./sessions-tabs.scss'],
})
export class SessionsTabs {
  @Input() active: 'all' | 'upcoming' | 'completed' | 'cancelled' = 'all';
  @Output() tabChange = new EventEmitter<'all' | 'upcoming' | 'completed' | 'cancelled'>();

  select(tab: 'all' | 'upcoming' | 'completed' | 'cancelled') {
    if (this.active !== tab) {
      this.tabChange.emit(tab);
    }
  }
}
