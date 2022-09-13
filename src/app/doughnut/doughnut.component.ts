import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {


  public doughnutChartData: ChartData<'doughnut'> = {
    
    datasets: [
      { data: [ 35, 30, 60, 25 ] },
    ]
   };
 public doughnutChartLabels: string[] = ['Sales1','Sales2','Sales3','Sales4'];
 public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
