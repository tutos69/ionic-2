export class Cita{
  paciente:string ='';
  correo : string ='';
  celular:string ='';
}

export class Usuario{
  correo: string='';
  password : string='';
  nombre : string='';
  uid:string='';
}

export class Mensaje{
  usuario: string='';
  texto : string='';
  fechaActual!: Date;
}
