import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  //creamos un servicio que almacena una variable donde se va a guardar el mensaje

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }


  //metodo para cambiar el mensaje
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
