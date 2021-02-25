import { TestBed } from '@angular/core/testing';

import { GetAuthorsService } from './get-authors.service';

describe('GetAuthorsService', () => {
  let service: GetAuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAuthorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
