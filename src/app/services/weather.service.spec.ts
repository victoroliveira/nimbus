import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WeatherService } from './weather.service';
import { AppSettings } from '../app.settings';

describe('WeatherService', () => {
  let injector: TestBed;
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
    injector = getTestBed();
    service = injector.get(WeatherService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get response from one city', () => {
    const cities = [{id: 1}];
    let dummyResponse = new Object();
    dummyResponse = {list: [{id: 1}]};

    service.getCitiesWeatherById(cities).subscribe(data => {
      expect(data.length).toBe(1);
      expect(data).toEqual(dummyResponse['list']);
    });

    const req = httpMock.expectOne(`${AppSettings.ENDPOINT}group?id=${cities[0].id}&units=metric&APPID=${AppSettings.API_KEY}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('should get response from more than one city', () => {
    const cities = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
    let dummyResponse = new Object();
    dummyResponse = {list: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]};

    service.getCitiesWeatherById(cities).subscribe(data => {
      expect(data.length).toBe(4);
      expect(data).toEqual(dummyResponse['list']);
    });

    const ids = `${cities[0].id},${cities[1].id},${cities[2].id},${cities[3].id}`;

    const req = httpMock.expectOne(`${AppSettings.ENDPOINT}group?id=${ids}&units=metric&APPID=${AppSettings.API_KEY}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('should return an Observable', () => {
    const cities = [{id: 1}];
    const metric = 'imperial';
    service.getCitiesWeatherById(cities, metric)
    .subscribe(result => {
      expect(result['list'].length).toBe(2);
    });

    const req = httpMock.expectOne(`${AppSettings.ENDPOINT}group?id=${cities[0].id}&units=${metric}&APPID=${AppSettings.API_KEY}`);
    expect(req.request.url).toBe(`${AppSettings.ENDPOINT}group?id=1&units=imperial&APPID=${AppSettings.API_KEY}`);
    expect(req.request.method).toEqual('GET');

    req.flush({
      list: [{}, {}]
    });
  });
});
