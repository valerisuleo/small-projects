import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @Input('data') data: any[];
    @Output('selectedBook') onSelected = new EventEmitter()

    constructor() { }

    rowsPerPage: number = 3;
    // rowsPerpage = 3;
    page: number;
    currentDataToDisplay: any[] = []
    maxPage: number
    // page = 1;

    getDataToDisplay(page) {
        return [...this.data].slice(page * this.rowsPerPage, page * this.rowsPerPage + this.rowsPerPage)
    }

    changePage(page) {
        this.page = page
        this.currentDataToDisplay = this.getDataToDisplay(page);
        console.log(this.currentDataToDisplay)
    }

    editBook(book) {
        this.onSelected.emit(book)
    }

    calculateMaxPage() {
        this.maxPage = Math.ceil(this.data.length / this.rowsPerPage)
    }


    ngOnInit(): void {
        this.calculateMaxPage()
        this.changePage(1)
    }

}
