import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { AppSettings } from '../app.settings';
import { FormsModule } from '@angular/forms';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { FirstLetterUpperPipe } from '../pipes/first-letter-upper.pipe';
import { WeatherService } from '../services/weather.service';
import { of } from 'rxjs';

class MockWeatherService extends WeatherService {}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let weatherSrv: WeatherService;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, WeatherCardComponent, FirstLetterUpperPipe],
      providers: [{provide: WeatherService, useClass: MockWeatherService}],
      imports: [ FormsModule, HttpClientTestingModule]
    })
    .compileComponents();

    injector = getTestBed();
    weatherSrv = injector.get(WeatherService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be initialized', () => {
    spyOn(weatherSrv, 'getCitiesWeatherById').and.returnValue(of([{}]));
    component.ngOnInit();
    expect(component.cities).toEqual(AppSettings.CITIES);
    expect(weatherSrv.getCitiesWeatherById).toHaveBeenCalledWith(component.cities);
    expect(component.timerSub).toBeTruthy();
  });
});
