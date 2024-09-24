import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { analytics, briefcase, documentText, home, } from 'ionicons/icons';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent {

  constructor() { 

    addIcons({ briefcase, analytics, documentText, home });
  }

}
