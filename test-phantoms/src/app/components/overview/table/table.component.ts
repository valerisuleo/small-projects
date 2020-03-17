import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IBookmark } from '../interfaces';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {

    @Input() itemIndex: any;
    @Output('editCurrentItem') click = new EventEmitter();

    // variables
    results: number

    page = 1;
    pageSize = 20;

    currentPage: number = 1;
    numberPerPage: number = 10;
    pageParam: number = 1;

    collectionSize: number;

    constructor() { }

    get groupsAll() {
        return this.itemIndex.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    public editItem(obj: IBookmark) {
        this.click.emit(obj)
    }

    ngOnChanges(change: SimpleChanges): void {
        console.log(change.itemIndex.currentValue);
        const { currentValue, firstChange } = change.itemIndex;
        if (currentValue && firstChange) {
            this.itemIndex = currentValue;
            this.collectionSize = this.itemIndex.length;
        }
    }

}
