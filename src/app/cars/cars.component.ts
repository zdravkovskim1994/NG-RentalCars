import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  availableCars:any = [
    {
      carId: 0,
      tagNumber: "SK 3341 SS",
      model: "WV-Golf",
      carYear: "2017",
      airConditioner: 1,
      daily: 2500,
      monthly: 15000
    },
    {
      carId: 1,
      tagNumber: "SK 4341 SS",
      model: "Audi-A3",
      carYear: "2019",
      airConditioner: 1,
      daily: 4000,
      monthly: 25000
    },
    {
      carId: 2,
      tagNumber: "SK 3341 SS",
      model: "Opel-Corsa",
      carYear: "2014",
      airConditioner: 0,
      daily: 1500,
      monthly: 10000
    },
    {
      carId: 3,
      tagNumber: "SK 6941 AB",
      model: "Mercedes-Cls",
      carYear: "2019",
      airConditioner: 1,
      daily: 5000,
      monthly: 29000
    },
    {
      carId: 4,
      tagNumber: "BT 3341 AB",
      model: "Audi-A4",
      carYear: "2018",
      airConditioner: 1,
      daily: 5500,
      monthly: 28000
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
