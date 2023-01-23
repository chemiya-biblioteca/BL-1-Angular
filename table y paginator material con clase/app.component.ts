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
  columnas: string[] = ['codigo', 'descripcion', 'precio'];//columnas nombres

  datos: Articulo[] = [];//array con los articulos
  dataSource:any;//para guardar en la tabla

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;//llamo el paginador
  
  ngOnInit() {
    for (let x = 1; x <= 100; x++)//creo un articulo y lo meto en el array
      this.datos.push(new Articulo(x, `artículo ${x}`, Math.trunc(Math.random() * 1000)));
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);//meto datos en la tabla
    this.dataSource.paginator = this.paginator;//asino el paginador
  }
}

export class Articulo {//clase para el articulo
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}