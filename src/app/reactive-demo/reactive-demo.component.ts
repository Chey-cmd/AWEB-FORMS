import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.component.html',
  styleUrl: './reactive-demo.component.css'
})
export class ReactiveDemoComponent {
  registrationForm: FormGroup;
  submittedEntries: any[] = [];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]], // Replaced course with password
      gender: ['', Validators.required], // Added Gender
      status: ['', Validators.required], // Added Status
      comments: [''] // Added Comments
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.submittedEntries.push(this.registrationForm.value);
      this.registrationForm.reset();
    }
  }
}
