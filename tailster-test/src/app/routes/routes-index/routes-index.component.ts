import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../../services/routes.service';
import { IRoute } from '../interfaces';

@Component({
    selector: 'app-routes-index',
    templateUrl: './routes-index.component.html',
    styleUrls: ['./routes-index.component.scss']
})
export class RoutesIndexComponent implements OnInit {

    constructor(private service: RoutesService) { }

    public routes: IRoute[] = [];
    public errorMsg: string;
    public isError: boolean = false;
    public status: number;
    public statusText: string;

    public routesIndex(): void {
        this.service.getAll()
        .subscribe((response) => {
            this.routes = response;
            console.log(response)
        }, (error: Response) => {
            if (error) {
                this.isError = true;
                this.status = error.status;
                this.statusText = error.statusText;
                this.errorMsg = 'Ooops! Something went wrong...'
            }
        });
    }

    public ngOnInit(): void {
        this.routesIndex();
    }

}
