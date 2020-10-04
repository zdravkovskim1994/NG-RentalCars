import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  vehicles: number = 100;
  phone: string = '(+389) 47 333 555';

  constructor() { }

  ngOnInit(): void {
  }

}
