import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesService } from '../../services/routes.service';
import { IRoute } from '../interfaces';

@Component({
    selector: 'app-routes-show',
    templateUrl: './routes-show.component.html',
    styleUrls: ['./routes-show.component.scss']
})
export class RoutesShowComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: RoutesService
    ) { }

    public routeName: string;
    public isClicked: boolean = false;
    public locationsData: IRoute[] = [];
    public count: number;
    public distance: number;
    public snacksInMyPocket: number;
    public id: any;

    public routeShow(): void {
        this.id = this.route.snapshot.paramMap.get('id');

        this.service.getItem(this.id)
        .subscribe((response) => {
            this.routeName = response.name;
            this.locationsData = response.locations;
        });
    }

    public snackHighlights(data) {
        this.count = data.count;
        this.snacksInMyPocket = data.snacksInMyPocket;
        this.distance = data.distance;
    }

    public takeMeHome(): void {
        this.router.navigate(['/routes']);
    }

    public currentLocation(): void {
        this.isClicked = true;
        this.service.sendData(this.isClicked)
    }

    public ngOnInit(): void {
        this.routeShow();
    }
}
