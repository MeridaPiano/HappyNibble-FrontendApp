import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {

  public contactForm: FormGroup = this.fb.group({
    name: [''],
    surname: [''],
    phone: [''],
    email: [''],
    message: [''],
  });

  constructor (private fb: FormBuilder){}
}
