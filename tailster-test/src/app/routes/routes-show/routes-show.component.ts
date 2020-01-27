import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

    routeShow() {
        const id = this.route.snapshot.paramMap.get('id');

        this.service.getItem(id)
        .subscribe((response) => {
            this.routeName = response.name;
            this.locationsData = response.locations;
        });
    }
    
    takeMeHome() {
        this.rotuer.navigate(['/routes']);
    }
    
    ngOnInit() {
        this.routeShow();
    }

}
