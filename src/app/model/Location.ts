export class Location {
    private locationID: number;
    private street: string;
    private number: number;
    private town: string;
    private province: string;
    private cp: string;
    private telephone: string;
  
    constructor(
      locationID: number,
      street: string,
      number: number,
      town: string,
      province: string,
      cp: string,
      telephone: string,
    ) {
      this.locationID = locationID;
      this.street = street;
      this.number = number;
      this.town = town;
      this.province = province;
      this.cp = cp;
      this.telephone = telephone;
    }
  
    getLocationID(): number {
      return this.locationID;
    }
  
    setLocationID(locationID: number): void {
      this.locationID = locationID;
    }
  
    getStreet(): string {
      return this.street;
    }
  
    setStreet(street: string): void {
      this.street = street;
    }
  
    getNumber(): number {
      return this.number;
    }
  
    setNumber(number: number): void {
      this.number = number;
    }
  
    getTown(): string {
      return this.town;
    }
  
    setTown(town: string): void {
      this.town = town;
    }
  
    getProvince(): string {
      return this.province;
    }
  
    setProvince(province: string): void {
      this.province = province;
    }
  
    getCp(): string {
      return this.cp;
    }
  
    setCp(cp: string): void {
      this.cp = cp;
    }
  
    getTelephone(): string {
      return this.telephone;
    }
  
    setTelephone(telephone: string): void {
      this.telephone = telephone;
    }
  }
  

  