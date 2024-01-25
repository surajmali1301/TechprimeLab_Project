import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateProjectService } from './create-project.service';

@Component({
  selector: 'app-projectcreate',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projectcreate.component.html',
  styleUrl: './projectcreate.component.css',
})
export class ProjectcreateComponent implements OnInit {
  cForm!: FormGroup;
  projectList: any;
  queryValue: string | null = null;
  isUpdateBtn = false;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private projectService: CreateProjectService
  ) {}

  reasonList = ['', 'Business', 'DealerShip', 'Transport'];
  typeList = ['', 'Internal', 'External', 'Vendor'];
  divList = ['', 'Compressor', 'Filters', 'Pumps'];
  categoryList = ['', 'Quality A', 'Quality B', 'Quality C'];
  priorityList = ['', 'High', 'Medium', 'Low'];
  deptList = ['', 'Strategy', 'Finance', 'Quality'];
  locationList = ['', 'pune', 'mumbai', 'delhi'];

  ngOnInit(): void {
    this.cForm = this.fb.group({
      theme: ['', Validators.required],
      reason: ['', Validators.required],
      type: ['', Validators.required],
      division: ['', Validators.required],
      category: ['', Validators.required],
      priority: ['', Validators.required],
      dept: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      location: ['', Validators.required],
    });
    this.router.paramMap.subscribe((x) => {
      this.queryValue = x.get('reason');
    });
    if (this.queryValue != '') {
      // alert(this.queryValue)
    }
  }

  get theme() {
    return this.cForm.get('theme');
  }
  get reason() {
    return this.cForm.get('reason');
  }
  get type() {
    return this.cForm.get('type');
  }
  get category() {
    return this.cForm.get('category');
  }
  get division() {
    return this.cForm.get('division');
  }
  get priority() {
    return this.cForm.get('priority');
  }
  get dept() {
    return this.cForm.get('dept');
  }
  get sDate() {
    return this.cForm.get('startDate');
  }
  get eDate() {
    return this.cForm.get('endDate');
  }
  get loc() {
    return this.cForm.get('location');
  }

  saveProject() {
    let project = this.cForm.value;
    this.projectService.saveProject(project).subscribe((result: any) => {});
    this.cForm.reset();
  }

  toProjectList() {
    this.route.navigate(['/projectsList']);
  }
  toLogOut() {
    this.route.navigate(['/login']);
  }
}
