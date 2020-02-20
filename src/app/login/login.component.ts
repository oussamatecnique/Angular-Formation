import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() submit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(login: string, password: string) {
    this.submit.emit({login, password})
  }

}