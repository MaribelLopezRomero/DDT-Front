import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UserInterface } from '../Interface/UserInterface';
import { Order } from '../model/Order';
import { Rol, User } from '../model/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {


  URL = "http://localhost:8090/api/v1/user/";   


  constructor(private http: HttpClient) { }

  getUser(userLogin: any) {
   return this.http.get<any>(`${this.URL}username/${userLogin.userName}`);
  }

  signUpUser(user: UserInterface){

    //retornara o true o el objeto registrado.

    //SIMULACION DATOS

    const {
      name,
      email,
      password,
    } = user;



    return of(null);

   //return this.http.post(`${this.URL}`, user);

  }

}
