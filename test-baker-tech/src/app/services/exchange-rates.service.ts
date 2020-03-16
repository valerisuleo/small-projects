// I found a real API but for the purpose of this test I didn't use it: 
// "A section in the middle showing some prices which you are generating randomly client side..."

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class ExchangeRatesService extends DataService {

    constructor(http: Http) {
        super("https://cors-anywhere.herokuapp.com/https://freeforexapi.com/api/live?pairs=", http);
    }
}