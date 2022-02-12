import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FoodDetailsService {
  getProfile() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient
  ) { }

    getHotelFood() {
      this.http.get('./assets/data/foodList.json');
    }
}
