import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/Category';
import { CategoryService } from '../../../services/category.service';
import { AlertService } from '../../../services/alert.service';
import Swal from 'sweetalert2';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-normal',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories:Category[]=[];

  constructor(
    private categoryService:CategoryService,
    private alert:AlertService,
    private login:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.loadData();
  }

  loadData(){
    this.categoryService.listCategories().subscribe(
      (data:any) => {
        this.categories = data;
      },
      (error) => {
        this.alert.error('Error','Error al cargar las categorias')
        console.log(error);
      }
    )
  }

  public logout() {
    Swal.fire({
      title: '¿Seguro quieres cerrar sesion?',
      icon: 'info',
      showCancelButton: true,
      cancelButtonColor: '#FFC50F',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.login.logout();
        this.router.navigateByUrl('/');
      }
    });

  }
}
