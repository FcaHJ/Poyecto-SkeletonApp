import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    /** INTERPOLACION **/
    /* 1era opcion colocar ! al final de la variable  EJ: mensaje!*/
    /*2da opcion, despues del string indicar el valor de la variable, 'message: string = "";' */
    mensaje: string;
    username!: string;
    password!: string;
    
    constructor( 
      private toastController: ToastController, 
      private router: Router, 
      private loginService: LoginService ) {
      /*3era opcion declararlo en el contructor*/
      this.mensaje = "Bienvenido!";
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    validateLogin(){
      if (
        this.loginService.validateLogin(this.username, this.password)) {
          this.generateMessage('Datos correctos', 'success');
          let extras: NavigationExtras = {
            state: {user: this.username}
          }
          this.router.navigate(['/home'], extras);
          console.log('pass');
      }else{
        this.generateMessage('Datos incorrectos', 'danger');
      }
    } 
    async generateMessage(message: string, color: string){
      const toast = await this.toastController.create({
        /* mensage de error o exito en credenciales de inicio de sesion */
        message: message,
        duration: 3000 /* en milisegundos */,
        position: 'bottom',
        color: color
      });
      await toast.present();
    }
  }

