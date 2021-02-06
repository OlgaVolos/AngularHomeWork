import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input()

  user: User;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => console.log(value));

  }


  ngOnInit(): void {
  }

}
