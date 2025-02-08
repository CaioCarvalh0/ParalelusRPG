import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorteComponent } from './recorte.component';

describe('RecorteComponent', () => {
  let component: RecorteComponent;
  let fixture: ComponentFixture<RecorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecorteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
