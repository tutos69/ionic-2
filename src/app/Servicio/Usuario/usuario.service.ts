import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Usuario } from 'src/app/entidades/Cita';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private auth: AngularFireAuth) { }

  login1(correo: string, password: string) {
    return this.auth.signInWithEmailAndPassword(correo, password)
  }
  logaut(){
    this.auth.signOut();

  }

  registrar(datos:Usuario){
    return this.auth.createUserWithEmailAndPassword(datos.correo,datos.password)
  }

  estadoUsuario(){
    return this.auth.authState
  }

  async getId(){
    const user = await this.auth.currentUser
    if(user){
      return user.uid
    }else {
      return "";
    }

  }
}
