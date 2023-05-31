import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  }
  
  

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}