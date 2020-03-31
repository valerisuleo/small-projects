import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import { GEO_DATA } from './geo-data'
import { COUNTRIES } from './country'
import { EUROPE } from './europe'

@Component({
    selector: 'mymap',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    @ViewChild('container', { read: ElementRef }) container: ElementRef;

    highlighted = [
        ['is', 1],
        ['no', 1],
        ['se', 1],
        ['dk', 1],
        ['it', 1]
    ]

    constructor() {}

    mapMaker() {
    Highcharts.mapChart(this.container.nativeElement, {
        chart: {
            map: GEO_DATA,
            // borderWidth: 1,
        },
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [<Highcharts.SeriesMapOptions>{
            name: 'Country',
            nullColor: '#CDD8E2',
            data: this.highlighted,
            color: Highcharts.getOptions().colors[1],
            dataLabels: {
                enabled: false,
                color: '#FFFFFF',
                formatter: function () {
                    if (this.point.value) {
                        return this.point.name
                    }
                }
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.name}'
            }
        }]
    });
}

    ngOnInit() {
        this.mapMaker();
    }

}
