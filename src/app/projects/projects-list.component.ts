import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Projects } from '../classes/projects';
import { LocalService } from '../services/local.service';
import { ProgressBarDynamicComponent } from '../ng2-components/progress-bar-dinamyc/progress-bar-dinamyc.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  providers: [ LocalService ]
})
export class ProjectsListComponent implements OnInit {

  constructor(
    private localService: LocalService,
    private router: Router
  ) { }

  projects: Projects[];
  selectedProject: Projects;

  ngOnInit() {
    this.getProjects();
  };

  getProjects(): void {
    this.localService.getProjects().then(projects => this.projects = projects);
  };

  onSelect(project: Projects): void {
    this.selectedProject = project;
  };

}
