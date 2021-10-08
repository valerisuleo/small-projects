import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(
        @Inject(String) private url: string,
        private http: Http
    ) { }

    getItem(queryParams) {
        return this.http.get(`${this.url}/${queryParams}`)
            .pipe(map(response => response.json()));
    }

    create(newResource) {
        return this.http.post(this.url, newResource)
            .pipe(map(response => response.json()));
    }
}
