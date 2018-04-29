import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private _router: Router, private titleService: Title) { }
  nameEntered;
  emailEntered;
  messageEntered;

  sendIt() {
    var name = (<HTMLInputElement>document.getElementById('name')).value;
    var email = (<HTMLInputElement>document.getElementById('email')).value;
    var message = (<HTMLInputElement>document.getElementById('message')).value;

    if (name.length == 0) {
      this.nameEntered = false;
    } else {
      this.nameEntered = true;
    }

    if (email.length == 0) {
      this.emailEntered = false;
    } else {
      this.emailEntered = true;
    }

    if (message.length == 0) {
      this.messageEntered = false;
    } else {
      this.messageEntered = true;
    }

    if(this.nameEntered && this.messageEntered && this.emailEntered){
      this._router.navigate(['thankyou']);
    }
  }

  ngOnInit() {
    this.titleService.setTitle("Contact - Console-less Gaming");
  }

}
