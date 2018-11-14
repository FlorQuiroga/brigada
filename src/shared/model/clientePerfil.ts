import { DateTime } from "ionic-angular";

export class Clienteperfil {

    constructor(
        public ClienteID: number,
        public NroCliente: number,
        public Nombre: string,
        public Apellido: string,
        public Mail: string,
        public Telefono: string,
        public TipoDocumento: string,
        public NroDocumento: string,
        public RazonSocial: string,
        public DomicilioID: number,
        public FechaAlta: DateTime,
        public TipoFactura: string,
        public BajaCLI: number,
        public Calle:string, 
        public CalleNro:string, 
        public CodigoPostal:string, 
        public Localidad:string,
        public Provincia:string, 
        public Pais:string, 
        public Baja:number
        
        )

        {
    }

}
