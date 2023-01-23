import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  //variable del componente
  valor: number=1;
  constructor() { }

  //al iniciar ponemos valor
  ngOnInit() {
    this.valor = Math.trunc(Math.random() * 6) + 1;
  }
}
