import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../../services/exchange-rates.service';
import { ITradeItem, IBasketItem } from '../../common/interfaces';

@Component({
    selector: 'app-index-rates',
    templateUrl: './index-rates.component.html',
    styleUrls: ['./index-rates.component.scss']
})
export class IndexRatesComponent implements OnInit {

    ratesIndex: number[] = [];
    basket: ITradeItem[] = [];
    pairs = ['GBPUSD', 'GBPEUR'];

    constructor(private service: ExchangeRatesService) {}

    public getNewRates(): void {
        const response: number[] = this.service.generateRandomValues(2);
        this.ratesIndex = response.map((item: number) => {
            return +item.toFixed(4);
        });
    }

    public onBasketChanged(data: IBasketItem): void {
        if (data.event === 'add') {
            this.basket.push({
                time: new Date().toLocaleTimeString(),
                currencyPair: this.pairs[data.index],
                rate: data.item
            });
        } else {
            this.basket.splice(data.index,1);
        }        
    }

    public ngOnInit(): void {
        setInterval(() => this.getNewRates(), 10);
    }

}
