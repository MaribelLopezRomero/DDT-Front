import { Order } from "./Order";

export class Incidence{
    private incidenceID: number;
	  private description: string;
    private order: Order;

    constructor(
        incidenceID: number,
        description: string,
        order: Order
      ) {
        this.incidenceID = incidenceID;
        this.description = description;
        this.order = order;
      }

    public getIncidenceID(): number {
        return this.incidenceID;
    }

    public setIncidenceID(newIncidenceID: number) {
        this.incidenceID = newIncidenceID;
    }    

    public getDescription(): string {
      return this.description;
    }

    public setDescription(newDescription: string){
        this.description = newDescription;
    }  

    public getOrder(): Order{
      return this.order;
    }

    public setOrder(newOrder: Order){
      this.order = newOrder;
    }
}