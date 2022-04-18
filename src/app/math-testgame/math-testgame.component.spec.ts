import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathTestgameComponent } from './math-testgame.component';

describe('MathTestgameComponent', () => {
  let component: MathTestgameComponent;
  let fixture: ComponentFixture<MathTestgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathTestgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathTestgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
