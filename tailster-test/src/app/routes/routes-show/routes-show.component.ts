import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesService } from '../../services/routes.service';

@Component({
    selector: 'app-routes-show',
    templateUrl: './routes-show.component.html',
    styleUrls: ['./routes-show.component.scss']
})
export class RoutesShowComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private service: RoutesService,
        private rotuer: Router,
        ) { }

    locationsData = [];
    routeName: string;
    count: number;
    snacksInMyPocket: number;
    distance: number;
    isClicked: boolean = false;

    routeShow() {
        const id = this.route.snapshot.paramMap.get('id');

        this.service.getItem(id)
        .subscribe((response) => {
            this.routeName = response.name;
            this.locationsData = response.locations;            
        });
    }

    snackHighlights(data) {
        this.count = data.count;
        this.snacksInMyPocket = data.snacksInMyPocket;
        this.distance = data.distance;
    }
    
    takeMeHome() {
        this.rotuer.navigate(['/routes']);
    }

    currentLocation() {
        this.isClicked = true;
        this.service.sendData(this.isClicked)
    }
    
    ngOnInit() {
        this.routeShow();
    }

}
