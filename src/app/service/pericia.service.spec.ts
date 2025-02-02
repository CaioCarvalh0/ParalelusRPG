import { TestBed } from '@angular/core/testing';

import { PericiaService } from './pericia.service';

describe('PericiaService', () => {
  let service: PericiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PericiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
