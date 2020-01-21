import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  obj = { productId: 2, productName: 'xx手机', model: 's', type: '全面屏' };
  date: Date;
  constructor() {}

  ngOnInit() {
    this.date = this.minusDays(new Date(), 2);
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }
}
