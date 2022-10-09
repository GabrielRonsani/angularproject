import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  listUsers$: Observable<User[]>;

  displayedColumns = [ 'id', 'fullName' ];

  constructor(private usersService: UsersService) {

    this.listUsers$ = this.usersService.listUsers();

  }

  ngOnInit(): void {
  }

}
