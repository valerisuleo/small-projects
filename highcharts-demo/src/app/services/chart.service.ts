import { Injectable } from '@angular/core';

@Injectable()
export class ChartService {

    constructor() { }

    // NOTE: it's an array of arrays at the moment and they come paired by two: the first one is the actual download and second one is the prevDownload

    getChartData() {
        return [
            [
                {
                    appIcon: "vn",
                    graphName: "Downloads",
                    name: "Vietnam ",
                    total: 6218,
                    y: 21
                },
                {
                    appIcon: "ru",
                    graphName: "Downloads",
                    name: "Russia ",
                    total: 3366,
                    y: 11
                },
                {
                    appIcon: "mx",
                    graphName: "Downloads",
                    name: "Mexico ",
                    total: 2611,
                    y: 9
                }
            ],
            [
                {
                    appIcon: "vn",
                    graphName: "Downloads",
                    name: "Vietnam ",
                    total: 4085,
                    y: 12
                },
                {
                    appIcon: "ru",
                    graphName: "Downloads",
                    name: "Russia ",
                    total: 3166,
                    y: 13
                },
                {
                    appIcon: "mx",
                    graphName: "Downloads",
                    name: "Mexico ",
                    total: 1611,
                    y: 19
                }
            ],
            [
                {
                    appIcon: "vn",
                    graphName: "All Revenue",
                    name: "Vietnam ",
                    total: 1085,
                    y: 30
                },
                {
                    appIcon: "ru",
                    graphName: "All Revenue",
                    name: "Russia ",
                    total: 2166,
                    y: 10
                },
                {
                    appIcon: "mx",
                    graphName: "All Revenue",
                    name: "Mexico ",
                    total: 3611,
                    y: 40
                }
            ],
            [
                {
                    appIcon: "vn",
                    graphName: "All Revenue",
                    name: "Vietnam ",
                    total: 4085,
                    y: 70
                },
                {
                    appIcon: "ru",
                    graphName: "All Revenue",
                    name: "Russia ",
                    total: 5166,
                    y: 90
                },
                {
                    appIcon: "mx",
                    graphName: "All Revenue",
                    name: "Mexico ",
                    total: 6611,
                    y: 20
                }
            ],
        ]
    }











    getSeriesData() {
        return {
            "id": "homepage-downloads-revenue-chart",
            "element": "#homepage-downloads-revenue-chart",
            "data": [
                {
                    "name": "appscatter.store-sales-revenue-converted",
                    "timestamps": [
                        "2019-11-07T00:00:00Z",
                        "2019-11-08T00:00:00Z",
                        "2019-11-09T00:00:00Z",
                        "2019-11-10T00:00:00Z",
                        "2019-11-11T00:00:00Z",
                        "2019-11-12T00:00:00Z",
                        "2019-11-13T00:00:00Z"
                    ],
                    "values": [
                        4834.3,
                        4934.3,
                        5034.3,
                        5134.3,
                        4000.67,
                        400.3,
                        1000.3
                    ]
                },
                {
                    "name": "appscatter.store-sales-downloads",
                    "timestamps": [
                        "2019-11-07T00:00:00Z",
                        "2019-11-08T00:00:00Z",
                        "2019-11-09T00:00:00Z",
                        "2019-11-10T00:00:00Z",
                        "2019-11-11T00:00:00Z",
                        "2019-11-12T00:00:00Z",
                        "2019-11-13T00:00:00Z"
                    ],
                    "values": [
                        2467,
                        2271,
                        2289,
                        2370,
                        150,
                        3683,
                        2721,
                    ]
                }
            ],
            "hideHeader": true,
            "legend": {
                "enabled": false
            },
            "grid": {
                "showXGrid": false,
                "showYGrid": true
            },
            "tooltip": {

            },
            "chartCursor": {
                "enabled": true,
                "fullWidth": true,
                "cursorColor": "#7494B2",
                "cursorAlpha": 0.1,
                "categoryBalloonEnabled": true
            },
            "graphs": [
                {
                    "graphType": "SPLINE",
                    "color": "#7DC855",
                    "bullet": "none"
                },
                {
                    "graphType": "LINE",
                    "color": "#358ed7",
                    "bullet": "none"
                }
            ],
            "styles": {
                "gridXColor": "#E6EAEE",
                "gridYColor": "#E6EAEE",
                "backgroundColor": "#FAFAFA",
                "axisValueColor": "#86939E"
            }
        }
    }


    getSeriesDemo() {
        return {
            "id": "homepage-downloads-revenue-chart",
            "element": "#homepage-downloads-revenue-chart",
            "data": [
                {
                    "name": "appscatter.store-sales-revenue-converted",
                    "timestamps": [
                        "2019-02-04T00:00:00Z",
                        "2019-02-05T00:00:00Z",
                        "2019-02-06T00:00:00Z",
                        "2019-02-07T00:00:00Z",
                        "2019-02-08T00:00:00Z",
                        "2019-02-09T00:00:00Z",
                        "2019-02-10T00:00:00Z",
                        "2019-02-11T00:00:00Z",
                        "2019-02-12T00:00:00Z",
                        "2019-02-13T00:00:00Z",
                        "2019-02-14T00:00:00Z",
                        "2019-02-15T00:00:00Z",
                        "2019-02-16T00:00:00Z",
                        "2019-02-17T00:00:00Z"
                    ],
                    "values": [
                        5034.3,
                        4434.32,
                        4400.6,
                        4612.5,
                        300.3,
                        7034.3,
                        4034.3,
                        3034.3,
                        3334.3,
                        3134.3,
                        4434.3,
                        6234.3,
                        5334.3,
                        5134.3
                    ]
                },
                {
                    "name": "appscatter.store-sales-downloads",
                    "timestamps": [
                        "2019-02-04T00:00:00Z",
                        "2019-02-05T00:00:00Z",
                        "2019-02-06T00:00:00Z",
                        "2019-02-07T00:00:00Z",
                        "2019-02-08T00:00:00Z",
                        "2019-02-09T00:00:00Z",
                        "2019-02-10T00:00:00Z",
                        "2019-02-11T00:00:00Z",
                        "2019-02-12T00:00:00Z",
                        "2019-02-13T00:00:00Z",
                        "2019-02-14T00:00:00Z",
                        "2019-02-15T00:00:00Z",
                        "2019-02-16T00:00:00Z",
                        "2019-02-17T00:00:00Z"
                    ],
                    "values": [
                        2467,
                        2271,
                        2289,
                        2370,
                        150,
                        3683,
                        2721,
                        1783,
                        1817,
                        1868,
                        1806,
                        2586,
                        3489,
                        2916
                    ]
                }
            ],
            "hideHeader": true,
            "legend": {
                "enabled": false,
                "align": "left",
                "equalWidths": false
            },
            "grid": {
                "showXGrid": false,
                "showYGrid": true,
                "guides": [

                ]
            },
            "tooltip": {
                "enabled": true,
                "borderAlpha": 0,
                "fillColor": "#FFFFFF",
                "fillAlpha": 1,
                "shadowAlpha": 0.2,
                "adjustBorderColor": true,
                "borderThickness": 1,
                "horizontalPadding": 10,
                "verticalPadding": 8,
                "borderColor": "#E0E6ED"
            },
            "chartCursor": {
                "enabled": true,
                "fullWidth": true,
                "cursorColor": "#7494B2",
                "cursorAlpha": 0.1,
                "categoryBalloonEnabled": true
            },
            "graphs": [
                {
                    "graphType": "LINE",
                    "color": "#358ED7",
                    "bullet": "none"
                },
                {
                    "graphType": "LINE",
                    "color": "#7DC855",
                    "bullet": "none"
                }
            ],
            "styles": {
                "gridXColor": "#E6EAEE",
                "gridYColor": "#E6EAEE",
                "backgroundColor": "#FAFAFA",
                "axisValueColor": "#86939E"
            }
        }

    }


















}



