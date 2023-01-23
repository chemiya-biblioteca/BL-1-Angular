import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }//creo del cliente http

  retornar() {//hago peticion a la api
    return this.http.get("https://scratchya.com.ar/vue/datos.php");
  }
}
