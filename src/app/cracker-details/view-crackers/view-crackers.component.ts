import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CRACKERSLIST } from './crackers-list';

@Component({
  selector: 'app-view-crackers',
  templateUrl: './view-crackers.component.html',
  styleUrls: ['./view-crackers.component.scss']
})
export class ViewCrackersComponent implements OnInit {

  crackersList = CRACKERSLIST;
  constructor(private http: HttpClient) { }

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

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xvodyvrg',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }

}

// https://formspree.io/f/xvodyvrg
