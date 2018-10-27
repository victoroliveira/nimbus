import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from '../app.settings';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() city: any;

  constructor() { }

  private mountIconUrl(id: string) {
    return `${AppSettings.ICON_ENDPOINT}${id}.png`;
  }

  ngOnInit() {
    this.city.iconUrl = this.mountIconUrl(this.city.weather[0].icon);
  }

}
