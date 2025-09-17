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
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() email!: string;
  @Input() phoneNumber!: string;
  @Input() location!: string;
  @Input() bio!: string;
  @Input() profileImageUrl!: string;

  @Input() price: number = 120;
  @Input() rating: number = 4.7;
  @Input() reviews: number = 39;
  @Input() specialization: string = 'Life & Wellness Coach';
}
