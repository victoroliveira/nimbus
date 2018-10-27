export class AppSettings {
  public static API_KEY = '84487947ce18e6d9bad1405df35f91df';
  public static ENDPOINT = 'https://api.openweathermap.org/data/2.5/';
  public static ICON_ENDPOINT = 'http://openweathermap.org/img/w/';
  public static TIMER = 180000;
  public static CITIES = [
  {
    id: 3448439,
    name: 'Sao Paulo',
    country: 'BR',
    'coord': {
      'lon': -46.636108,
      'lat': -23.547501
    }
  }, {
    id: 3435910,
    name: 'Buenos Aires',
    country: 'AR',
    coord: {
      lon: -58.377232,
      lat: -34.613152
    }
  }, {
    id: 3936456,
    name: 'Lima',
    country: 'PE',
    coord: {
      lon: -77.028236,
      lat: -12.04318
    }
  }, {
    id: 3871336,
    name: 'Santiago',
    country: 'CL',
    coord: {
      lon: -70.64827,
      lat: -33.45694
    }
  }];
}
