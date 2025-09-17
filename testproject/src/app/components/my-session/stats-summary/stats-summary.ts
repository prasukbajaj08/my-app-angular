import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-summary.html',
  styleUrls: ['./stats-summary.scss'],
})
export class StatsSummary {
  @Input() summary!: { total: number; upcoming: number; completed: number; activeCoaches: number };
}
