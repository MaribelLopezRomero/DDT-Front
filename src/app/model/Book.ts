import { OrderDetail } from './OrderDetail';
import { Rating } from './Rating';
export class Book {

    private bookID: number;
    private title: string;
    private isbn: string;
    private price: number;
    private sinopsis: string;
    private available: boolean;
    private ratingList: Rating[];
    private orderDetails: OrderDetail[];

    public constructor(bookID: number, title: string, isbn: string, price: number, sinopsis: string, available: boolean, ratingList: Rating[], orderDetails: OrderDetail[]){
        this.bookID = bookID;
        this.title = title;
        this.isbn = isbn;
        this.price = price;
        this.sinopsis = sinopsis;
        this.available = available;
        this.ratingList = ratingList;
        this.orderDetails = orderDetails;
    }

    public getBookID(): number {
        return this.bookID;
    }

    public setBookID(newBookID: number) {
        this.bookID = newBookID;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(newTitle: string) {
        this.title = newTitle;
    }

    public getIsbn(): string {
        return this.isbn;
    }

    public setIsbn(newIsbn: string) {
        this.title = newIsbn;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(newPrice: number) {
        this.price = newPrice;
    }

    public getSinopsis(): string {
        return this.sinopsis;
    }

    public setSinopsis(newSinopsis: string) {
        this.sinopsis = newSinopsis;
    }

    public getAvailable(): boolean {
        return this.available;
    }

    public setAvailable(newAvailable: boolean) {
        this.available = newAvailable;
    }

    public getRatingList(): Rating[]{
        return this.ratingList;
    }

    public setRatingList(newRatingList: Rating[]){
        this.ratingList = newRatingList;
    }

    public getOrderDetails(): OrderDetail[]{
        return this.orderDetails;
    }

    public setOrderDetails(newOrderDetails: OrderDetail[]){
        this.orderDetails = newOrderDetails;
    }
}