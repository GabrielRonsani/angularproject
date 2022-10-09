import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API = 'assets/users.json'

  constructor(private httpCliente: HttpClient) { }

  listUsers() {
    return this.httpCliente.get<User[]>(this.API).pipe(
      first(),
      delay(3000)
    );
  }

}
