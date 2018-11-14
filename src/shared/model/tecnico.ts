import { DateTime } from "ionic-angular";

export class Tecnico {

    constructor(
       public TecnicoID:number,
       public NroTecnico:number,
       public Nombre:string,
       public Apellido:string,
       public DomicilioID:number,
       public Telefono:string,
       public TipoDocumentoID:number,
       public NroDocumento:string,
       public FechaAlta:DateTime,
       public Mail:string,
       public Imagen1:string,
       public Imagen2:string,
       public Baja:number,
        
    ) {
    }
  
  }