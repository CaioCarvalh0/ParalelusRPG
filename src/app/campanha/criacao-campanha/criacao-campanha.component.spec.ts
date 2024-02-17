import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoCampanhaComponent } from './criacao-campanha.component';

describe('CriacaoCampanhaComponent', () => {
  let component: CriacaoCampanhaComponent;
  let fixture: ComponentFixture<CriacaoCampanhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriacaoCampanhaComponent]
    });
    fixture = TestBed.createComponent(CriacaoCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
