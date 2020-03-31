import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'bootstrap-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
    @Input() recordsIndex: any;
    @Input() keys: string[];
    @Output('handleSelection') click = new EventEmitter();

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
        return this.recordsIndex.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    getCurrentItem(obj, e) {
        const btn: HTMLElement = e.target;
        
        this.click.emit({
            obj,
            method: btn.innerText
        });
    }

    ngOnChanges(change: SimpleChanges): void {
        const { currentValue, firstChange } = change.recordsIndex;
        
        if (currentValue && firstChange) {
            this.recordsIndex = currentValue;
            this.collectionSize = this.recordsIndex.length;
        }
    }

}
