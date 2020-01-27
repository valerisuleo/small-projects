import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';


@Injectable()
export class RoutesService extends DataService {
    constructor(http: Http) {
        super('https://infinite-lake-80504.herokuapp.com/api/routes', http);
    }


    @Output() changedValue = new EventEmitter();

    sendData(arg: any) {
        this.changedValue.emit(arg);
    }
}