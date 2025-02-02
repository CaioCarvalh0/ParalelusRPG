import { TestBed } from '@angular/core/testing';

import { CaminhoService } from './caminho.service';

describe('CaminhoService', () => {
  let service: CaminhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaminhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
