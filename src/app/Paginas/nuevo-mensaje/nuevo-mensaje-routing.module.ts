import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoMensajePage } from './nuevo-mensaje.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoMensajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoMensajePageRoutingModule {}
