import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { pastOrder } from '../shared/model/food.modal';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  pastOrder: pastOrder[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList(): void{
    this.http.get<any>('assets/data/foodList.json')
    .pipe(
      debounceTime(2000))
    .subscribe((res: any) => {
      setTimeout(() => {
      }, 800);
       this.pastOrder= res.data5.pastOrder;
       console.log('hotel list', this.pastOrder)
    });
  }

}
