import { DateTime } from "ionic-angular";

export class Cliente {

    constructor( 
        public ClienteID: number,
        public NroCliente: number,
        public Nombre: string,
        public Apellido: string,
        public NomMailbre: string,
        public Telefono: string,
        public TipoDocumento: string,
        public NroDocumento: string,
        public RazonSocial: string,
        public DomicilioID: number,
        public FechaAlta: DateTime,
        public TipoFactura: string,
        public Baja: number)

        {
    }

}
