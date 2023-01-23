import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos: any;//array para los valores

  constructor(private articulosService: ArticulosService) {}//llamo al servicio

  ngOnInit() {
    this.articulosService.retornar()//llamo el metodo del servicio y guardo los datos que me da
      .subscribe( result =>  this.articulos = result)
  }
}
