import { Component } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment3';

  ShowContent: boolean = false;
  LogList = [];

  onClick(){
    this.ShowContent = !this.ShowContent;
    this.LogList.push(Date.now());
  }

  getColor(){
      return 'blue';
  }
}
