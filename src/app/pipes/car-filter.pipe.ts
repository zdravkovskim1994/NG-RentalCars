import { Pipe, PipeTransform } from '@angular/core';
import { CarsService } from '../services/cars.service';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  cars:any = [];

  constructor(private carService: CarsService) { }

  transform(cars: any, searchTerm: string): unknown {
    if(!cars || !searchTerm){
      return cars;
    }

    return cars.filter(car =>
       car.model.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    
  }


  ngOnInit(): void {
    this.carService.getCars()
      .subscribe(data => this.cars = data);
  }

}
