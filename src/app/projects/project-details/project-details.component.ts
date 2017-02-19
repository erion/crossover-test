import { Component, Input } from '@angular/core';

import { Projects } from '../../classes/projects';
//import { PieChartComponent } from '../../pie-chart/pie-chart.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent {

  @Input()
  project: Projects;

  public pie_ChartOptions  = {
    title: '',
    width: 150,
    height: 150,
    legend: 'none',
    colors:['#5cb85c','#ff6600'],
    fontSize: 16,
    pieSliceText: 'value',
    chartArea: {
      left: 0,
      top: 0,
      width: 150,
      height: 150,
    }
  };
  

  constructor() { }

  getUnitTestChartData(project): any {
    let data = [];

    data.push(
      ["",""],
      ["Passed", project.unitTest.passed],
      ["Failed", project.unitTest.failed]
    );

    return data;
  }

  getFunctionalTestChartData(project): any {
    let data = [];

    data.push(
      ["",""],
      ["Passed", project.functionalTest.passed],
      ["Failed", project.functionalTest.failed]
    );

    return data;
  }    

}
