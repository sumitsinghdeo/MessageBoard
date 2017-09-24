import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/ToPromise';
import { MdSnackBar } from '@angular/material';
import {Subject } from 'rxjs/Rx';
import {AuthService} from './auth.service';

@Injectable()
export class WebService {

  private messageStore = [];
  messageSubject= new Subject();

  messages= this.messageSubject.asObservable();

user;
  constructor(private _http: Http, private sb:MdSnackBar, private auth: AuthService) { 
    this.getMessages(this.user);
  }

  _url='http://localhost:12345/api';

  async getMessages(user){
    
      user= (user)? '/' + user: '';
      var response=await this._http.get( this._url + '/messages'+ user).subscribe(response=>{
        this.messageStore= response.json();
        this.messageSubject.next(this.messageStore);
      },error=>{
        this.handleError("unable to get Messages");
      });
    
    
      
    }
    
  

   async postMessages(message){
     try {
        var response=await this._http.post(this._url + '/messages',message).toPromise();
    this.messageStore.push(response.json());
    this.messageSubject.next(this.messageStore);
     } catch (error) {

       this.handleError("unable to get Messages")
     }
   
  }

  getUser(){
    return this._http.get(this._url + '/users/me', this.auth.tokenHeader).map(res=>res.json());
  }

  private handleError(error){
    console.log(error)
    this.sb.open("unable to get Messages",'close',{duration:2000})
  }
}
