import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //atributos
  //con array
  nombre = 'Rodriguez Pablo';
  edad = 19;
  sueldos = [1700, 1600, 1900];
}
