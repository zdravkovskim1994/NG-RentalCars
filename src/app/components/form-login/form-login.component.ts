import { AnimationStyleMetadata } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  alert: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: any, userForm: NgForm) {
    console.log(value);
    this.alert = true;
    userForm.reset();
    

  }

}
