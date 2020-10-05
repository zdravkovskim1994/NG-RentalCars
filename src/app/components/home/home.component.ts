import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img1: string = "https://www.momondo.com/discover/wp-content/uploads/sites/260/2017/01/adc91ebd-f21a-34d0-bb2c-3d4039e381f5.jpg";
  cardTitle1: string = "The most underrated destinations across the USA";
  readMore1: string = "https://www.momondo.com/discover/unseen-cities-vacations-in-the-usa";

  img2: string = "https://www.momondo.com/discover/wp-content/uploads/sites/260/2019/05/2f5e8edc-752c-394d-b304-249db8bba475.jpg";
  cardTitle2: string = "An epic Florida road trip: not your usual suspects";
  readMore2: string = "https://www.momondo.com/discover/florida-road-trip";

  img3: string = "https://www.momondo.com/discover/wp-content/uploads/sites/260/2019/04/b4eac335-e67e-3ca2-a758-41ac21847dee.jpg";
  cardTitle3: string = "USA road trip: discover the canyon country of the American Southwest";
  readMore3: string = "https://www.momondo.com/discover/american-road-trip-canyon-country";
  constructor() { }

  ngOnInit(): void {
  }

}
