import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

    args = 'GBPUSD,EURUSD';

    constructor(private url: string, private http: Http, private params?: string) { 
        // console.log('1', this.url + `${this.params}`);
        // console.log('2', `${this.url + this.params}`);
        // console.log('3', `${this.url}${this.params}`);
        this.params = this.args;
        
    }
    

    getAll() {
        return this.http.get(this.url + this.params)
        .pipe(map(response => response.json()));
    }
}