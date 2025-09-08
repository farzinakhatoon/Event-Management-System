import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent) },
  { path: 'events', loadComponent: () => import('./event/event.component').then(m => m.EventComponent) },
  { path: 'register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) },
  { path: 'tickets', loadComponent: () => import('./ticket/ticket.component').then(m => m.TicketComponent) },
 { path: 'notifications', loadComponent: () => import('./notification/notification.component').then(m => m.NotificationComponent) },
  { path: 'feedback', loadComponent: () => import('./feedback/feedback.component').then(m => m.FeedbackComponent) }
];
