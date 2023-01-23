import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit, OnDestroy{
  //variable para almacenar el mensaje
  message!:string;
  subscription!: Subscription;

  //enlazamos con el servicio
  constructor(private data: ServicioService) { }


  //al iniciar, nos suscribimos y guardamos el mensaje
  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //al hacer click en el boton cambiamos el mensaje
  changeMessage() {
    this.data.changeMessage("Hello this is the new Message")
  }
}
