import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import {SignupComponent} from './session/signup/signup.component';
import {AuthGuard} from './auth.guard';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {SucessVerifyEmailComponent} from './sucess-verify-email/sucess-verify-email.component';

export const AppRoutes: Routes = [
  {
    path: 'verifyEmail',
    component: VerifyEmailComponent
  },
  {
    path: 'verifyEmailSuccess',
    component: SucessVerifyEmailComponent
  },
  {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
     // loadChildren: './dashboard/dashboard.module#DashboardModule'
    redirectTo: '/session/signin',
    pathMatch: 'full'
  }, {
    path: 'apps',
    loadChildren: './apps/apps.module#AppsModule'
  }, {
    path: 'widgets',
    loadChildren: './widgets/widgets.module#WidgetsModule'
  }, {
    path: 'material',
    loadChildren: './material/material.module#MaterialComponentsModule'
  }, {
    path: 'ecommerce',
    loadChildren: './ecommerce/ecommerce.module#EcommerceModule'
  }, {
    path: 'taskboard',
    canActivate: [AuthGuard],
    loadChildren: './taskboard/taskboard.module#TaskboardModule'
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormModule'
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  }, {
    path: 'charts',
    loadChildren: './chartlib/chartlib.module#ChartlibModule'
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapModule'
  }, {
    path: 'dragndrop',
    loadChildren: './dragndrop/dragndrop.module#DragndropModule'
  }, {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: './pages/pages.module#PagesModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'session',
    loadChildren: './session/session.module#SessionModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
},
  ];
