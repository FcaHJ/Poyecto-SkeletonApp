import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username: string = 'guest';
  name: string = '';
  lastname: string = '';
  educationLevel: string = '';
  bday: string = '';

  educationLevels: Map<string, string> = new Map<string, string>();
  alertButton: any;


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


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async showInfo(){
    const alert = await this.alertController.create({
      header: 'Usuario',
      subHeader: 'Componente',
      message: 'El nombre de usuario es $(this.name)',
      buttons: this.alertButton
    })
  }

  clean(){
    this.name = '',
    this.lastname = '',
    this.educationLevel = '',
    this.bday = ''
  }
}
