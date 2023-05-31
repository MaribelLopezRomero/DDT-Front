import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserInterface } from '../../Interface/UserInterface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


  constructor(private router:Router, private userService: UserService){

  }

signUpSuccess:boolean = true; //true o false si se ha podidio o no insertar el usuario
passwordSame:boolean = true; //true o false si las contraseñas coinciden
 
//NGModel
  signUpForm ={
    name:"",
    email:"",
    password:"",
    passwordRepeat:""

  }

signUp(form:NgForm){

    const email=form.value.email;
    const password=form.value.password;
    const passwordRepeat=form.value.passwordRepeat;
    const name=form.value.name;

    //interfaz con datos de registro de un usuario
    const userSignUp: UserInterface ={
      name: name,
      email: email,
      password: password,
      passwordRepeat: passwordRepeat,

      checkPassword() {
        return this.password === this.passwordRepeat;
      }
    }

    console.log("metodo chekpasword", userSignUp.checkPassword())

    //ckeckPassword

    if(userSignUp.checkPassword()===true){
      this.passwordSame=true;
      this.signUpUser(userSignUp);
      this.navigateLogin();
    }else{
      this.passwordSame=false;
    }

    



}

//Llama al servicio que manda al usuario al back
signUpUser(userSignUp: UserInterface) {
  console.log("interfaz usuario con los datos del registro que mando al UserService", userSignUp);
  this.userService.signUpUser(userSignUp).subscribe(data => {

    console.log("ususario que me mandaria el back", data)

    if(data ==null){
      this.signUpSuccess=false;
    }else{
      this.signUpSuccess=true;
      console.log("resgistro exitoso")
    }

  });
}

//navegar al login 
  navigateLogin() {

  //fake para simular que el usuario ya esta registrado
  //  this.signUpSuccess=false;

    if(this.signUpSuccess){
      this.router.navigate(['/login']);
    }
  }

}