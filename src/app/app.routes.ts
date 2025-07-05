import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', component: AuthLayoutComponent, children: [
        { path: '',
             loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
    ]},
    { path: "**", redirectTo: 'auth', pathMatch: 'full' }

];
