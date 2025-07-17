import { TestBed } from '@angular/core/testing';

import { ArquetipoService } from './arquetipo.service';

describe('ArquetipoService', () => {
  let service: ArquetipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArquetipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
