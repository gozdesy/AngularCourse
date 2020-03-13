import { Component, EventEmitter, Output, Input } from '@angular/core';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: object[];
  @Output() userUpdated = new EventEmitter<object>();

  constructor(private userService : UserService){}

  onSetToActive(id: number) {
    this.userUpdated.emit({id:id, status:1});
  }
}
