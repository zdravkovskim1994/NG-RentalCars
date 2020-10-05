import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-travel',
  templateUrl: './card-travel.component.html',
  styleUrls: ['./card-travel.component.css']
})
export class CardTravelComponent implements OnInit {

  @Input() img: string;
  @Input() cardTitle: string;
  @Input() readMore: string;

  constructor() { }

  ngOnInit(): void {
  }

}
