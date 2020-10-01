import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  alert: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(value: any, userForm: NgForm) {
    console.log(value);
    this.alert = true;
    userForm.reset();

    // this.router.navigate(['home']);

    setTimeout(() => {
      this.router.navigate(['home'])
    }
    , 1000);

  }

}
