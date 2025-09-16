import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachCard } from '../coach-card/coach-card';

@Component({
  selector: 'app-coaches',
  standalone: true,
  imports: [CommonModule, CoachCard],
  templateUrl: './coaches.html',
  styleUrls: ['./coaches.scss']
})
export class Coaches {}
