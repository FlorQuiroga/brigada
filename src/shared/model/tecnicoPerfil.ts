import { DateTime } from "ionic-angular";

export class TecnicoPerfil {

    constructor(
        public TecnicoID: number,
        public Nombre: string,
        public Apellido: string,
        public Mail: string,
        public Telefono: string,
        public Imagen1: string,
        public DomicilioID: number,
        public Imagen2: string,
        public Calle:string, 
        public CalleNro:string, 
        public CodigoPostal:string, 
        public Localidad:string,
        public Provincia:string, 
        public Pais:string, 
        public TipoDocumento:string,
        public NroDocumento:string
       
        )

        {
    }

}
