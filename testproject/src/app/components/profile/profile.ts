import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';
import { ProfileInfo } from './profile-info/profile-info';
import { CoachStatCards } from './coach-stat-cards/coach-stat-cards';
import { CoacheeStatCards } from './coachee-stat-cards/coachee-stat-cards';

export interface UserDto {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber?: string;
  location?: string;
  bio?: string;
  role: 'coach' | 'coachee';
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, Sidebar, ProfileInfo, CoachStatCards, CoacheeStatCards],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class Profile {
  // for now using a hardcoded user. Replace with HTTP fetch later.
  user: UserDto = {
    firstname: 'coach',
    lastname: 'test',
    email: 'coach@gmail.com',
    phoneNumber: '',
    location: 'Indore, Madhya Pradesh',
    bio: 'I help leaders grow their influence and impact. 8+ years coaching experience.',
    role: 'coach'
  };

  // signal used to decide which variant to show — currently set from user.role
  isCoach = signal(this.user.role === 'coach');
}
