import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCard } from '../feature-card/feature-card';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FeatureCard],
  templateUrl: './features.html',
  styleUrls: ['./features.scss']
})
export class Features {}
