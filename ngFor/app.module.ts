import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { ListadoArticulosComponent } from './listado-articulos/listado-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoArticulosComponent,
    ListadoArticulosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
