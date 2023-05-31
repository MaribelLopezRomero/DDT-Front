import { Book } from "./Book";
import { Incidence } from "./Incidence";
import { Order } from "./Order";
import { Rating } from "./Rating";

  
  enum Rol {
    ADMIN = "ADMIN",
    USER = "USER",
  }
  
  class User {
  private id: number;
  private userName: string;
  private firstName: string;
  private lastName: string;
  private password: string;
  private email: string;
  private vip: boolean;
  private activated:boolean;
  private rol: Rol;
  private history: Order[];
  private favouriteBooks: Book[];
  private ratingList: Rating[];



  constructor(
    id: number,
    history: Order[],
    favouriteBooks: Book[],
    userName: string,
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    vip: boolean,
    activated:boolean,
    rol: Rol,

    ratingList: Rating[]
  ) {
    this.id = id;
    this.history = history;
    this.favouriteBooks = favouriteBooks;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.vip = vip;
    this.activated = activated;
    this.rol = rol;
    this.ratingList = ratingList;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getHistory(): Order[] {
    return this.history;
  }

  public setHistory(history: Order[]): void {
    this.history = history;
  }

  public getFavouriteBooks(): Book[] {
    return this.favouriteBooks;
  }

  public setFavouriteBooks(favouriteBooks: Book[]): void {
    this.favouriteBooks = favouriteBooks;
  }

  public getUserName(): string {
    return this.userName;
  }

  public setUserName(userName: string): void {
    this.userName = userName;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getVip(): boolean {
    return this.vip;
  }

  public setVip(vip: boolean): void {
    this.vip = vip;
  }

  public getActivated(): boolean {
    return this.activated;
  }

  public setActivated(activated: boolean): void {
    this.activated = activated;
  }

  public getRol(): Rol {
    return this.rol;
  }

  public setRol(rol: Rol): void {
    this.rol = rol;
  }


  public getRatingList(): Rating[] {
    return this.ratingList;
  }

  public setRatingList(ratingList: Rating[]): void {
    this.ratingList = ratingList;
  }

  
  }
  
  export { User, Rol };
  