import { Component, Input, OnInit } from '@angular/core';
import { hotelDetails } from '../shared/model/food.modal';

@Component({
  selector: 'app-nearby-restaurants',
  templateUrl: './nearby-restaurants.component.html',
  styleUrls: ['./nearby-restaurants.component.scss'],
})
export class NearbyRestaurantsComponent implements OnInit {

  @Input() hotelLists: hotelDetails;

  constructor() { }

  ngOnInit() {}

}
