import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.css'
})
export class CustomFormComponent {
  ticketForm: FormGroup;
  submittedTickets: any[] = [];

  constructor(private fb: FormBuilder) {
    this.ticketForm = this.fb.group({
      requesterName: ['', Validators.required],
      department: ['', Validators.required],
      issueCategory: ['', Validators.required],
      priority: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      this.submittedTickets.push(this.ticketForm.value);
      this.ticketForm.reset();
    }
  }
}
