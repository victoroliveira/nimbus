import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { AppSettings } from '../app.settings';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cities: any[] = new Array();
  citiesData: any;
  weatherSub: Subscription;
  timerSub: Subscription;

  constructor(private weather: WeatherService) {
  }

  ngOnInit() {
    this.setCities(AppSettings.CITIES);
    this.getCitiesData();
    this.subscribeTimer();
  }

  private setCities(cities: Array<any>): void {
    this.cities = cities;
  }

  private getCities(): Array<any> {
    return this.cities;
  }

  private getCitiesData(): void {
    const cities = this.getCities();
    this.weatherSub = this.weather.getCitiesWeatherById(cities)
    .subscribe((response) => {
      this.citiesData = response;
    }, (error) => {
      console.log(error);
    });
  }

  private subscribeTimer(): void {
    this.timerSub =  interval(AppSettings.TIMER).subscribe(() => {
      this.getCitiesData();
    });
  }

  ngOnDestroy() {
    this.weatherSub.unsubscribe();
    this.timerSub.unsubscribe();
  }

}
