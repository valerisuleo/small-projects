import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class DataService {

    constructor(private url: string, private http: Http) { }

    getAll() {
        return this.http.get(this.url)
        .pipe(map(response => response.json()));
    }

    getItem(id) {
        return this.http.get(this.url + `/${id}`)
        .pipe(map(response => response.json()))
    }
}
