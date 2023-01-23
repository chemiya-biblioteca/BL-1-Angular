import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablanroComponent } from './tablanro/tablanro.component';


const routes: Routes = [{
  path: "tabla/:nro",//ruta al componente con el numero
  component: TablanroComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
