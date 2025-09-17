import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsHeader } from './sessions-header/sessions-header';
import { StatsSummary } from './stats-summary/stats-summary';
import { SessionsTabs } from './sessions-tabs/sessions-tabs';
import { SessionCard } from './session-card/session-card';
import { CreateSession } from './create-session/create-session';  // 👈 NEW import

import { Sidebar } from './../sidebar/sidebar';

export interface Session {
  id: string;
  title: string;
  description: string;
  startAt: string; // ISO
  durationMin: number;
  mode: 'online' | 'offline';
  attendees: { registered: number; capacity?: number };
  status: 'published' | 'completed' | 'cancelled' | 'draft';
  coach: { id: string; name: string; avatarUrl?: string };
}

@Component({
  selector: 'app-my-session',
  standalone: true,
  imports: [
    CommonModule,
    Sidebar,
    SessionsHeader,
    StatsSummary,
    SessionsTabs,
    SessionCard,
    CreateSession   // 👈 include overlay
  ],
  templateUrl: './my-session.html',
  styleUrls: ['./my-session.scss'],
})
export class MySession {
  filter = signal<'all' | 'upcoming' | 'completed' | 'cancelled'>('all');
  summary = signal({ total: 4, upcoming: 0, completed: 1, activeCoaches: 4 });

  private initial: Session[] = [
    {
      id: 's1',
      title: 'Leadership Skills Development',
      description: 'Learn essential leadership skills to inspire and guide your team effectively.',
      startAt: new Date(2025, 8, 6, 15, 30).toISOString(),
      durationMin: 60,
      mode: 'online',
      attendees: { registered: 1, capacity: 1 },
      status: 'published',
      coach: { id: 'c1', name: 'Sarah Johnson' },
    },
    {
      id: 's2',
      title: 'Career Planning Workshop',
      description: 'Strategic career planning and goal setting for professional growth.',
      startAt: new Date(2025, 8, 6, 19, 30).toISOString(),
      durationMin: 90,
      mode: 'online',
      attendees: { registered: 1, capacity: 1 },
      status: 'published',
      coach: { id: 'c2', name: 'Mike Chen' },
    },
    {
      id: 's3',
      title: 'Communication Excellence',
      description: 'Master effective communication techniques for workplace success.',
      startAt: new Date(2025, 8, 7, 16, 30).toISOString(),
      durationMin: 60,
      mode: 'online',
      attendees: { registered: 1, capacity: 1 },
      status: 'published',
      coach: { id: 'c3', name: 'Emily Davis' },
    },
    {
      id: 's4',
      title: 'Team Management Fundamentals',
      description: 'Learn the basics of managing and motivating high-performing teams.',
      startAt: new Date(2025, 8, 4, 8, 30).toISOString(),
      durationMin: 75,
      mode: 'online',
      attendees: { registered: 1, capacity: 1 },
      status: 'completed',
      coach: { id: 'c4', name: 'Alex Rodriguez' },
    },
  ];

  sessions = signal<Session[]>(this.initial);

  // 👇 NEW overlay state
  showCreate = signal(false);

  openCreate() {
    this.showCreate.set(true);
  }

  closeCreate() {
    this.showCreate.set(false);
  }

  onCreateSave(payload: {
    title: string;
    description: string;
    topic: string;
    durationMin: number;
    date: string;
    time: string;
    format: 'online' | 'offline';
  }) {
    const startAt = new Date(`${payload.date}T${payload.time}:00`);
    const newSession: Session = {
      id: crypto.randomUUID?.() ?? String(Date.now()),
      title: payload.title,
      description: payload.description,
      startAt: startAt.toISOString(),
      durationMin: payload.durationMin,
      mode: payload.format,
      attendees: { registered: 0, capacity: 1 },
      status: 'published',
      coach: { id: 'me', name: 'You' }, // placeholder coach
    };

    this.sessions.update(list => [newSession, ...list]);
    this.closeCreate();
  }

  onTabChange(tab: 'all' | 'upcoming' | 'completed' | 'cancelled') {
    this.filter.set(tab);
  }

  onView(sessionId: string) {
    console.log('View', sessionId);
  }

  onEdit(sessionId: string) {
    console.log('Edit', sessionId);
  }
}
