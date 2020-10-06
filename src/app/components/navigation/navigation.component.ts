import { Component, OnInit } from '@angular/core';
import { CarDetailsGuard } from "../../guards/car-details.guard";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public carDetailsGuard: CarDetailsGuard) { }

  ngOnInit(): void {
  }

  

}
