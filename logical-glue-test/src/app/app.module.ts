import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartComponent } from './dashboard-widgets/bar-chart/bar-chart.component';
import { ChartService } from './services/chart.service';
import { DashboardWidgetsComponent } from './dashboard-widgets/dashboard-widgets.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DashboardWidgetsComponent
  ],
  imports: [
    BrowserModule
  ],
    providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
