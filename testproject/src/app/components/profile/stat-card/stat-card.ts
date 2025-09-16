import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatCardModel {
  value: string | number;
  label: string;
  small?: string;
}

@Component({
  selector: 'stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.html',
  styleUrls: ['./stat-card.scss']
})
export class StatCard {
  @Input() model!: StatCardModel;
}
