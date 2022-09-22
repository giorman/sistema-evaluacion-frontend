import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Router } from '@angular/router';
import { Category } from '../../../models/Category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-add-catergory',
  templateUrl: './add-catergory.component.html',
  styleUrls: ['./add-catergory.component.scss'],
})
export class AddCatergoryComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alert: AlertService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  add() {
    this.categoryService.addCategory(this.form.value as Category).subscribe(
      () => {
        this.form.reset();
        this.alert.success(
          'Categoría',
          'La categoría ha sido guardar con éxito'
        );
        this.router.navigate(['/admin/categories']);
      },
      (error) => {
        console.log(error);
        this.alert.error('Error', 'Error al guardar la categoría');
      }
    );
  }
}
