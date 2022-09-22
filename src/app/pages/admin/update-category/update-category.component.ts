import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { AlertService } from 'src/app/services/alert.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  form!: FormGroup;
  categoryId:any;
  constructor(
    private fb: FormBuilder,
    private alert: AlertService,
    private categoryService: CategoryService,
    private router: Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadData();
  }

  loadData(){
    this.categoryId = this.route.snapshot.params['categoryId'];
    this.categoryService.getCategory(this.categoryId).subscribe((data:any)=>{
      this.form.setValue({
        title:data.title,
        description:data.description
      });
    })
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  update() {
    let category:Category =this.form.value as Category;
    category.id=this.categoryId;

    this.categoryService.addCategory(category).subscribe(
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
