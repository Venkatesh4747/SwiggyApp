import { Component, Input, OnInit } from '@angular/core';
import { todayOffer } from '../shared/model/food.modal';

@Component({
  selector: 'app-today-features',
  templateUrl: './today-features.component.html',
  styleUrls: ['./today-features.component.scss'],
})
export class TodayFeaturesComponent implements OnInit {

  @Input() featureList: todayOffer;

  foodSlideOptions = {
    slidesPerView: 1.3,
    spaceBetween: 5,
    
  }

  image = [ 
  
    {
      imageUrl: 'https://images.freekaamaal.com/post_images/1606887324.jpg'
    },
    {
      imageUrl: 'https://www.dealsshutter.com/uploads/social_images/stores/swiggy-coupons-social-image-final-1621831150.jpg'
    },
    {
      imageUrl: 'https://indianoffers.in/images/product/detail/thumb/1573320994swiggy-coupons-offers-19.jpeg'
    },
    // {
    //   imageUrl: 'https://hotdealszone.com/wp-content/uploads/2019/08/Amazon-Pay-Swiggy-Rs-30-cashback-1024x398.jpg'
    // },
    // {
    //   imageUrl: 'https://i.pinimg.com/originals/23/a6/85/23a6857e4809730c5039f08d77872ed3.png'
    // }
  ]


  constructor() { }

  ngOnInit() {
    console.log('today offer', this.featureList)
   }

}
