import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/entidades/Cita';
import { MensajeService } from 'src/app/Servicio/Mensaje/mensaje.service';

@Component({
  selector: 'app-nuevo-mensaje',
  templateUrl: './nuevo-mensaje.page.html',
  styleUrls: ['./nuevo-mensaje.page.scss'],
})
export class NuevoMensajePage implements OnInit {

  IdUser: any = "";

  datos: Mensaje = {
    usuario: '',
    texto: '',
    fechaActual: new Date
  }



  constructor(
    private mensajeService: MensajeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.IdUser = sessionStorage.getItem("IdUser");
  }

  async guaradarMensaje() {
    if (this.datos.texto == "") {
      alert("Ingrese algun mensaje")
    } else {
      this.datos.usuario = this.IdUser
      console.log('datos ->', this.datos);
      this.mensajeService.createCita(this.datos).then(()=>{
        console.log("el mensaje se a creado ")
        this.router.navigate(['/home']);
      })
    }
  }
  regresar(){
    this.router.navigate(['/home']);

  }
}
