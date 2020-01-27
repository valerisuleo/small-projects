import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
    selector: 'gmaps',
    templateUrl: './gmaps.component.html',
    styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent implements OnChanges {
    @Input() locationsData: any;

    zoom: number = 18;
    lat: number;
    lng: number;
    dataRaw = [];
    markers = [];
    distance: number

    constructor() { }

    remapObj() {
        // AGM wants these specifics properties: lat, lng.
        this.markers = this.dataRaw.map((item) => {
            return {
                altitude: item.altitude,
                lat: item.latitude,
                lng: item.longitude
            }
        });
        console.log(this.markers);
    }

    calculateDistance() {
        const latLng: google.maps.LatLng[] = this.markers.map((item) => {
            return new google.maps.LatLng(item.lat, item.lng);
        });
        this.distance = +google.maps.geometry.spherical.computeLength(latLng).toFixed(1)
        console.log('distance', this.distance);
    }

    calculateSnack() {
        const altitudes: number[] = [];
        this.markers.forEach((item) => {
            altitudes.push(item.altitude);
        });

        let count = 0;

        console.log(altitudes);

        for (let i = 0; i < altitudes.length; i++) {

            if (altitudes[i + 1] !== undefined) {

                if (altitudes[i] >= altitudes[i + 1]) {
                    count += altitudes[i + 1] - altitudes[i];
                } else {
                    count -= altitudes[i] - altitudes[i + 1];
                }
            }
        }
    }

    ngOnChanges(change: SimpleChanges): void {
        const currentValue: any = change.locationsData.currentValue;
        const firstChange: boolean = change.locationsData.firstChange;

        if (currentValue && !firstChange) {
            this.dataRaw = currentValue;
            this.remapObj();
            this.calculateDistance();
            this.calculateSnack();
            // start point
            this.lat = this.markers[1].lat
            this.lng = this.markers[1].lng
        } 
    }
}


