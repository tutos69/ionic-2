import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicio/Usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  IdUser: any = "";
  credenciales ={
    correo :"",
    password :""
  }


  constructor(
    private serviceUser:UsuarioService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  async login(){
    console.log('crdenciales: ' + this.credenciales);

    const res = await this.serviceUser.login1(this.credenciales.correo , this.credenciales.password)
      .then(res => {
        console.log(res);
        this.IdUser = this.credenciales.correo
        sessionStorage.setItem("IdUser", this.IdUser);;
        this.router.navigate(['/home'])
      })
      .catch(error => console.log(error));
  }
}
