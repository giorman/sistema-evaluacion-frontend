import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/Question';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../services/alert.service';
import { Evaluation } from '../../../models/Evaluation';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {
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
    this.evaluationId = this.route.snapshot.params['evaluationId'];
    this.title = this.route.snapshot.params['title'];
    this.createForm();
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

  add() {
    let question: Question = new Question();
    let evaluation: Evaluation = new Evaluation();

    question.content = this.form.value.content;
    question.option1 = this.form.value.option1;
    question.option2 = this.form.value.option2;
    question.option3 = this.form.value.option3;
    question.option4 = this.form.value.option4;
    question.responseCorrect = this.form.value.responseCorrect;
    evaluation.id = this.evaluationId;
    question.evaluation = evaluation;

    this.questionService.addQuestion(question).subscribe(
      () => {
        this.alert.success(
          'Pregunta',
          'La pregunta ha sido agregada con éxito'
        );
        this.form.reset();
        this.router.navigate([
          `/admin/view-question/${this.evaluationId}/${this.title}`,
        ]);
      },
      (error) => {

        if(error.status==403){
          this.alert.warning('Question', error.error.message);

        }else{
          this.alert.error('Error', 'Error al guardar la pregunta ');
        }


        this.router.navigate([
          `/admin/view-question/${this.evaluationId}/${this.title}`,
        ]);
      }
    );
  }
}
