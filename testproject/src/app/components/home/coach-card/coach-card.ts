import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coach-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coach-card.html',
  styleUrls: ['./coach-card.scss']
})
export class CoachCard {
  @Input() name = '';
  @Input() title = '';
  @Input() location = '';
  @Input() price = '';
  @Input() img = '';
  @Input() rating = '';
}
