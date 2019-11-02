import { Component, OnInit, Input } from '@angular/core';
import { Building } from '../Models/Screen';

@Component({
  selector: 'app-building-summary-view',
  templateUrl: './building-summary-view.component.html',
  styleUrls: ['./building-summary-view.component.css']
})
export class BuildingSummaryViewComponent implements OnInit {


  @Input() building: Building;

  constructor() { }

  ngOnInit() {
  }

}
