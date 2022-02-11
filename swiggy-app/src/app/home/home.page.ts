import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  foodSlideOptions = {
    slidesPerView: 2.5,
    spaceBetween: 5,
    slidesPerColumn: 2
  }

  offer = {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerColumn: 1,
    pager: true
  }

  food = [
    {
      hotelName: 'Banana Leaf',
      rating: 4.3,
      imageUrl: 'assets/images/biryani.jpg',
      mins: '46 mins'
    },
    {
      hotelName: 'Cake World',
      rating: '4.0',
      imageUrl: 'assets/images/cake.jpg',
      mins: '35 mins'
    },
    {
      hotelName: 'Juice Shop',
      rating: '4.5',
      imageUrl: 'assets/images/juice.jpeg',
      mins: '20 mins'
    },
    {
      hotelName: 'KFC',
      rating: '4.1',
      imageUrl: 'assets/images/kfc.jpg',
      mins: '40 mins'
    },
    {
      hotelName: 'BBQ',
      rating: '4.0',
      imageUrl: 'assets/images/bbq.jpeg',
      mins: '35 mins'
    },
    {
      hotelName: 'Cake World',
      rating: '4.0',
      imageUrl: 'assets/images/cake.jpg',
      mins: '35 mins'
    },
    {
      hotelName: 'KFC',
      rating: '4.1',
      imageUrl: 'assets/images/kfc.jpg',
      mins: '40 mins'
    },
    {
      hotelName: 'Cake World',
      rating: '4.0',
      imageUrl: 'assets/images/cake.jpg',
      mins: '35 mins'
    },

  ];

  popularItem = [
    {
      foodName: 'Burger',
      imageUrl: 'assets/images/pop1.jpeg',
    },
    {
      foodName: 'Salad',
      imageUrl: 'assets/images/pop1.jpeg',
    },
    {
      foodName: 'kebabs',
      imageUrl: 'assets/images/pop1.jpeg',
    },
    {
      foodName: 'Dessert',
      imageUrl: 'assets/images/pop3.png',
    },
    {
      foodName: 'Sandwiches',
      imageUrl: 'assets/images/pop3.png',
    },
    {
      foodName: 'Plums',
      imageUrl: 'assets/images/pop3.png',
    },

  ];

  todayOffer = [
    {
      imageUrl: 'assets/images/off1.png',
    },
    {
      imageUrl: 'assets/images/off2.jpg',
    },
    {
      imageUrl: 'assets/images/off1.jpg',
    },
    {
      imageUrl: 'assets/images/off4.jpg',
    },
    {
      imageUrl: 'assets/images/off5.png',
    },
    {
      imageUrl: 'assets/images/off6.png',
    },

  ]

  constructor() { }

}
