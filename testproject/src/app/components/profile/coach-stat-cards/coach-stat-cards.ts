import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCard, StatCardModel } from '../stat-card/stat-card';

@Component({
  selector: 'coach-stat-cards',
  standalone: true,
  imports: [CommonModule, StatCard],
  templateUrl: './coach-stat-cards.html',
})
export class CoachStatCards {
  cards: StatCardModel[] = [
    { value: 156, label: 'Total Sessions' },
    { value: 24, label: 'Coaches' },
    { value: '4.8', label: 'Avg Rating', small: '42 reviews' },
    { value: '98%', label: 'Response Rate' },
    { value: '96%', label: 'Completion Rate' },
    // { value: '$150', label: 'Hourly Rate' }
  ];
}
