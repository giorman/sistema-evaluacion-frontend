import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEvaluationQuestionComponent } from './view-evaluation-question.component';

describe('ViewEvaluationQuestionComponent', () => {
  let component: ViewEvaluationQuestionComponent;
  let fixture: ComponentFixture<ViewEvaluationQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEvaluationQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEvaluationQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
