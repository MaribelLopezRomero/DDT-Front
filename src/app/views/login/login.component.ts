import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Rol, User } from 'src/app/model/User';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private userService: UserService, private localStorageService: LocalStorageService) {
  }

  //feedback al usario
  inicioExitoso: boolean = true;
  usuarioNoexiste: boolean = false;
  feedback="";

  //NgModel formulario login
  loginForm = {
    userName: null,
    password: null
  }

  //Objeto Usuario que me traigo de la BBDD cuando ha hecho login

  user!: User;

  login(form: NgForm) {
    this.loginForm.userName = form.value.userName;
    this.loginForm.password = form.value.password;

    //creamos un objeto para pasarle al back
    let userLogin: any = {};
    userLogin.userName = this.loginForm.userName;
    userLogin.password = this.loginForm.password;

    this.getUser(userLogin);


  }

  getUser(userLogin: any) {
    this.userService.getUser(userLogin).subscribe(data => {

      /* console.log(data) */


      /* console.log("user que trae el servicio", data) */

      //si el usuario no existe en la base de datos

      if (data == null) {
        this.usuarioNoexiste = true;
        this.feedback="El usuario no esta registrado"
      } else {

        const newUser = new User(
          data.userId, // id
          data.history, // history
          data.favorites, // favouriteBooks
          data.userName, // userName
          data.firstName, // firstName
          data.lastName, // lastName
          data.password, // password
          data.email, // email
          data.vip, // vip
          data.activated,
          data.rol, // rol
          data.ratings // ratingList
        );
        //comprobar que la contraseña coincide

        if (data.password == userLogin.password) {
          //Guardar el usuario en localStorage
          this.saveUserLocalStorage(newUser);

          //navegamos a home
          this.navigateHome();
        } else {
          this.inicioExitoso = false;
          this.feedback="Las contraseñas no coinciden"
        }

      }
    }
    )
  }

  saveUserLocalStorage(user: User) {
    /* console.log("usuario a guardar en el localstorgae", user) */
    this.localStorageService.setItem("usuario", user.getId());
  }

  navigateHome() {

    this.router.navigate(['/menu']); //pasar el objeto USUARIO

  }

}
