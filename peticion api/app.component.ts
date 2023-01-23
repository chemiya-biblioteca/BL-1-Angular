import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos: any;//aray de almacen

  constructor(private http: HttpClient) { }//creo del cliente http

  ngOnInit() {
    this.http.get("https://scratchya.com.ar/vue/datos.php")//mando peticion y lo guardo en el array el resultado
      .subscribe(
        resultado => {
          this.articulos = resultado;
        }
      );
  }
}
