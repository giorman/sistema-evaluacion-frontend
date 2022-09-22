import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { EvaluationService } from '../../../services/evaluation.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { Evaluation } from '../../../models/Evaluation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../../models/Category';

@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.scss'],
})
export class AddEvaluationComponent implements OnInit {
  categories!: Category[];
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alert: AlertService,
    private categoryService: CategoryService,
    private evaluationService: EvaluationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadData();
  }

  loadData() {
    this.categoryService.listCategories().subscribe(
      (data: any) => {
        this.categories = data as Category[];
      },
      (error) => {
        this.alert.error('Error', 'Error al cargar los datos');
      }
    );
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      pointMax: ['', Validators.required],
      numberQuestion: ['', Validators.required],
      enable: [''],
      category: ['', Validators.required],
    });
  }

  add() {
    let evaluation: Evaluation = new Evaluation();
    let category: Category = new Category();
    evaluation.title = this.form.value.title;
    evaluation.description = this.form.value.description;
    evaluation.pointMax = this.form.value.pointMax;
    evaluation.numberQuestion = this.form.value.numberQuestion;
    evaluation.enable = this.form.value.enable;
    category.id = this.form.value.category;
    evaluation.category = category;

    this.evaluationService.addEvaluation(evaluation).subscribe(
      () => {
        this.alert.success(
          'Evaluacion',
          'La Evaluacion ha sido guardada con éxito'
        );
        this.form.reset();
        this.router.navigate(['/admin/evaluation']);
      },
      (error) => {
        this.alert.error('Error', 'Error al guardar la evaluacion');
      }
    );
  }
}
