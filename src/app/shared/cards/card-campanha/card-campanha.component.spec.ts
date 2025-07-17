import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCampanhaComponent } from './card-campanha.component';

describe('CardCampanhaComponent', () => {
  let component: CardCampanhaComponent;
  let fixture: ComponentFixture<CardCampanhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCampanhaComponent]
    });
    fixture = TestBed.createComponent(CardCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
