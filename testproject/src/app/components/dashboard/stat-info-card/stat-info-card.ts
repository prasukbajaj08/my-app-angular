import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-info-card',
  standalone: true,
  templateUrl: './stat-info-card.html',
  styleUrls: ['./stat-info-card.scss']
})
export class StatInfoCard {
  @Input() title = '';
  @Input() value = '';
  @Input() icon = '';
}
