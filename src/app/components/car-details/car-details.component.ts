import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car:any = [];

  constructor(private route: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.carsService.getCar(id).subscribe(c => {
      console.log(c);
      this.car = c;
    })

  }

}
