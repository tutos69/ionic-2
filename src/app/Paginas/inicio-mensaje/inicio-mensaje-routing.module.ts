import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioMensajePage } from './inicio-mensaje.page';

const routes: Routes = [
  {
    path: '',
    component: InicioMensajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioMensajePageRoutingModule {}
