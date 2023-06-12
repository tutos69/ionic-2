import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioMensajePageRoutingModule } from './inicio-mensaje-routing.module';

import { InicioMensajePage } from './inicio-mensaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioMensajePageRoutingModule
  ],
  declarations: [InicioMensajePage]
})
export class InicioMensajePageModule {}
