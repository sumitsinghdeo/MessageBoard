import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
