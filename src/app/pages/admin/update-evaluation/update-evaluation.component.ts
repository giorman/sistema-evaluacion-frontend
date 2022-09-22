import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationService } from '../../../services/evaluation.service';
import { Category } from '../../../models/Category';
import { CategoryService } from '../../../services/category.service';
import { AlertService } from '../../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evaluation } from 'src/app/models/Evaluation';

@Component({
  selector: 'app-update-evaluation',
  templateUrl: './update-evaluation.component.html',
  styleUrls: ['./update-evaluation.component.scss'],
})
export class UpdateEvaluationComponent implements OnInit {
  evaluationId!: number;
  categories!: Category[];
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alert: AlertService,
    private route: ActivatedRoute,
    private evaluationService: EvaluationService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadData();
  }
  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      pointMax: ['', Validators.required],
      numberQuestion: ['', Validators.required],
      enable: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  loadData() {
    this.evaluationId = this.route.snapshot.params['evaluationId'];
    this.evaluationService
      .getEvaluation(this.evaluationId.toString())
      .subscribe(
        (data: any) => {
          this.form.setValue({
            title: data.title,
            description: data.description,
            pointMax: data.pointMax,
            numberQuestion: data.numberQuestion,
            enable: data.enable,
            category: data.category.id,
          });
        },
        (error) => {
          console.log(error);
        }
      );

    this.categoryService.listCategories().subscribe(
      (data: any) => {
        this.categories = data as Category[];
      },
      (error) => {
        this.alert.error('Error !!', 'Error al cargar los datos');
      }
    );
  }

  public update() {
    let evaluation: Evaluation = new Evaluation();
    let category: Category = new Category();
    evaluation.id = this.evaluationId;
    evaluation.title = this.form.value.title;
    evaluation.description = this.form.value.description;
    evaluation.pointMax = this.form.value.pointMax;
    evaluation.numberQuestion = this.form.value.numberQuestion;
    evaluation.enable = this.form.value.enable;
    category.id = this.form.value.category;
    evaluation.category = category;
    this.evaluationService.updateEvaluation(evaluation).subscribe(
      (data) => {
        this.alert.success(
          'Evaluación',
          'La Evalaución ha sido actualizada con éxito'
        );
        this.router.navigate(['/admin/evaluation']);
      },
      (error) => {
        this.alert.error('Error', 'No se ha podido actualizar la evaluación');
      }
    );
  }
}
