import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LogInService } from './login.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  login!: FormGroup;
  errorMessage: string = '';

  constructor(
    private _http: HttpClient,
    private _route: Router,
    private authService: LogInService
  ) {} // Inject Auth service

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  get email() {
    return this.login.get('email');
  }

  get password() {
    return this.login.get('password');
  }

  onSubmit() {
    // Call the Auth service's login method
    this.authService
      .login(this.login.value.email, this.login.value.password)
      .subscribe(
        (user: any) => {
          if (user) {
            this._route.navigate(['/Project']);
            this.login.reset();
          } else {
            this.errorMessage = ' Credentials Does Not Match';
          }
        },
        (error: any) => {
          alert('Hello')
          this.errorMessage = 'Login failed. Please check your credentials.';
          console.error('Error:', error);
        }
      );
  }
}
