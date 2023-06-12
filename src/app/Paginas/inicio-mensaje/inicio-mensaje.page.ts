import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MensajeService } from 'src/app/Servicio/Mensaje/mensaje.service';

@Component({
  selector: 'app-inicio-mensaje',
  templateUrl: './inicio-mensaje.page.html',
  styleUrls: ['./inicio-mensaje.page.scss'],
})
export class InicioMensajePage implements OnInit {

  mensajes?: any[];
  IdUser: any = "";

  fechaActual2: Date = new Date;
  constructor(private mensajeServicce: MensajeService,
    private router: Router,
    private alertController: AlertController) { }
  // SuscribeUserInfo: Subscription

  ngOnInit() {
    this.listAllMensajes();
    this.IdUser = sessionStorage.getItem("IdUser");

  }

  listAllMensajes() {
    this.mensajeServicce.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.mensajes = data;

      console.log(this.mensajes);
    });
  }

  // async salir() {
  // //   this.SuscribeUserInfo.unsubscribe();
  // //   this.serviceUser.logaut()
  // //   this.uid = null;
  // //   this.router.navigate(['/login']);
  // }
  salir(){
    // IdUser
    sessionStorage.getItem('IdUser');
    sessionStorage.removeItem('IdUser');
    this.router.navigate(['/'])
  }


}
