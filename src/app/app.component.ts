import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectcreateComponent } from './projectcreation/projectcreate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    LogInComponent,
    ProjectcreateComponent,
    ProjectListingComponent,
    HttpClientModule,
    DashboardComponent
    // BrowserAnimationsModule,
    // BrowserModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TechPrimeLab';
}
