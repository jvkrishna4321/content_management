import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-content-app',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './content-app.component.html',
  styleUrl: './content-app.component.css'
})
export class ContentAppComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  registrationSuccess = false;
  registeredUser: any; // To store details of the successfully registered user

  constructor() { }

  onSubmit(form: NgForm): void {
    // Check if the form is valid and passwords match
    if (form.valid && this.user.password === this.user.confirmPassword) {
      console.log('Registration Form Submitted!', this.user);

      // In a real application, you would send this data to a backend server.
      // For this example, we'll just simulate success.
      this.registrationSuccess = true;
      this.registeredUser = { ...this.user }; // Store a copy of the registered user details

      // Optionally, reset the form after successful submission
      form.resetForm();
      this.user = { name: '', email: '', password: '', confirmPassword: '' }; // Clear user model
    } else {
      // Form is invalid or passwords don't match, you can show an alert or handle errors
      console.log('Form is invalid or passwords do not match.');
      // Mark all fields as touched to display validation messages
      form.control.markAllAsTouched();
    }
  }
}