import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetidorComponent } from './repetidor.component';

describe('RepetidorComponent', () => {
  let component: RepetidorComponent;
  let fixture: ComponentFixture<RepetidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepetidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepetidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
