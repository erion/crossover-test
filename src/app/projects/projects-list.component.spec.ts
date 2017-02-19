/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Headers, HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { InMemoryWebApiModule } from '../vendors/in-memory-web-api-master';
import { InMemoryDataService } from '../services/in-memory-data.service';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ProjectsListComponent } from './projects-list.component';
import { UcfirstPipe } from '../custom-pipes/ucfirst.pipe';
import { ProgressbarModule } from 'ng2-bootstrap/progressbar'
import { ProgressBarDynamicComponent } from '../ng2-components/progress-bar-dinamyc/progress-bar-dinamyc.component';
import { LocalService } from '../services/local.service';
import { Projects } from '../classes/projects';

describe('ProjectsListComponent', () => {
  let component: ProjectsListComponent;
  let fixture: ComponentFixture<ProjectsListComponent>;
  let project: {

        id: 6, name: 'Project Name 6', 
        owner: 'samy', 
        startedAt: '2017-02-01T12:00:00Z', 
        state: {id: 3, name: "rejected"},
        metrics: {
          state: {id: 3, name: "rejected"},
          progress: 100,
          teste: 20,
          maintainability: 30,
          security: 60,
          workmanship: 70
        },
        build: {
          state: {id: 4, name: "complete"},
          code: '168794',
          progress: 100,
          startedAt: '',
          builds: ['debug', 'release']
        },
        unitTest: {
          state: {id: 2, name: "running"},
          progress: 10,
          passed: 100,
          failed: 20,
          total: 300,
          codeCovered: 50,
        },
        functionalTest: {
          state: {id: 2, name: "running"},
          progress: 10,
          passed: 100,
          failed: 20,
          total: 300,
          codeCovered: 50,
        },
        type: 'firewall',

      };
  let selectedProject;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpModule,
        AppRoutingModule,
        ProgressbarModule.forRoot(),
        InMemoryWebApiModule.forRoot(InMemoryDataService)
      ],
      declarations: [
        ProjectsListComponent, 
        UcfirstPipe, 
        ProgressBarDynamicComponent
      ],
      providers: [ 
        LocalService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'getProjects')
    component.getProjects();
    spyOn(component, 'onSelect')
    selectedProject = component.onSelect(project);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get projects', () => {
    expect(component.getProjects).toHaveBeenCalled()
  });

  it('should select a project', () => {
    expect(component.onSelect).toHaveBeenCalled()
  });
});
