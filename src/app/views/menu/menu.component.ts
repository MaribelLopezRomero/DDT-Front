import { Component, NgModule, OnInit } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { Rating } from 'src/app/model/Rating';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  bookList: Book[] = [];
  filteredBookList: Book[] = [];
  cart: Book[] = [];
  cartPrice: number = 0;
  search: string = "";
  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.bookList = Object.values(data).map((obj: any) => new Book(obj.id, obj.title, obj.isbn, obj.price, obj.sinopsis, obj.available, obj.ratingList, obj.orderDetails));
      this.filteredBookList = this.bookList;
      this.loadCart();
    });
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

  addToCart(event: { target: any; }){
    if(localStorage.getItem("usuario") == null){
      this.router.navigate(['/login']);
    }else{
      let target = event.target;
      let id = target.attributes.id;
      var value = id.nodeValue;
      this.loadCart();
      for(let i = 0; i<this.bookList.length; i++){
        if(this.bookList.at(i)?.getBookID() == value){
          let aux = this.bookList.at(i) as Book;
          this.cart.unshift(aux);
        }
      }
      this.saveCart();
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

  searchText: string = "";

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  goProduct(id: number){
    this.router.navigate(['/product', id]);
  }

  priceRange(){
    let min = (document.getElementById("precioMin") as HTMLInputElement).value;
    let max = (document.getElementById("precioMax") as HTMLInputElement).value;
    if((document.getElementById("precioMin") as HTMLInputElement).value == ''){
      min = '0';
    }
    if((document.getElementById("precioMax") as HTMLInputElement).value == ''){
      max = '9999';
    }
    this.bookService.getBooksByPriceRange(min, max).subscribe(data => {
      this.bookList = Object.values(data).map((obj: any) => new Book(obj.id, obj.title, obj.isbn, obj.price, obj.sinopsis, obj.available, obj.ratingList, obj.orderDetails));
      this.filteredBookList = this.bookList;
      this.loadCart();
    });
  }

  cleanPriceRange(){
    (document.getElementById("precioMin") as HTMLInputElement).value = '';
    (document.getElementById("precioMax") as HTMLInputElement).value = '';
    this.priceRange();
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
