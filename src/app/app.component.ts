import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Baka-Form';
  reqOption=false;
  email='';
  username = '';
  password = '';
  cPassword = '';
  onClickReset(){
    this.email='';
    this.username = '';
    this.password = '';
    this.cPassword = '';
    if(this.reqOption){this.reqOption=false}else{this.reqOption=true};
  }
  constructor(){
    this.email='constructor@ng.com';
    this.username = 'constructor';
    this.password = 'constructor123';
    this.cPassword = 'constructor123';
  } 
}
