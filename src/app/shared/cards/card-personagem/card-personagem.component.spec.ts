import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonagemComponent } from './card-personagem.component';

describe('CardPersonagemComponent', () => {
  let component: CardPersonagemComponent;
  let fixture: ComponentFixture<CardPersonagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPersonagemComponent]
    });
    fixture = TestBed.createComponent(CardPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
