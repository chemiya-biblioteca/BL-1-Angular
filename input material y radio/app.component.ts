import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //variables para enlazar
  valor1!:number;
  valor2!:number;
  resultado!:number;

  //tipos de operaciones
  operacionSeleccionada: string = 'suma';
  tipoOperaciones = [
    'suma',
    'resta',
    'multiplicacion',
    'division',
  ];

  operar() {
    switch (this.operacionSeleccionada) {//segun la operacion seleccionada
      case 'suma' : this.resultado = this.valor1 + this.valor2;//hacemos operaciones
                    break;
      case 'resta' : this.resultado = this.valor1 - this.valor2;
                     break;
      case 'multiplicacion' : this.resultado = this.valor1 * this.valor2;
                              break;
      case 'division' : this.resultado = this.valor1 / this.valor2;
                        break;
    }
  }
}
