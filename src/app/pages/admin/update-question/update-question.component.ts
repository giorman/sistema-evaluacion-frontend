import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/Question';
import { Evaluation } from '../../../models/Evaluation';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.scss'],
})
export class UpdateQuestionComponent implements OnInit {
  questionId: any;
  evaluationId: any;
  title: any;
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.questionId = this.route.snapshot.params['questionId'];
    this.createForm();
    this.loadData();
  }

  createForm() {
    this.form = this.fb.group({
      content: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      responseCorrect: ['', Validators.required],
    });
  }

  loadData() {
    this.questionService.getQuestion(this.questionId).subscribe(
      (data: any) => {
        this.form.setValue({
          content: data.content,
          option1: data.option1,
          option2: data.option2,
          option3: data.option3,
          option4: data.option4,
          responseCorrect: data.responseCorrect,
        });
        this.evaluationId = data.evaluation.id;
        this.title = data.evaluation.title;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  update() {
    let question: Question = new Question();
    let evaluation: Evaluation = new Evaluation();

    question.id = this.questionId;
    question.content = this.form.value.content;
    question.option1 = this.form.value.option1;
    question.option2 = this.form.value.option2;
    question.option3 = this.form.value.option3;
    question.option4 = this.form.value.option4;
    question.responseCorrect = this.form.value.responseCorrect;
    evaluation.id = this.evaluationId;
    question.evaluation = evaluation;

    this.questionService.updateQuestion(question).subscribe(
      () => {
        this.alert.success(
          'Pregunta',
          'La pregunta ha sido actualizada con éxito'
        );
        this.form.reset();
        this.router.navigate([
          `/admin/view-question/${this.evaluationId}/${this.title}`,
        ]);
      },
      (error) => {
        this.alert.error('Error', 'Error al actualizar la pregunta ');
      }
    );
  }
}
