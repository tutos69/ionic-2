import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/entidades/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private dbPath = '/citas'
  citasRef: AngularFirestoreCollection<Cita>;

  constructor(private db: AngularFirestore) {
    this.citasRef = db.collection(this.dbPath)
  }


  getAll(): AngularFirestoreCollection<Cita> {
    return this.citasRef
  }


  getById(id: string): Observable<any> {
    return this.citasRef.doc(id).valueChanges()
  }

  createCita(cita:Cita): any{
    return this.citasRef.add(cita)
  }

  updateCita(id:string, cita:Cita): Promise<void>{
    return this.citasRef.doc(id).update(cita)
  }

  deleteCita(id: string): Promise<void> {
    return this.citasRef.doc(id).delete();
  }

}
