import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectListService } from './projectlist.service';

@Component({
  selector: 'app-project-listing',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './project-listing.component.html',
  styleUrl: './project-listing.component.css',
})
export class ProjectListingComponent implements OnInit {
  List: any[] = [];

  constructor(private route: Router, private router: ActivatedRoute) {}
  projectList: ProjectListService = inject(ProjectListService);
  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectList.getProjects().subscribe((result) => {
      this.List = result;
      console.log(this.projectList);
    });
  }

  updateStatus(project: any, value: number) {
    if (value === 1) {
      project.status = 'running';
    } else if (value === 2) {
      project.status = 'Closed';
    } else if (value === 3) {
      project.status = 'Cancelled';
    }
    this.projectList.updateStatus(project).subscribe((result) => {
      this.getProjects();
    });
  }

  toProjectCreation() {
    this.route.navigate(['/Project']);
  }
  toDashboard() {
    this.route.navigate(['/dashboard']);
  }
}
