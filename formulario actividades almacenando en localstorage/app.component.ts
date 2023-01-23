import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //creamos formulario
  actividad = new FormControl();


  //lista de actividades
  lista!: string[];

  ngOnInit(): void {
    this.lista=[];//iniciamos array
    let datos=localStorage.getItem("actividades");//cogemos del localstorage
    if(datos!=null) {//si tiene algo lo ponemos en el array
      let arreglo=JSON.parse(datos);
      if (arreglo!=null)
        for(let actividad of arreglo)
          this.lista.push(actividad);
    }
  }


  agregar() {//añadimos la actividad que viene en el formulario al array
    this.lista.push(this.actividad.value);    
    localStorage.setItem('actividades', JSON.stringify(this.lista));//lo ponemos en el localstorage
    this.actividad.setValue('');//reiniciamos formulario
  }

  borrar(pos:number) {//recibimos numero
    this.lista.splice(pos,1);//borramos del array en la posicion
    localStorage.clear();//limpiamos el storage
    localStorage.setItem('actividades', JSON.stringify(this.lista));//guardamos en array en el storage otra vez
  }

  borrarTodas() {
    localStorage.clear();//limpiamos storage y lista
    this.lista=[];
  }
}