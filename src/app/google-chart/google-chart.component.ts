import { Directive, Component, ElementRef, Input, OnInit} from '@angular/core';
declare var google:any;
declare var googleLoaded:any;

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})

@Directive({
  selector: '[GoogleChart]'
})
export class GoogleChartComponent implements OnInit {
  public _element:any;

  @Input()
  chartType:string;
  @Input() 
  chartOptions: Object;
  @Input() 
  chartData: Object;

  constructor(public element: ElementRef) {
    this._element = this.element.nativeElement;
  }
  
  ngOnInit() {
    google.charts.load('current', {'packages':['corechart']});
    this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element)
console.log('initiated');
  }

  drawGraph (chartOptions, chartType, chartData, el) {
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var wrapper;
      wrapper = new google.visualization.ChartWrapper({
        chartType: chartType,
        dataTable: chartData ,
        options: chartOptions || {},
        containerId: el.id
      });
      wrapper.draw();
    }
  }

  updateChart() {
    google.charts.load('current', {'packages':['corechart']});
    this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element)
  }
}