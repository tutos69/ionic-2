import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoMensajePageRoutingModule } from './nuevo-mensaje-routing.module';

import { NuevoMensajePage } from './nuevo-mensaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoMensajePageRoutingModule
  ],
  declarations: [NuevoMensajePage]
})
export class NuevoMensajePageModule {}
