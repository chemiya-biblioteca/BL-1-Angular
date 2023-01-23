import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  art={//un articulo concreto
    codigo:0 ,
    descripcion:"",
    precio:0
  }

  //array con todos los articulos
  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},
              ];

              //devuelve la longitud
  hayRegistros() {
    return this.articulos.length>0;              
  }


  //recibe el codigo
  borrar(codigo:number) {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==codigo)//busca el que tiene el mismo
      {
        this.articulos.splice(x,1);//lo elimina
        return;
      }
  }

  agregar() {
    if (this.art.codigo==0) {//valida el codigo
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==this.art.codigo)//busca en el array uno que tenga el mismo
    {
      alert('ya existe un articulo con dicho codigo');
      return;
    }        
    this.articulos.push({codigo:this.art.codigo,//si no lo guarda
                         descripcion:this.art.descripcion,
                         precio:this.art.precio });
    this.art.codigo=0;//reinicia los campos
    this.art.descripcion="";	
    this.art.precio=0;    
  }

  //recibe un articulo
  seleccionar(art: { codigo: number; descripcion: string; precio: number; }) {
    this.art.codigo=art.codigo;//pone los campos en el que tenemos para mostrar
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  }

  modificar() {
    for(let x=0;x<this.articulos.length;x++)//busca en el array el que tiene el mismo codigo
      if (this.articulos[x].codigo==this.art.codigo)
      {
        this.articulos[x].descripcion=this.art.descripcion;//asigna los campos
        this.articulos[x].precio=this.art.precio;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }
}
