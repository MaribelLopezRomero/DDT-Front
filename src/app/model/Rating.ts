import { Book } from "./Book";
import { User } from "./User";

export class Rating {

    private ratingID: number;
    private starValue: number;
    private book: Book;
    private user: User;

    constructor(ratingID: number, starValue: number, book: Book, user: User) {
        this.ratingID = ratingID;
        this.starValue = starValue;
        this.book = book;
        this.user = user;
    }

    public getRatingID(): number {
        return this.ratingID;
    }

    public setRatingID(newRatingID: number) {
        this.ratingID = newRatingID;
    }

    public getStarValue(): number {
        return this.starValue;
    }

    public setStarValue(newStarValue: number) {
        this.starValue = newStarValue;
    }

    public getBook(): Book{
        return this.book;
    }

    public setBook(newBook: Book){
        this.book = newBook;
    }

    public getUser(): User{
        return this.user;
    }

    public setUser(newUser: User){
        this.user = newUser;
    }
}