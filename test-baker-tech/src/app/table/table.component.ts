import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
    selector: 'table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    all: any[] = [];

    constructor(private service: ExchangeRatesService) { }

    public ratesIndex(): void {
        this.service.getAll()
            .subscribe((response) => {
                this.fromNestedObjToArr(response)
            });

    }

    public fromNestedObjToArr(data) {        
        const { rates } = data;
        let keys = Object.keys(rates);

        for (var i = 0, n = keys.length; i < n; i++) {
            var key = keys[i];

            this.all[key] = rates[key];
        }

        console.log(this.all);
        
    }

    ngOnInit(): void {
        this.ratesIndex();
    }

}
