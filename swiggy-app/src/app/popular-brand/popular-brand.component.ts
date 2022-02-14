import { Component, Input, OnInit } from '@angular/core';
import { popularBrands } from '../shared/model/food.modal';

@Component({
  selector: 'app-popular-brand',
  templateUrl: './popular-brand.component.html',
  styleUrls: ['./popular-brand.component.scss'],
})
export class PopularBrandComponent implements OnInit {

  @Input() brandList: popularBrands;

  brandSlide = {
    slidesPerView: 3.5,
    spaceBetween: 5,
    slidesPerColumn: 2
  }
  constructor() { }

  ngOnInit() {
    console.log()
  }

}
