import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Sales1' ], [ 'Sales2' ], 'Sales3','Sales4' ],
    datasets: [ {
      data: [120,150,180,90 ]
    } ]
  };



  public pieChartLabels = [['Sales1'], ['Sales2'], ['Sales3'], ['Sales4']];
  // public pieChartData = [120,150,180,90];
  public pieChartType: ChartType = 'pie';

  constructor() { }

  ngOnInit(): void {
  }

}
