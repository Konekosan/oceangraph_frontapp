import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'boards',
        loadComponent: () => import('./board/board.component').then(m => m.BoardComponent)
    }
];
