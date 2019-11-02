import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../Models/Screen';

@Component({
  selector: 'app-data-summary-view',
  templateUrl: './data-summary-view.component.html',
  styleUrls: ['./data-summary-view.component.css']
})
export class DataSummaryViewComponent implements OnInit {

  @Input() dataView: Data[];
  constructor() { }

  ngOnInit() {
  }

}
