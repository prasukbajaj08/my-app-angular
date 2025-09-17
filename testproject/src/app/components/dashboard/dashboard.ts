import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from './header/header';
import { StatInfoCard } from './stat-info-card/stat-info-card';
import { CoacheeRequests } from './coachee-requests/coachee-requests';
import { CompleteProfile } from './complete-profile/complete-profile';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Sidebar,
    Header,
    StatInfoCard,
    CoacheeRequests,
    CompleteProfile
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard { }
