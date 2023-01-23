import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnas: string[] = ['codigo', 'descripcion', 'precio'];//columnas de los arituclos

  datos: Articulo[] = [new Articulo(1, 'papas', 55),//array con los datos
  new Articulo(2, 'manzanas', 53),
  new Articulo(3, 'naranjas', 25),
  ];

  dataSource:any; //para la tabla

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.datos);//meto los datos en la tabla
  }

  filtrar(event: Event) {//aplico filtro
    const filtro = (event.target as HTMLInputElement).value;//cojo el valor del input 
    this.dataSource.filter = filtro.trim().toLowerCase();//filtro en el array
  }  
}

export class Articulo {//clase de articulo
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}