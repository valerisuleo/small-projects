import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class UsersService extends DataService {

    constructor(http: Http) {
        super('https://reqres.in/api/users', http);
    }
}
