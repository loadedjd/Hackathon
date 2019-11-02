import { Component, OnInit } from '@angular/core';
import * as Screen from '../Models/Screen';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {

  public homeData = this.createTestData(10);
  public sections: Screen.Section[] = [
    new Screen.Section('Electricity', this.createTestData(5)),
    new Screen.Section('Chilled Water', this.createTestData(5)),
    new Screen.Section('Heated Water', this.createTestData(5)),
    new Screen.Section('Steam', this.createTestData(5))
  ];


  // tslint:disable-next-line: variable-name
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }



  private createTestData(numberOfItems: number): Screen.Data[] {

    const data: Screen.Data[] = [];

    for (let i = 0; i < numberOfItems; i++) {
      const newData = new Screen.Data();
      newData.title = 'Average Electrical Usage';
      newData.unit = 'kwh';
      newData.value = `${i * 10000}`;
      data.push(newData);
    }

    return data;
  }

}
