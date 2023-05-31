import { OrderDetail } from './OrderDetail';
import { Location } from './Location';
import { Incidence } from './Incidence';
import { User } from './User';

export class Order {

    private orderID: number;
    private orderDate: Date;
    private orderDetails: OrderDetail[];
    private incidences: Incidence[];
    private user: User;
    private location: Location;

    constructor(orderID: number, orderDate: Date, orderDetails: OrderDetail[], incidences: Incidence[], user: User, location: Location) {
        this.orderID = orderID
        this.orderDate = orderDate;
        this.orderDetails = orderDetails;
        this.incidences = incidences;
        this.user = user;
        this.location = location;
    }

    public getOrderID(): number {
        return this.orderID;
    }

    public setOrderID(newOrderID: number) {
        this.orderID = newOrderID;
    }

    public getOrderDate(): Date {
        return this.orderDate;
    }

    public setOrderDateID(newOrderDate: Date) {
        this.orderDate = newOrderDate;
    }

    public getOrderDetails(): OrderDetail[] {
        return this.orderDetails;
    }

    public setOrderDetails(newOrderDetails: OrderDetail[]) {
        this.orderDetails = newOrderDetails;
    }

    public getIncidences(): Incidence[] {
        return this.incidences;
    }

    public setIncidences(newIncidences: Incidence[]) {
        this.incidences = newIncidences;
    }

    public getUser(): User {
        return this.user;
    }

    public setUser(newUser: User) {
        this.user = newUser;
    }

    public getLocation(): Location {
        return this.location;
    }

    public setLocation(newLocation: Location) {
        this.location = newLocation;
    }
}