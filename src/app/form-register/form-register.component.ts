import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get city() {
    return this.registrationForm.get('city');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  countries = ['Macedonia', 'Russia', 'United States', 'Greece'];

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    gender: ['male'],
    city: ['', Validators.required],
    contry: ['Macedonia'],
    phone: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
  });

  onSubmit() {
    console.log(this.registrationForm.value);
  }

  ngOnInit(): void {
  }

}
