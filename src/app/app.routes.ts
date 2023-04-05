import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'aghata',
    loadComponent: () => import('./aghata/aghata.page').then( m => m.AghataPage)
  },
  {
    path: 'joaquim',
    loadComponent: () => import('./joaquim/joaquim.page').then( m => m.JoaquimPage)
  },
  {
    path: 'flora',
    loadComponent: () => import('./flora/flora.page').then( m => m.FloraPage)
  },
  {
    path: 'andre',
    loadComponent: () => import('./andre/andre.page').then( m => m.AndrePage)
  },
  {
    path: 'maria',
    loadComponent: () => import('./maria/maria.page').then( m => m.MariaPage)
  },

];
