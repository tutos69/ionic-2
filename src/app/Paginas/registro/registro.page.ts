import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/Cita';
import { DocumentService } from 'src/app/Servicio/Document/document.service';
import { UsuarioService } from 'src/app/Servicio/Usuario/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  datos:Usuario={
    correo: "",
    password : "",
    nombre : "",
    uid : "",
  }


  constructor(private serviceUser:UsuarioService,
    private router: Router,
    private documento : DocumentService,) { }

  ngOnInit() {
  }
  async registrar(){
    console.log('datos ->',this.datos);
    const res = await this.serviceUser.registrar(this.datos).catch(error => {console.log(error)}
    )
    if(res){
      console.log('cliente creado');
      const path ='Cliente';
      const id = res.user!.uid
      this.datos.uid = id;
      this.datos.password = "";
      await this.documento.crearDocumento(this.datos,path,id)
      this.router.navigate(['/login'])
    }
  }
}
