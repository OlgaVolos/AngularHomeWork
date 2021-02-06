import {Component, Input, OnInit} from '@angular/core';
import {users} from '../../../data/users';
import {User} from '../../../models/User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()
users: User [] = users;

  constructor() { }

  ngOnInit(): void {
  }

}
