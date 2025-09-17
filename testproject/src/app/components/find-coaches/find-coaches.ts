import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from './header/header';
import { CoachCard } from './coach-card/coach-card';

@Component({
  selector: 'app-find-coaches',
  standalone: true,
  imports: [CommonModule, Sidebar, Header, CoachCard],
  templateUrl: './find-coaches.html',
  styleUrls: ['./find-coaches.scss']
})
export class FindCoaches {
  coaches = [
    {
      coachId: 1,
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@example.com',
      phoneNumber: '+1-415-555-0123',
      location: 'San Francisco, CA',
      bio: 'Transformational leadership coach with 15+ years of experience helping executives and entrepreneurs unlock their potential.',
      profileImageUrl: 'assets/images/sarah.jpg',
      price: 250,
      rating: 4.9,
      reviews: 67,
      specialization: 'Executive Leadership Coach'
    },
    {
      coachId: 2,
      firstName: 'Michael',
      lastName: 'Chen',
      email: 'mchen@example.com',
      phoneNumber: '+1-212-555-0456',
      location: 'New York, NY',
      bio: 'Career transition specialist helping professionals navigate career changes and achieve their goals.',
      profileImageUrl: 'assets/images/michael.jpg',
      price: 180,
      rating: 4.8,
      reviews: 54,
      specialization: 'Career Transition Coach'
    },
    {
      coachId: 3,
      firstName: 'Emily',
      lastName: 'Rodriguez',
      email: 'emilyr@example.com',
      phoneNumber: '+1-512-555-0789',
      location: 'Austin, TX',
      bio: 'Life coach specializing in work-life balance, stress management, and growth for busy professionals.',
      profileImageUrl: 'assets/images/emily.jpg',
      price: 120,
      rating: 4.7,
      reviews: 39,
      specialization: 'Life & Wellness Coach'
    }
  ];
}
