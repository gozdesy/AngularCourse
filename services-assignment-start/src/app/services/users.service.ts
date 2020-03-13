import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService{

    constructor(private counterService :CounterService){}

    users= [
            {id:1, name:'Max', status:1}, 
            {id:2, name:'Anna', status:1},
            {id:3, name:'Chris', status:0},
            {id:4, name:'Manu', status:0}
    ];

    ChangeStatus(id: number, status:number) {
        let user = this.users.find(i => i.id === id);
        user.status = status;
        
        console.log('---------------------------');
        this.users.forEach(z => console.log(z.id + ' ' + z.name + ' ' + z.status));
        
        console.log('-----------');
        this.counterService.setCounter();
    }

}