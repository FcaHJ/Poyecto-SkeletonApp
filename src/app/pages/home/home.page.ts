import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { 
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.username = state['user'];
    }
  }
  
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}
