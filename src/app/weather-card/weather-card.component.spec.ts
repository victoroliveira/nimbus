import { async,  ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCardComponent } from './weather-card.component';
import { FormsModule } from '@angular/forms';
import { FirstLetterUpperPipe } from '../pipes/first-letter-upper.pipe';
import { AppSettings } from '../app.settings';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture <WeatherCardComponent> ;
  const mock = {
    'weather': [{
      'id': 701,
      'main': 'Mist',
      'description': 'mist',
      'icon': '50d'
    }, {
      'id': 300,
      'main': 'Drizzle',
      'description': 'light intensity drizzle',
      'icon': '09d'
    }],
    'main': {
      'temp': 280.15,
      'pressure': 1012,
      'humidity': 81,
      'temp_min': 278.15,
      'temp_max': 281.15
    }
  };

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [WeatherCardComponent, FirstLetterUpperPipe],
        imports: [FormsModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    component.city = mock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mount icon url on init', () => {
    expect(component.city.iconUrl)
      .toEqual(`${AppSettings.ICON_ENDPOINT}${mock.weather[0].icon}.png`);
  });
});
