import { Component, OnInit } from '@angular/core';
import { foodDet } from '../shared/model/food.modal';
import { FoodDetailsService } from '../shared/service/food-details.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.page.html',
  styleUrls: ['./food-details.page.scss'],
})
export class FoodDetailsPage implements OnInit {
  // foodDetails: foodDet = {} as foodDet ;
  foodDetails: foodDet | any
  buttonText = "";
  buttonIcon = "chevron-back-outline";  

  constructor(
    private hotelData: FoodDetailsService 
  ) { }

  ngOnInit() {
    this.hotelData.data.subscribe(data => {
      console.log('dasfadsf', data)
      this.foodDetails = data;
      // console.log('the selected ', this.foodDetails)
    });
  }

}
