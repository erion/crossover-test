/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProgressbarModule } from 'ng2-bootstrap/progressbar'
import { ProgressBarDynamicComponent } from './progress-bar-dinamyc.component';

describe('ProgressBarDinamycComponent', () => {
  let component: ProgressBarDynamicComponent;
  let fixture: ComponentFixture<ProgressBarDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ProgressbarModule.forRoot() ],
      declarations: [ ProgressBarDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
