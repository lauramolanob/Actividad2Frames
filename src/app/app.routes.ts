import { Routes } from '@angular/router';
import { FormContacto } from './form-contacto/form-contacto';
import { App } from './app';
import { Home } from './home/home';

export const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contactanos', component: FormContacto },
  { path: 'home', component: Home },
];
