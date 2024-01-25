import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-listing',
  standalone: true,
  imports: [CommonModule, MatInputModule],
  templateUrl: './project-listing.component.html',
  styleUrl: './project-listing.component.css',
})
export class ProjectListingComponent {
  constructor(private _http: HttpClient, private route: Router) {}

  toProjectCreation() {
    this.route.navigate(['/Project']);
  }
}
