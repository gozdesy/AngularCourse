import { Component, EventEmitter, Output, Input } from '@angular/core';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: object[];
  @Output() userUpdated = new EventEmitter<object>();

  constructor(private userService : UserService){}

  onSetToInactive(id: number) {
    this.userUpdated.emit({id:id, status:0});
  }
}
