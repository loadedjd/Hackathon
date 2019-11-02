import { Component, OnInit } from '@angular/core';
import { Building } from '../Models/Screen';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  public building1 = new Building('Dreese Labs', '376 Lane Ave.');
  public building2 = new Building('Drackett Tower', '189 18th Ave.');
  public building3 = new Building('University Hall', '123 College Rd.');

  public filter = '';

  public buildings = [this.building1, this.building2, this.building3];
  public filteredBuildings = this.buildings;

  constructor() {}

  ngOnInit() {}

  public onKeyPressed(event) {
    if (event.key === 'Enter') {
      // tslint:disable-next-line:no-console
      console.info(`New Filter: ${this.filter}`);
      this.filterBuildings(this.filter);
    }
  }

  private filterBuildings(text: string) {
    if (this.filter.length > 0) {
      this.filteredBuildings = this.filteredBuildings.filter(building =>
        building.title.startsWith(text)
      );
    } else {
      this.filteredBuildings = this.buildings;
    }
  }
}
