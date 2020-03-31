import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bootstrap-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

    constructor(private router: Router) { }

    goTo() {
        this.router.navigate(['overview']);
    }

    ngOnInit(): void {

    }

}
