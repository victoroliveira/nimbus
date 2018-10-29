import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) { }

  private separateIdsByComma(arr): string {
    let str = '';
    arr.forEach((city, index) => {
      str += city.id.toString();
      if (index !== (arr.length - 1)) {
        str += ',';
      }
    });
    return str;
  }

  getCitiesWeatherById(cities: Array<any>, metric: 'metric' | 'imperial' = 'metric'): Subject<string> {
    const dataSub = new Subject<string>();
    const citiesIds = this.separateIdsByComma(cities);
    this.http.get(
      `${AppSettings.ENDPOINT}group?id=${citiesIds}&units=${metric}&APPID=${AppSettings.API_KEY}`)
      .subscribe((data) => {
        dataSub.next(data['list']);
      }, (err) => {
        console.log(err);
      });
    return dataSub;
  }
}
