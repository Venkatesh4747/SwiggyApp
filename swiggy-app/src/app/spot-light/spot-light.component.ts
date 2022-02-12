import { Component, Input, OnInit } from '@angular/core';
import { hotelDetails } from '../shared/model/food.modal';

@Component({
  selector: 'app-spot-light',
  templateUrl: './spot-light.component.html',
  styleUrls: ['./spot-light.component.scss'],
})
export class SpotLightComponent implements OnInit {
  foodSlideOptions = {
    slidesPerView: 2.5,
    spaceBetween: 5,
    slidesPerColumn: 2
  }
  @Input() hotelLists: hotelDetails;

  constructor() { }

  ngOnInit() {}

}
