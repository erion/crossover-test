/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProjectDetailsComponent } from './project-details.component';
import { UcfirstPipe } from '../../custom-pipes/ucfirst.pipe';
import { GoogleChartComponent } from '../../google-chart/google-chart.component';
import { ProgressbarModule } from 'ng2-bootstrap/progressbar'
import { ProgressBarDynamicComponent } from '../../ng2-components/progress-bar-dinamyc/progress-bar-dinamyc.component';
import { Projects } from '../../classes/projects';

describe('ProjectDetailsComponent', () => {
  let component: ProjectDetailsComponent;
  let fixture: ComponentFixture<ProjectDetailsComponent>;

  (function(){
    window.google = {
      charts: {
        load: function(){console.log('fake google api loaded')},
        setOnLoadCallback: function(){console.log('fake google api method called')},
      }
    };
  })();  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProjectDetailsComponent,
        UcfirstPipe,
        GoogleChartComponent,
        ProgressBarDynamicComponent
      ],
      imports: [ 
        ProgressbarModule.forRoot(),
      ],     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsComponent);
    component = fixture.componentInstance;
    component.project = {
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
          startedAt: '2017-02-05T15:20:00Z',
          builds: ['debug', 'release']
        },
        unitTest: {
          state: {id: 2, name: "running"},
          progress: 10,
          passed: 574,
          failed: 2,
          percPassed: 27,
          codeCovered: 86,
        },
        functionalTest: {
          state: {id: 2, name: "running"},
          progress: 10,
          passed: 100,
          failed: 20,
          percPassed: 27,
          codeCovered: 93,
        },
        type: 'firewall'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
