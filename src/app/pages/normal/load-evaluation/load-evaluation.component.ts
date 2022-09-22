import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaluationService } from '../../../services/evaluation.service';
import { Evaluation } from '../../../models/Evaluation';

@Component({
  selector: 'app-load-evaluation',
  templateUrl: './load-evaluation.component.html',
  styleUrls: ['./load-evaluation.component.scss'],
})
export class LoadEvaluationComponent implements OnInit {
  catId: any;
  evaluations: Evaluation[] = [];

  constructor(
    private route: ActivatedRoute,
    private evaluationService: EvaluationService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.route.params.subscribe((params) => {
      this.catId = params['catId'];
      if (this.catId == 'all') {
        this.evaluationService.getEvaluationEnable().subscribe(
          (data: any) => {
            this.evaluations = data;
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        this.evaluationService
          .getEvaluationEnableByCategory(this.catId)
          .subscribe(
            (data: any) => {
              this.evaluations = data;
            },
            (error) => {
              console.log(error);
            }
          );
      }
    });
  }
}
