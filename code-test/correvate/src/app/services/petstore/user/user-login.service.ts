import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../data-service/data.service';

@Injectable()
export class UserLoginService extends DataService {

    constructor(http: Http) {
        super('https://petstore.swagger.io/v2/user', http);
    }
}

