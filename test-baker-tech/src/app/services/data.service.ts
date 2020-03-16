import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DataService {


    constructor(private url: string, private http: Http) { }

    getIndex() {
        return this.http.get(this.url)
            .pipe(map(response => response.json()));
    }

    generateRandomValues(count?: any) {
        const res = [];
        if (!count) {
            count = 1;
        } else {
            for (let i = count; i > 0; i--) {
                res.push(Math.random() * 2);
            }
        }
        return res;
    }

}
