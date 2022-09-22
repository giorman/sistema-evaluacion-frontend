import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { AlertService } from 'src/app/services/alert.service';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss'],
})
export class ViewCategoryComponent implements OnInit {
  categories!: Category[];
  constructor(
    private categoryService: CategoryService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {

    this.loadData();
  }

  loadData(){
    this.categoryService.listCategories().subscribe(
      (dato: any) => {
        this.categories = dato;
      },
      (error) => {
        console.log(error);
        this.alert.error('Categoria', 'Error al cargar las categorías');
      }
    );
  }

  delete(id:any){
    Swal.fire({
      title: '¿Estas seguro que quieres eliminar esta categoria?',
      icon: 'info',
      showCancelButton: true,
      cancelButtonColor: '#FFC50F',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.deleteCategory(id).subscribe(()=>{
          this.alert.success('Categoria', 'La categoria se ha eliminado correctamente');
          this.loadData();
        },(error)=>{
          console.log(error);
          this.alert.error('Categoria', 'Error al eliminar categoria');
        })
      }
    });
  }

}
