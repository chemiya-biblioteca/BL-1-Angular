import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posiciones=[['-','-','-'],
              ['-','-','-'],
              ['-','-','-']];//array de casillas
  jugador='O';//variable para el jugador
  

  presion(fila:number,columna:number) {//pulsar sitio
    if (this.posiciones[fila][columna]=='-') {
      this.posiciones[fila][columna]=this.jugador;//en ese sitio pongo lo del jugador
      this.verificarGano('X');//miro si gana alguien y cambio
      this.verificarGano('O');
      this.cambiarJugador();
    }
  }

  reiniciar() {//casillas a 0
    for(let f=0;f<3;f++)
      for(let c=0;c<3;c++)
        this.posiciones[f][c]='-';
  }

  cambiarJugador() {//cambio letra
    if (this.jugador=='O')
      this.jugador='X';
    else
      this.jugador='O';    
  }
 

  verificarGano(ficha: string) {//miro si tres casillas en linea
    if (this.posiciones[0][0]==ficha && this.posiciones[0][1]==ficha && this.posiciones[0][2]==ficha)
      alert('Gano:'+ficha);
    if (this.posiciones[1][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[1][2]==ficha)
      alert('Gano:'+ficha);
    if (this.posiciones[2][0]==ficha && this.posiciones[2][1]==ficha && this.posiciones[2][2]==ficha)
      alert('Gano:'+ficha);
    if (this.posiciones[0][0]==ficha && this.posiciones[1][0]==ficha && this.posiciones[2][0]==ficha)
      alert('Gano:'+ficha);
    if (this.posiciones[0][1]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][1]==ficha)
      alert('Gano:'+ficha);
    if (this.posiciones[0][2]==ficha && this.posiciones[1][2]==ficha && this.posiciones[2][2]==ficha)
      alert('Gano:'+ficha);      
    if (this.posiciones[0][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][2]==ficha)
      alert('Gano:'+ficha);
    if (this.posiciones[0][2]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][0]==ficha)
      alert('Gano:'+ficha);      
  }
}
