import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ProjectcreateComponent } from './projectcreation/projectcreate.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    LogInComponent,
    ProjectcreateComponent,
    ProjectListingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TechPrimeLab';
}
