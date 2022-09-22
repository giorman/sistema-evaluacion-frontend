import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { AlertService } from '../../../services/alert.service';
import Swal from 'sweetalert2';
import { Question } from '../../../models/Question';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  evaluationId: any;
  questions: Question[] = [];
  pointGet: number = 0;
  numberCorrect = 0;
  isSent = false;
  timer: any;

  constructor(
    private locationSt: LocationStrategy,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.evaluationId = this.route.snapshot.params['evaluationId'];
    this.loadQuestions();
    this.disableBack();

  }

  loadQuestions() {
    this.questionService
      .listQuestionByEvaluation(this.evaluationId)
      .subscribe(
        (data: any) => {
          this.questions = data;
          this.timer = this.questions.length * 1 * 60;
          this.questions.forEach((question: any) => {
            question.responseUser = '';
          });
          this.startTimer();
        },
        (error) => {
          console.log(error);
          this.alert.error(
            'Error',
            'Error al cargar las preguntas de la evaluacion'
          );
        }
      );
  }

  startTimer() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        clearInterval(t);
        this.checkEvaluation();
      } else {
        this.timer--;
      }
    }, 1000);
  }

  disableBack() {
    history.pushState(null, null!, location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, null!, location.href);
    });
  }

  sentEvaluation() {
    Swal.fire({
      title: '¿Quieres enviar la evaluación?',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Enviar',
      cancelButtonColor: '#FFC50F',
      confirmButtonColor: '#d33',
      icon: 'info',
    }).then((e) => {
      if (e.isConfirmed) {
        this.checkEvaluation();
      }
    });
  }

  checkEvaluation() {
    this.questionService.checkEvaluation(this.questions).subscribe(
      (data: any) => {
        this.pointGet = data.pointMax;
        this.numberCorrect = data.numberCorrect;
        this.isSent = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getHourFormatter() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} : min : ${ss} seg`;
  }

  printPage() {
    window.print();
  }
}
