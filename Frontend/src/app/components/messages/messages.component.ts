import { Component, OnInit } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { WebService } from '../../web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

 
  constructor(private webService: WebService,private routes:ActivatedRoute )  { }

  ngOnInit() {
    var name = (this.routes.snapshot.params.name);
    this.webService.getMessages(name);
    this.webService.getUser().subscribe();
    // this.webService.messageSubject.subscribe(messages=> {
    //   this.messages=messages;
    // })
  }

}
