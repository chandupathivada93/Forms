import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  public barChartOptions ={
    sclaeShowVerticalLines: false,
    responsive: true
  };
  
  public barChartLabels = ['2010', '2011', '2012', '2013', '2014'];
  public barChartType: ChartType ='bar';
  public barChartLegends = true;
  public barChartData = [
    {data:[65,59,80,81,56,55,40], label: 'Series A'},
    {data:[28,29,40,64,65,77,96], label: 'Series B'},
    {data:[39,35,30,45,50,65,90], label: 'Series C'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
