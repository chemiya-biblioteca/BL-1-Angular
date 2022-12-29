import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css']
})
export class ListadoArticulosComponent {
  @Input() datos:any;
  
  constructor() { }

  ngOnInit() {
  }
}
