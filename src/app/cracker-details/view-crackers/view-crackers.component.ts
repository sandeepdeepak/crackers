import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CRACKERSLIST } from './crackers-list';
import { CrackersService } from './view-crackers.service';

@Component({
  selector: 'app-view-crackers',
  templateUrl: './view-crackers.component.html',
  styleUrls: ['./view-crackers.component.scss'],
  providers: [CrackersService]
})
export class ViewCrackersComponent implements OnInit {

  crackersList = CRACKERSLIST;
  cartItems: any[] = [];
  customerName = '';
  mobileNo: any = null;
  constructor(private http: HttpClient, private crackersServ: CrackersService) { }

  ngOnInit(): void {
  }

  calcAmount(item: any, i: number, j: number) {
    this.crackersList[i].items[j].totalamount = item.requirement * item.rate;
    this.setCartItems();
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

  setCartItems() {
    this.cartItems = [];
    this.crackersList.forEach((cat: any) => {
      cat.items.forEach((item: any) => {
        if (item.totalamount) {
          this.cartItems.push(item);
        }
      });
    });
  }

  sendOrderByWhatsApp() {
    let message = `Customer Name: ${this.customerName.toUpperCase()} \\n`;
    message += `Mobile No: ${this.mobileNo} \\n \\n`;
    message += `Order List:  \\n \\n`;
    this.cartItems.forEach((item: any) => {
      message += `${item.itemName} (${item.requirement}) - Rs.${item.totalamount}.00 \\n`;
    });
    message += `\\nTotal Amount: Rs.${this.calcSumTotal()}.00 \\n \\n`;
    console.log(message);
    this.crackersServ.sendOrderthroughWhatsApp(message, '918056759212').subscribe(() => {
      window.location.reload();
    });
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
