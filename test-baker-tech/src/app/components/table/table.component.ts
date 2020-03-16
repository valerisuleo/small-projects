import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { IDirection, ITradeItem } from '../../common/interfaces';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {

    @Input() ratesIndex: number[];
    @Input() pairs: string[];
    @Input() basket: ITradeItem[];
    @Output('basketChanged') click = new EventEmitter();

    directionChanges: IDirection[] = [];

    constructor(private spinner: NgxSpinnerService) { }

    public addToBasket(item, index): void {
        this.click.emit({
            event: 'add',
            item,
            index
        });
    }

    public removeFromBasket(item): void {
        let index: number = this.basket.indexOf(item);
        this.click.emit({
            event: 'remove',
            item,
            index
        });
    }

    public ngOnChanges(change: any): void {
        this.spinner.show();
        this.setDirections(change)
    }

    setDirections(change) {
        const { previousValue, currentValue, firstChange } = change.ratesIndex;
        const directionChanges = [];
        if (change.ratesIndex && !firstChange) {
            for (let i = 0; i < previousValue.length; i++) {
                const prev = previousValue[i];
                const current = currentValue[i];
                directionChanges.push(current - prev > 0 ? faCaretUp : faCaretDown);
            }
            this.directionChanges = directionChanges;

            if (this.directionChanges.length) {
                this.spinner.hide();
            }
        }
    }

}




