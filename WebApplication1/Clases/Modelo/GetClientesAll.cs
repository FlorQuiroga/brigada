//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApplication1.Clases.Modelo
{
    using System;
    
    public partial class GetClientesAll
    {
        public int ClienteID { get; set; }
        public Nullable<int> NroCliente { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Mail { get; set; }
        public string Telefono { get; set; }
        public string TipoDocumento { get; set; }
        public string NroDocumento { get; set; }
        public string RazonSocial { get; set; }
        public Nullable<int> DomicilioID { get; set; }
        public Nullable<System.DateTime> FechaAlta { get; set; }
        public string TipoFactura { get; set; }
        public Nullable<int> Baja { get; set; }
    }
}
