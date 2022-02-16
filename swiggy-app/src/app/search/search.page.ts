import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { popularCuisines } from '../shared/model/food.modal';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  popular: popularCuisines[];

  popularSlide = {
    slidesPerView: 4,
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList(): void {
    this.http.get<any>('assets/data/foodList.json')
      .pipe(
        debounceTime(2000))
      .subscribe((res: any) => {
        setTimeout(() => {
        }, 800);
        this.popular = res.data4.popular;
        console.log('hotel list', this.popular);
      });
  }
}
