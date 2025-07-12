import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core';

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', component: AuthLayoutComponent, children: [
        { path: '',
             loadComponent: () => import('./features/home/home.component') },
             { path: 'product-details/:id',
             loadComponent: () => import('./features/products/components/product-details/product-details.component')},
             { path: 'checkout',
             loadComponent: () => import('./features/checkout/checkout.component') },
    ]},
    { path: "**", redirectTo: 'auth', pathMatch: 'full' }

];
