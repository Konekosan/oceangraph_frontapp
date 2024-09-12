import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'boards',
        loadComponent: () => import('./board/board.component').then(m => m.BoardComponent)
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
