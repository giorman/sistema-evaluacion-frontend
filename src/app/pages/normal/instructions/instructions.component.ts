import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../../services/evaluation.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Evaluation } from '../../../models/Evaluation';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent implements OnInit {
  evaluationId: any;
  evaluation: Evaluation = new Evaluation();
  timeMinutes: number = 0;
  pointQuestion: number = 0;

  constructor(
    private evaluationService: EvaluationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.evaluationId = this.route.snapshot.params['evaluationId'];
    this.loadData();
  }

  loadData() {
    this.evaluationService.getEvaluation(this.evaluationId).subscribe(
      (data: any) => {
        this.timeMinutes = data.numberQuestion * 1;
        this.pointQuestion = Number((data.pointMax / data.numberQuestion).toFixed(2)) ;
        this.evaluation = data as Evaluation;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  startEvaluation() {
    Swal.fire({
      title: '¿Quieres comenzar el examen?',
      icon: 'info',
      showCancelButton: true,
      cancelButtonColor: '#FFC50F',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Empezar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.isConfirmed) {
          this.router.navigate(['/start/' + this.evaluationId]);
        }
      }
    });
  }
}
