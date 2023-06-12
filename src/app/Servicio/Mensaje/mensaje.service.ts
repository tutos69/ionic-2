import { Injectable } from '@angular/core';
import { Mensaje } from 'src/app/entidades/Cita';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private dbPath = '/mensajes'
  citasRef: AngularFirestoreCollection<Mensaje>;


  constructor(private db: AngularFirestore) {
    this.citasRef = db.collection(this.dbPath)
  }
  createCita(cita:Mensaje): any{
    return this.citasRef.add(cita)
  }
  getAll(): AngularFirestoreCollection<Mensaje> {
    return this.citasRef
  }
}
