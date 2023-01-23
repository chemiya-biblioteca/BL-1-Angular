import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tablanro',
  templateUrl: './tablanro.component.html',
  styleUrls: ['./tablanro.component.css']
})
export class TablanroComponent {
  constructor(private activatedRoute: ActivatedRoute) { }//creo activatedroute
  nro!: number;//atributos
  tabla!: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.nro = parseInt(parametros.get("nro")!);//cojo el parametro de la ruta
      this.tabla = '';
      for (let x = 1; x <= 10; x++) {//hago calculos
        let t = x * this.nro;
        this.tabla += t + '-';
      }
    })
  }
}
