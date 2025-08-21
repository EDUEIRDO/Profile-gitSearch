import { Routes } from '@angular/router';
import { Perfil } from './perfil/perfil';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home },
    {
        path: 'user/:username',
        component: Perfil,
    }
];
