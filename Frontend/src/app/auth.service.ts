import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  _url='http://localhost:12345/auth';
  NAME_KEY='name';
  TOKEN_KEY='token';

  constructor( private _http:Http, private _router: Router) { }

  get name(){
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get tokenHeader(){
    var header= new Headers({'Authorization':'Bearer' + localStorage.getItem(this.TOKEN_KEY)})
    return new RequestOptions({headers:header});
  }

  login(loginData){
    this._http.post(this._url + '/login',loginData).subscribe(res =>{
       this.authenticateUser(res);
    });
  }

  register(user){
    delete user.confirmPassword;

    this._http.post(this._url + '/register',user).subscribe(res =>{
      this.authenticateUser(res);
      
    });
  }

  logout(){
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
  }

 authenticateUser(res){
    var authResponse=res.json();

      if(!authResponse.token)
        return;
      localStorage.setItem('token',res.json().token)
      localStorage.setItem(this.NAME_KEY,res.json().firstName)
      this._router.navigate(['/']);
      
}

}

