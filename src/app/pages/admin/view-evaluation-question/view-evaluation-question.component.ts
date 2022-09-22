import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import Swal from 'sweetalert2';
import { Question } from '../../../models/Question';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-view-evaluation-question',
  templateUrl: './view-evaluation-question.component.html',
  styleUrls: ['./view-evaluation-question.component.scss'],
})
export class ViewEvaluationQuestionComponent implements OnInit {
  evaluationId: any;
  title: any;
  questions: Question[] = [];

  constructor(
    private alert: AlertService,
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.evaluationId = this.route.snapshot.params['evaluationId'];
    this.title = this.route.snapshot.params['title'];
    this.loadData();
  }

  loadData() {
    this.questionService.listQuestionByEvaluation(this.evaluationId).subscribe(
      (data: any) => {
        this.questions = data as Question[];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteQuestion(preguntaId: any) {
    Swal.fire({
      title: 'Eliminar pregunta',
      text: '¿Estás seguro , quieres eliminar esta pregunta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FFC50F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.questionService.deleteQuestion(preguntaId).subscribe(
          (data) => {
            this.alert.success(
              'Eliminar',
              'La pregunta se elimino correctamente'
            );
            this.loadData();
          },
          (error) => {
            this.alert.error('Error', 'La pregunta no pudo eliminar');
            console.log(error);
          }
        );
      }
    });
  }
}
