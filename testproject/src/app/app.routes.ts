import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { MySession } from './components/my-session/my-session';
import { Dashboard } from './components/dashboard/dashboard';
import { FindCoaches } from './components/find-coaches/find-coaches';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'profile', component: Profile},
    {path: 'sessions', component: MySession},
    {path: 'dashboard', component: Dashboard},
    {path: 'find-coaches', component: FindCoaches}
];
