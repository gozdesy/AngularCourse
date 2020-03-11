import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-test',
  templateUrl: './event-test.component.html',
  styleUrls: ['./event-test.component.css']
})
export class EventTestComponent implements OnInit {
  
  @Output() myTestEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onTestClick(feature:string){
    this.myTestEvent.emit(feature);
  }


}
