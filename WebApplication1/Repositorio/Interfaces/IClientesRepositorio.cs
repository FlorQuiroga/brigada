using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Clases.Modelo;
using WebApplication1.Repositorio.Core;

namespace WebApplication1.Repositorio.Interfaces
{
    public interface IClientesRepositorio:IRepositorio<Usuarios>
    {
        bool GuardarEncuestaCliente(Encuestas encuestas);
        List<GetClientesAll> GetClientesALL();
        List<ClientesPerfil> ClientesPerfil(int cliID);
        bool ActualizaClientePerfil(string Nombre, string Apellido, string Mail, string Telefono,
string RazonSocial, string TipoFactura, string Calle, string CalleNro, string CodigoPostal,
string Localidad, string Provincia, string Pais, int ClienteID, int DomicilioID, string pass);
        List<GetClientesEncuesats> GetClientesEncuesats(int tecnicoID);
    }
}