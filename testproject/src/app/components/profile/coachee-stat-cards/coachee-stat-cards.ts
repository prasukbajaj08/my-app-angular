import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCard, StatCardModel } from '../stat-card/stat-card';

@Component({
  selector: 'coachee-stat-cards',
  standalone: true,
  imports: [CommonModule, StatCard],
  templateUrl: './coachee-stat-cards.html',
})
export class CoacheeStatCards {
  cards: StatCardModel[] = [
    { value: 12, label: 'Sessions Attended' },
    { value: 3, label: 'Coaches Engaged' },
    { value: '4.5', label: 'Avg Feedback' }
  ];
}
