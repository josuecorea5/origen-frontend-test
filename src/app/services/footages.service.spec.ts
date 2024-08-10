import { TestBed } from '@angular/core/testing';

import { FootagesService } from './footages.service';

describe('FootagesService', () => {
  let service: FootagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
