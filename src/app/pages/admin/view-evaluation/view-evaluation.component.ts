import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../../../models/Evaluation';
import { EvaluationService } from '../../../services/evaluation.service';
import { AlertService } from '../../../services/alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-evaluation',
  templateUrl: './view-evaluation.component.html',
  styleUrls: ['./view-evaluation.component.scss'],
})
export class ViewEvaluationComponent implements OnInit {
  evaluations!: Evaluation[];
  constructor(
    private evaluationService: EvaluationService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.evaluationService.listEvaluations().subscribe(
      (data: any) => {
        this.evaluations = data;
      },
      (error) => {
        console.log(error);
        this.alert.error('Error', 'Error al cargar las evaluaciones');
      }
    );
  }

  delete(id: any) {
    Swal.fire({
      title: 'Eliminar evaluación',
      text: '¿Estás seguro de eliminar la evaluación?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FFC50F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.evaluationService.deleteEvaluacion(id).subscribe(
          () => {
            this.alert.success(
              'Evaluación eliminado',
              'La evaluación ha sido eliminada de la base de datos'
            );
            this.loadData();
          },
          (error) => {
            this.alert.error('Error', 'Error al eliminar la evaluación');
          }
        );
      }
    });
  }
}
