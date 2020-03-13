import { Input } from "@angular/core";

export class CounterService{
    count: number = 0;

    constructor(){}

    setCounter(){
        this.count++;
        console.log(this.count);
    }
}