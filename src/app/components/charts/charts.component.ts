import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartsComponent implements OnInit {
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
  constructor() { }
  ngOnInit() {
  }
  public doughnutChartLabels:string[] = ['3rd Degree burn', '2nd Degree burn', '1st Degree burn'];
  public doughnutChartData:number[] = [150, 250, 175];
  public doughnutChartType:string = 'doughnut';

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
