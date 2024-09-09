import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: User[] = [
    new User('admin', 'admin@ionic.com', '1234'),
    new User('fcahj', 'fcahj@ionic.com', '4444'),
    new User('other', 'other@ionic.com', '1111'),
  ];

  constructor() { }
/* */
  validateLogin(u: string, p:string): boolean {
    const found = this.users.find(user => user.username === u)
    if (found != undefined) {
      return found.password === p;
    }
    return false;
  }
}
