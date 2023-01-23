import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //variable para el resultado
  resultado!: string;


  //creamos formulario
  constructor(private fb: FormBuilder) { }

  //ponemos validaciones, requeridos y longitud
  formularioContacto = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    mail: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]]
  });

  //cuando se suba el formulario mostramos los datos
  submit() {
    if (this.formularioContacto.valid)// si es valido accedemos a los campos
      this.resultado = "Todos los datos son válidos/"+this.formularioContacto.value.nombre+"/"+this.formularioContacto.value.mensaje+"/"+this.formularioContacto.value.mail;
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}
