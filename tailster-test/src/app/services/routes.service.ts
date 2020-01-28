import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';


@Injectable()
export class RoutesService extends DataService {
    @Output() public changedValue = new EventEmitter();

    constructor(http: Http) {
        super('https://infinite-lake-80504.herokuapp.com/api/routes', http);
    }

    public sendData(arg: any): void {
        this.changedValue.emit(arg);
    }
}