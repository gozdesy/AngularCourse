import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../services/logging.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  //,providers: [LoggingService] 
  //BURADAN ALIP APP.COMPONENT.TS İÇİNE TAŞINDI. BÖYLECE TÜM APP İÇİNDE BİR INSTANCE KULLANILABİLİYOR.
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService:LoggingService){}

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);
    this.loggingService.log(status);
  }
}
