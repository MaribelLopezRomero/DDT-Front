import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  id: number = 0;
  product!: Book;
  cart: Book[] = [];
  cartPrice: number = 0;
  private sub: any;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
    this.loadCart();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.bookService.getBookById(this.id).subscribe(data => {
      this.product = new Book(data.bookID, data.title, data.isbn, data.price, data.sinopsis, data.available, data.ratingList, data.orderDetails);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
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
  // Clear cart
  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  addToCart(){
    if(localStorage.getItem("usuario") == null){
      this.router.navigate(['/login']);
    }else{
      this.loadCart();
      let aux = this.product as Book;
      this.cart.unshift(aux);
      this.saveCart();
    }
  }

  numProductosCart() {
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

  goPayment(){
    if(localStorage.getItem("cart"+localStorage.getItem("usuario")) == '[]' || localStorage.getItem("cart"+localStorage.getItem("usuario")) == null || localStorage.getItem("cart"+localStorage.getItem("usuario")) == undefined){
      alert("¡¡¡Cesta vacía!!!");
    }else{
      this.router.navigate(['/pago']);
    }
  }

  goLogin(){
    if(localStorage.getItem("usuario") == null){
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/perfil']);
    }
  }

  logOff(){
    localStorage.removeItem("usuario");
    this.router.navigate(['/menu']);
    this.loadCart();
  }
}

