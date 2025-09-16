import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDto } from '../profile';

@Component({
  selector: 'profile-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-info.html',
  styleUrls: ['./profile-info.scss']
})
export class ProfileInfo {
  @Input() user!: UserDto;
}
