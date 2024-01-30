import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProjectListService } from '../project-listing/projectlist.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private route: Router) {}
  statusCounts: any[] = [];
  projectList: ProjectListService = inject(ProjectListService);
  fetchStatusCounts(): void {
    this.projectList.getStatusCounts().subscribe(
      (counts) => {
        this.statusCounts = counts;
        console.log('Status Counts:', this.statusCounts);
      },
      (error) => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  toProjectCreation() {
    this.route.navigate(['/Project']);
  }
  toProjectList() {
    this.route.navigate(['/projectsList']);
  }
}
