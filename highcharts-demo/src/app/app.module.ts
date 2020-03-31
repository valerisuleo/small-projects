import { BrowserModule } from '@angular/platform-browser';
import { MapComponent } from 'src/app/map/map.component';
import { ChartService } from './services/chart.service';
import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import * as highmaps from 'highcharts/modules/map.src';



import { AppComponent } from './app.component';
import { FromOneComponent } from './from-one/from-one.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { SeriesChartComponent } from './series-chart/series-chart.component';
import { NewcComponent } from './newc/newc.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        FromOneComponent,
        CheckboxComponent,
        BarChartsComponent,
        MapComponent,
        SeriesChartComponent,
        NewcComponent,
        DemoComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ChartModule,
        HighchartsChartModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot([
            { path: 'pie', component: FromOneComponent },
            { path: 'demo', component: DemoComponent },
            { path: '**', redirectTo: 'demo' }
        ])
    ],
    providers: [
        DataService,
        ChartService,
        // { provide: HIGHCHARTS_MODULES, useFactory: () => [ highmaps ] }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
