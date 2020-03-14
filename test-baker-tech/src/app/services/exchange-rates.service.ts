import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';


@Injectable()
export class ExchangeRatesService extends DataService {

    constructor(http: Http) {
        super("https://cors-anywhere.herokuapp.com/https://freeforexapi.com/api/live?pairs=", http);
    }
}