import { Book } from "./Book";
import { Order } from "./Order";

export class OrderDetail {

    private orderdetail_id: number;
    private quantity: number;
    private book: Book;
    private order: Order;
  
    constructor(orderdetail_id: number, quantity: number, book: Book, order: Order) {
      this.orderdetail_id= orderdetail_id;
      this.quantity = quantity;
      this.book = book;
      this.order = order;
    }

    public getOrderdetail_id(): number {
        return this.orderdetail_id;
      }
    
      public setOrderdetail_id(orderdetail_id: number): void {
        this.orderdetail_id = orderdetail_id;
      }
    
      public getQuantity(): number {
        return this.quantity;
      }
    
      public setQuantity(quantity: number): void {
        this.quantity = quantity;
      }
    
      public getBook(): Book {
        return this.book;
      }
    
      public setBook(book: Book): void {
        this.book = book;
      }

      public getOrder(): Order {
        return this.order;
      }
    
      public setOrder(newOrder: Order){
        this.order = newOrder;
      }
}