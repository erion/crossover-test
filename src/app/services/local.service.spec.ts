/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Headers, Http, HttpModule } from '@angular/http';
import { LocalService } from './local.service';

describe('LocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ LocalService ]
    });
  });

  it('should ...', inject([LocalService], (service: LocalService) => {
    expect(service).toBeTruthy();
  }));
});
