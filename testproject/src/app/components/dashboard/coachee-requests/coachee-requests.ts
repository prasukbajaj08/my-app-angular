import { Component } from '@angular/core';

type Request = {
  id: number;
  coacheeName: string;
  sessionName: string;
  requestedAt: string;
  status: 'pending' | 'approved' | 'denied';
};

@Component({
  selector: 'app-coachee-requests',
  standalone: true,
  templateUrl: './coachee-requests.html',
  styleUrls: ['./coachee-requests.scss']
})
export class CoacheeRequests {
  coacheeRequests: Request[] = [
    { id: 1, coacheeName: 'Sarah Johnson', sessionName: 'Leadership Skills', requestedAt: '2 days ago', status: 'pending' },
    { id: 2, coacheeName: 'Mike Chen', sessionName: 'Career Planning', requestedAt: '1 week ago', status: 'pending' },
    { id: 3, coacheeName: 'Emily Davis', sessionName: 'Communication Skills', requestedAt: '3 days ago', status: 'pending' },
  ];

  approve(req: Request) {
    req.status = 'approved';
    // no backend; change local state only
  }

  deny(req: Request) {
    req.status = 'denied';
  }

}
