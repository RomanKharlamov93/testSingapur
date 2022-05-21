import { TestBed } from '@angular/core/testing';

import { Photo.Service.TsService } from './photo.service.ts.service';

describe('Photo.Service.TsService', () => {
  let service: Photo.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Photo.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
