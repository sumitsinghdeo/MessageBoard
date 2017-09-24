import { Component, OnInit } from '@angular/core';
import { WebService } from '../../web.service';
import { MdCardModule } from '@angular/material';
import { AuthService} from '../../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  //@Output() onPosted = new EventEmitter();

  constructor(private webService:WebService, private auth: AuthService) { }

  ngOnInit() {
  }

  message={
    owner:this.auth.name,
    text:""
  }

  onSubmit(f: NgForm){
    this.webService.postMessages(this.message);
    f.resetForm();
    // this.onPosted.emit(this.message);
  }
  
}
