import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //variable de contados
  contador = 1;


  //manejamos eventos de los botones
  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
}
