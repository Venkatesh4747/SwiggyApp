import { Component, Input, OnInit } from '@angular/core';
import { popularItem } from '../shared/model/food.modal';

@Component({
  selector: 'app-popular-creation',
  templateUrl: './popular-creation.component.html',
  styleUrls: ['./popular-creation.component.scss'],
})
export class PopularCreationComponent implements OnInit {

  @Input() popLists: popularItem;
  foodSlideOptions = {
    slidesPerView: 3,
    spaceBetween: 5,
    slidesPerColumn: 2
  }

  constructor() { }

  ngOnInit() {}

}
