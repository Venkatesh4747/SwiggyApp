import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

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

    private assessmentData = new BehaviorSubject({});
    data = this.assessmentData.asObservable();
  
    addData(data: any) {
      this.assessmentData.next(data);
    }
}
