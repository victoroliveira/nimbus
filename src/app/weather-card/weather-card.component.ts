import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from '../app.settings';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() city: Object;

  constructor() { }

  private mountIconUrl(id: string) {
    return `${AppSettings.ICON_ENDPOINT}${id}.png`;
  }

  private firstLetterUpper(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  ngOnInit() {
    this.city.iconUrl = this.mountIconUrl(this.city.weather[0].icon);
    this.city.description = this.firstLetterUpper(this.city.weather[0].description);
  }

}
