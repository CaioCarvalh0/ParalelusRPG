import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCampanhaComponent } from './home-campanha.component';

describe('HomeCampanhaComponent', () => {
  let component: HomeCampanhaComponent;
  let fixture: ComponentFixture<HomeCampanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCampanhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
