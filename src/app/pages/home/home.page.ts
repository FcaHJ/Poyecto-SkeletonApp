import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { analytics, briefcase, documentText, home } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  selectedSegment: string = 'data';

  constructor() { 
    addIcons({ briefcase, analytics, documentText, home });
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }


  ngOnInit() {
  }

}
