import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }
 isvalid=false;

  ngOnInit() {
  }

  loginData={
    email:'',
    password:''
  }

  login(){
    this.auth.login(this.loginData);
    this.isvalid=true;
    console.log(this.loginData);
  }

  valid():boolean{
 return this.isvalid;
  }
}
