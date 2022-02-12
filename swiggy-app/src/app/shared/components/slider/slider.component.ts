import { Component, Input, OnInit } from '@angular/core';
import { hotelDetails } from '../../model/food.modal';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  foodSlideOptions = {
    slidesPerView: 2.5,
    spaceBetween: 5,
    slidesPerColumn: 2
  }

  @Input() hotelLists: hotelDetails;  

  constructor() { }

  ngOnInit() {}

}
