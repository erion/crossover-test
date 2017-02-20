/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

import { InMemoryWebApiModule } from './vendors/in-memory-web-api-master';
import { InMemoryDataService } from './services/in-memory-data.service';

import { ProjectsListComponent } from './projects/projects-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProgressBarDynamicComponent } from './ng2-components/progress-bar-dinamyc/progress-bar-dinamyc.component';
import { ProgressbarModule } from 'ng2-bootstrap/progressbar'
import { LocalService } from './services/local.service';
import { UcfirstPipe } from './custom-pipes/ucfirst.pipe';
import { GoogleChartComponent } from './google-chart/google-chart.component';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        ProgressbarModule.forRoot(),
        InMemoryWebApiModule.forRoot(InMemoryDataService),
      ],
      declarations: [
        AppComponent,
        ProjectsListComponent,
        ProjectDetailsComponent,
        ProgressBarDynamicComponent,
        UcfirstPipe,
        GoogleChartComponent,
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    });      
    TestBed.compileComponents(); 
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Crossover Front-end Architect Test'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Crossover Front-end Architect Test');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Crossover Front-end Architect Test');
  }));
});
