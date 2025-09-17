import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { MySession } from './components/my-session/my-session';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'profile', component: Profile},
    {path: 'sessions', component: MySession}
];
