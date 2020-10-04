import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:any = [];
  searchTerm: string;

  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.carService.getCars()
      .subscribe(data => this.cars = data);
  }

}
