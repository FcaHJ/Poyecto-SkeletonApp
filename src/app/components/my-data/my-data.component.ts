import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss'],
})
export class MyDataComponent  implements OnInit {

  username: string = 'guest';
  name: string = '';
  lastname: string = '';
  educationLevel: string = '';
  bday: string = '';
  alertButtons = ['Close'];

  educationLevels: Map<string, string> = new Map<string, string>();

  constructor(private router: Router, private alertController: AlertController ) { 
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.username = state['user'];
    }
    this.educationLevels.set("pre","Pre Escolar");
    this.educationLevels.set("basica","Ed. Basica");
    this.educationLevels.set("media","Ed. Media");
    this.educationLevels.set("superior","Ed. Superior");
    this.educationLevels.set("postgrado","Postgrado");
    this.educationLevels.set("doctorado","doctorado");
  }


  async showInfo(){
    const alert = await this.alertController.create({
      header: 'Usuario',
      subHeader: '[controller]',
      message: `El nombre de usuario es ${this.name} ${this.lastname}`,
      buttons: this.alertButtons
    });
    alert.present();
  }

  clean(){
    this.name = '',
    this.lastname = '',
    this.educationLevel = '',
    this.bday = ''
  }

  ngOnInit() {}

}
