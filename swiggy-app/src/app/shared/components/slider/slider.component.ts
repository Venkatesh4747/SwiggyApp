import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hotelDetails } from '../../model/food.modal';
import { FoodDetailsService } from '../../service/food-details.service';

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

  constructor(
    private route: Router, private foodservice: FoodDetailsService
  ) { }

  ngOnInit() {}

  foodDetails(data) {
    console.log(data)
    this.foodservice.addData(data);
    this.route.navigate([`/home/food-details/${data.id}`]);
  }
}
