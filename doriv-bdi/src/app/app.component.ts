import { Component } from '@angular/core';
import {DatepickerOptions} from '../ng-datepicker/component/ng-datepicker.component';
import * as enLocale from 'date-fns/locale/en';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  minYear: 1970;
  maxYear: 2030;
  date: Date;
  options: DatepickerOptions = {
    locale: enLocale,
    displayFormat: 'MMM D[,] YYYY'
  };
  constructor() {
    this.date = new Date();
  }
}
