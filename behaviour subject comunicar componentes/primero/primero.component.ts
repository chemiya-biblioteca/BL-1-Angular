import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit, OnDestroy {
  
  //varible para almacenar el mensaje
  message!:string;
  subscription!: Subscription;


  //enlazamos con el servicio
  constructor(private data: ServicioService) { }

  //al iniciar, con la suscripcion guardamos el mensaje
  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
