import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { RoutesService } from '../../../services/routes.service';
import { ISnackHighlights, IMarker, IRoute } from '../../interfaces';

@Component({
    selector: 'gmaps',
    templateUrl: './gmaps.component.html',
    styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent implements OnChanges {
    @Input() locationsData: any;
    @Output('snackHighlights') change = new EventEmitter();

    lat: number;
    lng: number;
    distance: number
    zoom: number = 18;

    dataRaw: IRoute[] = [];
    markers: IMarker[] = [];

    constructor(private service: RoutesService) {}

    remapObj(): void {
        // AGM wants these specifics properties: lat, lng.
        this.markers = this.dataRaw.map((item) => {
            return {
                altitude: item.altitude,
                lat: item.latitude,
                lng: item.longitude
            }
        });
    }

    calculateDistance(): void {
        const latLng: google.maps.LatLng[] = this.markers.map((item) => {
            return new google.maps.LatLng(item.lat, item.lng);
        });
        this.distance = +google.maps.geometry.spherical.computeLength(latLng).toFixed(1);
    }

    calculateSnack(): void {
        let count = 0;
        const snacks: number[] = [];
        const altitudes: number[] = [];

        this.markers.forEach((item) => {
            altitudes.push(item.altitude);
        });

        for (let i = 0; i < altitudes.length; i++) {
            if (altitudes[i + 1] !== undefined) {
                if (altitudes[i] >= altitudes[i + 1]) {
                    count += altitudes[i + 1] - altitudes[i];
                } else {
                    count -= altitudes[i] - altitudes[i + 1];
                    snacks.push(altitudes[i] - altitudes[i + 1])
                }
            }
        }

        let snacksInMyPocket: number = snacks.reduce((prev, curr) => prev + curr);

        const snackHighlights: ISnackHighlights = {
            count: count,
            snacksInMyPocket: snacksInMyPocket *= -1,
            distance: this.distance
        }
        this.change.emit(snackHighlights);
    }

    setCurrentLocation(): void {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.zoom = 18;
            });
        }
    }

    fromRouteShow(): void {
        this.service.changedValue
        .subscribe((data: boolean) => {
            if (data === true) {
                this.setCurrentLocation();
            }
        });
    }

    ngOnChanges(change: SimpleChanges): void {
        const currentValue: any = change.locationsData.currentValue;
        const firstChange: boolean = change.locationsData.firstChange;

        if (currentValue && !firstChange) {
            this.dataRaw = currentValue;
            this.remapObj();
            this.calculateDistance();
            this.calculateSnack();
            this.fromRouteShow();
            // start point
            this.lat = this.markers[1].lat
            this.lng = this.markers[1].lng

        }
    }
}


