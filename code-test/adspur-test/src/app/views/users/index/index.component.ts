import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { IUser } from '../interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'users-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    public isFirstLoad: boolean;
    public users: IUser[] = [];
    public columns: any[][] = [];
    public count: number = 1;
    public page: number;
    public totalPages: number;
    public btnsControllers = [
        {
            name: 'back',
            label: '<<',
        },
        {
            name: 'next',
            label: '>>',
        },
    ];

    constructor(
        private service: UsersService,
        private toastr: ToastrService
    ) { }

    public usersIndex(): void {
        this.service.getAll()
            .subscribe((response) => {
                const { data, page, total_pages } = response;
                this.page = page;
                this.totalPages = total_pages;
                this.users = data;
                this.setColumns(data);
                this.isFirstLoad = true;
            }, (error: Response) => {
                if (error) {
                    this.showError(error);
                }
            });
    }

    public loadMoreData(e): void {
        const current = e.target;
        this.count = current.name === 'next' ? this.count + 1 : this.count - 1;
        let queryParams = `?page=${this.count}`;

        this.service.getMore(queryParams)
            .subscribe((response) => {
                const { data, page, total_pages } = response;
                this.users = data;
                this.page = page;
                this.totalPages = total_pages;
                this.setColumns(data);
                this.isFirstLoad = false;
            }, (error: Response) => {
                if (error) {
                    this.showError(error);
                }
            });
    }

    public setColumns(array): void {
        const columnLeft = [];
        const columnRight = [];
        this.columns = [];
        array.forEach((item, index) => {
            if (index % 2 === 0) {
                columnRight.push(item);
            } else {
                columnLeft.push(item);
            }
        });
        this.columns.push(columnRight, columnLeft);
    }

    public showError(error): void {
        this.toastr.error('Ooops! Something went wrong...', `${error.status}`);
    }

    public ngOnInit(): void {
        this.usersIndex();
    }
}
