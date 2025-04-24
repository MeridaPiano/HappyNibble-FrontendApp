import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Inicio',
    loadComponent: () => import ('./features/home/pages/home/home.component'),
  },
  {
    path: 'gallery',
    title: 'Galeria',
    children:[
      {
        path: 'fondant',
        title: 'Pasteles de Fondant',
        loadComponent: () => import ('./features/gallery/pages/gallery/gallery.component'),
      },
      {
        path: 'cream',
        title: 'Pasteles de Crema',
        loadComponent: () => import ('./features/gallery/pages/gallery/gallery.component'),
      },
      {
        path: 'cupcake',
        title: 'Cupcakes',
        loadComponent: () => import ('./features/gallery/pages/gallery/gallery.component'),
      },
      {
        path: 'biscuit',
        title: 'Galletas',
        loadComponent: () => import ('./features/gallery/pages/gallery/gallery.component'),
      },
      {
        path: '',
        redirectTo:'fondant',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'store',
    title: 'Tienda',
    children:[
      {
        path: 'qoute',
        title: 'Presupuesto',
        loadComponent: () => import ('./features/store/pages/quote/quote.component'),
      },
      {
        path: 'cake-customize',
        title: 'Personaliza tu Pastel',
        loadComponent: () => import ('./features/store/pages/cake-customize/cake-customize.component'),
      },
      {
        path: 'offers',
        title: 'Ofertas',
        loadComponent: () => import ('./features/store/pages/offers/offers.component'),
      },
      {
        path: '',
        redirectTo:'qoute',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'about-us',
    title: 'Nosotros',
    loadComponent: () => import ('./features/about-us/pages/about-us/about-us.component'),
  },
  {
    path: 'contact',
    title: 'Contacto',
    loadComponent: () => import ('./features/contact/pages/contact/contact.component'),
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
];
