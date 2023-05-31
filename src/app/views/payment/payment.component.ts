import { Component } from '@angular/core';
import { Book } from 'src/app/model/Book';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  cart: Book[] = [];
  cartPrice: number = 0;

  ngOnInit() {
      this.loadCart();
  }

  // Save cart
  saveCart() {
    if(localStorage.getItem("usuario") != null){
      localStorage.setItem("cart"+localStorage.getItem("usuario"), JSON.stringify(this.cart));
    }
  }

  loadCart() {
    if(localStorage.getItem("usuario") != null){
      const storedCart: any = JSON.parse(localStorage.getItem("cart"+localStorage.getItem("usuario")) || '{}');
      this.cart = Object.values(storedCart).map((obj: any) => new Book(obj.bookID, obj.title, obj.isbn, obj.price, obj.sinopsis, obj.available, obj.ratingList, obj.orderDetails));
    }else{
      this.cart = [];
    }
  }

  numProductosCart() {
    this.loadCart();
    return this.cart.length;
  }
  getCartPrice() {
    this.cartPrice = 0;
    this.loadCart();
    for (let i = 0; i < this.cart.length; i++) {
      this.cartPrice += (this.cart.at(i) as Book).getPrice();
    }
    return this.cartPrice;
  }
}
