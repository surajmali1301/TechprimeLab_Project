import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ProjectcreateComponent } from './projectcreation/projectcreate.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'Project', component: ProjectcreateComponent },
  { path: 'projectsList', component: ProjectListingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LogInComponent },
];
