export class LoggingService{
    log(statusChange: string){
        console.log('I am from service. ' + statusChange);
    }
}