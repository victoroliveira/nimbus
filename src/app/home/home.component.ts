import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cities = [];

  constructor() {
  }

  ngOnInit() {
    this.cities = [{
      name: 'Sao Paolo'
    }, {
      name: 'Buenos Aires'
    }, {
      name: 'Lima'
    }, {
      name: 'Santiago'
    }];
  }

}
