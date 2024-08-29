import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    /** INTERPOLACION **/
    /* 1era opcion colocar ! al final de la variable  EJ:*/
    /*2da opcion, despues del string indicar el valor de la variable, 'message: string = "";' */
    mensaje: string;
    username: string;
    password: string;
    
    constructor( private toastController: ToastController, private router: Router ) {
      /*3era opcion declararlo en el contructor*/
      this.mensaje = "Bienvenido!";
      this.username = "";
      this.password = "";
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    validateLogin(){
      const usernameValidation: string = " admin";
      const paaswordValidation: string = " 1234";
      if (
        this.password === paaswordValidation &&
        this.username === usernameValidation) {
        /*completar*/
          this.generateMessage('Datos correctos', 'success');
          let extras: NavigationExtras = {
            state: {user: this.username}
          }
          this.router.navigate(['/home'], extras);
      }else{
        this.generateMessage('Datos incorrectos', 'danger');
      }
    } 
    async generateMessage(message: string, color: string){
      const toast = await this.toastController.create({
        /*  */
        message: message,
        duration: 3000 /* en milisegundos */,
        position: 'bottom',
        color: color
      });
      toast.present();
    }
  }

