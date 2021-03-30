/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SessionModelService } from './sessionModel.service';

describe('Service: SessionModel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionModelService]
    });
  });

  it('should ...', inject([SessionModelService], (service: SessionModelService) => {
    expect(service).toBeTruthy();
  }));
});
