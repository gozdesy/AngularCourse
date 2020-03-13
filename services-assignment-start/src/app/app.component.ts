import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CounterService]
})
export class AppComponent implements OnInit {
  
  constructor(private userService : UserService){}

  @Input() activeUsers: object[];
  @Input() inactiveUsers: object[];

  ngOnInit(){
    this.setUserData();
  }

  onUserUpdated(data){
    this.userService.ChangeStatus(data.id, data.status);
    this.setUserData();
  }

  setUserData(){
    this.activeUsers = this.userService.users.filter(i => i.status===1);
    this.inactiveUsers = this.userService.users.filter(i => i.status===0);
  }

}
