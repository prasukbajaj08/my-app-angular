import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-card.html',
  styleUrls: ['./review-card.scss']
})
export class ReviewCard {
  @Input() text = '';
  @Input() name = '';
  @Input() title = '';
  @Input() rating = '';
}
