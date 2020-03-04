import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  UserName:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  getButtonState(){
    return this.UserName=="";
  }

  onClick(){
    this.UserName = "";
  }

}
