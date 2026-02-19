import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.component.html',
  styleUrl: './template-demo.component.css'
})
export class TemplateDempComponent {
  user = {
    name: '',
    email: '',
    password: '',
    gender: '',
    status: '',
    comments: ''
  };

  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      console.log('Template Form Submitted', this.user);
    }
  }
}
