import { Component, Input } from '@angular/core';

import { Projects } from '../../classes/projects';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent {

  @Input()
  project: Projects;

  constructor() { }

}
