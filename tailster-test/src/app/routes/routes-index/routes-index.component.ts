import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../../services/routes.service';

@Component({
    selector: 'app-routes-index',
    templateUrl: './routes-index.component.html',
    styleUrls: ['./routes-index.component.scss']
})
export class RoutesIndexComponent implements OnInit {

    constructor(private service: RoutesService) { }

    routes = [];

    routesIndex() {
        this.service.getAll()
            .subscribe((response) => {
                this.routes = response;
            });
    }

    ngOnInit() {
        this.routesIndex();
    }

}
