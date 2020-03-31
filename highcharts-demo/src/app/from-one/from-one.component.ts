import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { Chart } from 'angular-highcharts';
import * as  Highcharts from 'highcharts';

@Component({
    selector: 'app-from-one',
    templateUrl: './from-one.component.html',
    styleUrls: ['./from-one.component.css']
})
export class FromOneComponent implements OnInit {

    @ViewChild('container', { read: ElementRef }) container: ElementRef;

    constructor(
    ) { }

    donutMake() {
        Highcharts.chart(this.container.nativeElement, {
            chart: {
                type: 'pie',
                // backgroundColor: '#474745',
                options3d: {
                    enabled: true,
                    alpha: 45
                }
            },
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    innerSize: 90,
                    depth: 45,
                    dataLabels: {
                        connectorWidth: 0,
                        enabled: false
                    },
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.f}%</b> of total<br/>'
            },
            series: [<Highcharts.SeriesOptionsType>{
                name: 'Top Apps (by % of downloads)',
                data: [
                    {
                        name: 'Angry Birds',
                        y: 28.8,
                        color: "#358ED7"
                    },
                    {
                        name: 'Angry Birds Blast HD',
                        y: 10.2,
                        color: "#7DC855"
                    },
                    {
                        name: 'Uber',
                        y: 5.8,
                        color: "#F8E71C"
                    },
                    {
                        name: 'Others',
                        y: 54.2,
                        color: "#D3D4D5"
                    },
                ]
            }],
            drilldown: {
                series: [<Highcharts.SeriesOptionsType>{
                    name: 'Windows versions',
                    id: 'windows-versions',
                    data: [
                        ['Win 7', 55.03],
                        ['Win XP', 15.83],
                        ['Win Vista', 3.59],
                        ['Win 8', 7.56],
                        ['Win 8.1', 6.18]
                    ]
                }]
            }
        })
    }

    ngOnInit() {
        this.donutMake();
    }

}
