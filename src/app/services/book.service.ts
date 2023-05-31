import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../model/Book';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private booksUrl: string;
  private bookById: string;
  private booksByPriceRange: string;

  constructor(private http: HttpClient) {
    this.booksUrl = 'http://localhost:8090/api/v1/book/available';
    this.bookById = 'http://localhost:8090/api/v1/book/id/';
    this.booksByPriceRange = 'http://localhost:8090/api/v1/book/price/';
  }

  public getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.booksUrl);
  }

  public getBookById(id: number): Observable<any>{
    return this.http.get<any>(this.bookById+""+id);
  }

  public getBooksByPriceRange(min: string, max: string): Observable<Book[]>{
    return this.http.get<Book[]>(this.booksByPriceRange+min+","+max);
  }
}
