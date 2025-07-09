import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core';

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', component: AuthLayoutComponent, children: [
        { path: '',
             loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
             { path: 'product-details/:id',
             loadComponent: () => import('./shared/components/product-details/product-details.component').then(m => m.ProductDetailsComponent) },
    ]},
    { path: "**", redirectTo: 'auth', pathMatch: 'full' }

];
