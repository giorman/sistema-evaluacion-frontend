import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadEvaluationComponent } from './load-evaluation.component';

describe('LoadEvaluationComponent', () => {
  let component: LoadEvaluationComponent;
  let fixture: ComponentFixture<LoadEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
