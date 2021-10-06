import { Component, OnInit, ViewChild } from '@angular/core';
import { CRACKERSLIST } from './crackers-list';

@Component({
  selector: 'app-view-crackers',
  templateUrl: './view-crackers.component.html',
  styleUrls: ['./view-crackers.component.scss']
})
export class ViewCrackersComponent implements OnInit {

  crackersList = CRACKERSLIST;
  constructor() { }

  ngOnInit(): void {
  }

  calcAmount(item: any, i: number, j: number) {
    this.crackersList[i].items[j].totalamount = item.requirement * item.rate;
  }

  calcSumTotal() {
    let sumTotal = 0;
    this.crackersList.forEach((cat: any) => {
      cat.items.forEach((item: any) => {
        if (item.totalamount) {
          sumTotal = sumTotal + item.totalamount;
        }
      });
    });
    return sumTotal
  }

}
