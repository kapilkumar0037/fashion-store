import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '', component: AuthLayoutComponent, children: [
            {
                path: '',
                loadComponent: () => import('./features/home/home.component')
            },
            {
                path: 'product-details/:id',
                loadComponent: () => import('./features/products/components/product-details/product-details.component')
            },
            {
                path: 'checkout',
                loadComponent: () => import('./features/checkout/checkout.component')
            },
            {
                path: 'about',
                loadComponent: () => import('./features/static-pages/about-us/about-us.component')
            },
            {
                path: 'privacy-policy',
                loadComponent: () => import('./features/static-pages/privacy/privacy.component')
            },
            {
                path: 'terms-of-service',
                loadComponent: () => import('./features/static-pages/terms-and-conditions/terms-and-conditions.component')
            },
            {
                path: 'cart',
                loadComponent: () => import('./features/cart/components/cart/cart.component')
            },
            {
                path: 'orders',
                loadComponent: () => import('./features/orders/orders.component')
            },
            {
                path: 'wishlist',
                loadComponent: () => import('./features/wishlist/wishlist.component')
            },
               {
                path: 'tracking',
                loadComponent: () => import('./features/order-tracking/order-tracking.component')
            },
        ]
    },

    { path: "**", redirectTo: 'auth', pathMatch: 'full' }

];
