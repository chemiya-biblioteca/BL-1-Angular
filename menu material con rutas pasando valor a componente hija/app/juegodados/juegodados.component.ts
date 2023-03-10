import { Component } from '@angular/core';

@Component({
  selector: 'app-juegodados',
  templateUrl: './juegodados.component.html',
  styleUrls: ['./juegodados.component.css']
})
export class JuegodadosComponent {
  //variables
  valor1: number;
  valor2: number;
  valor3: number;
  resultado!: string;
  constructor() {
    this.valor1 = this.retornarAleatorio();//las ponemos valor al inicio
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;//numero aleatorio
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();//al tirar genera nuevos aleatorio
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1==this.valor2 && this.valor1==this.valor3)    
      this.resultado='Ganó';
    else
      this.resultado='Perdió';
  }
  
  ngOnInit() {
  }

}
