import { Routes } from '@angular/router';
import { Request } from './request/request';
import { Home } from './home/home';

export const routes: Routes = [
    // { path: 'user-detail/:id', component: Request },
    { path: '', component: Home },
    { path: 'user/:username', component: Request },
];
