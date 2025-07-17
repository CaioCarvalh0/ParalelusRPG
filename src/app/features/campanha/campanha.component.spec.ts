import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaComponent } from './campanha.component';

describe('CampanhaComponent', () => {
  let component: CampanhaComponent;
  let fixture: ComponentFixture<CampanhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampanhaComponent]
    });
    fixture = TestBed.createComponent(CampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
