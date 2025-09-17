import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sessions-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessions-header.html',
  styleUrls: ['./sessions-header.scss'],
})
export class SessionsHeader {
  @Output() create = new EventEmitter<void>();
}
