import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { AppSettings } from '../app.settings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cities: any[] = new Array();
  citiesData: any;

  constructor(private weather: WeatherService) {
  }

  ngOnInit() {
    this.cities = AppSettings.CITIES;
    this.weather.getCitiesWeatherById(this.cities)
    .subscribe((response) => {
      this.citiesData = response;
    }, (error) => {
      console.log(error);
    });
  }

}
