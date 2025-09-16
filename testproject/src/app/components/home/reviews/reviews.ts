import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCard } from '../review-card/review-card';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, ReviewCard],
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.scss']
})
export class Reviews {}
