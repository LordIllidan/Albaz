import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [AuthGuard],
  },  
  {
    path: 'monthly-report',
    loadComponent: () => import('./monthly-report/monthly-report.page').then( m => m.MonthlyReportPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'daily-report',
    loadComponent: () => import('./daily-report/daily-report.page').then( m => m.DailyReportPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'weekly-report',
    loadComponent: () => import('./weekly-report/weekly-report.page').then( m => m.WeeklyReportPage),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
