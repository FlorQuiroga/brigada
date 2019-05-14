using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Clases.Modelo;
using WebApplication1.Repositorio.Core;

namespace WebApplication1.Repositorio.Interfaces
{
    public interface ITecnicoRepositorio : IRepositorio<Usuarios>
    {
        List<getTecnicosALL> GetTecnicosAll();
        bool ActualizatecnicoPerfil(string Nombre, string Apellido, string Mail, string Telefono,
          string Imagen1, string Imagen2, string Calle, string CalleNro, string CodigoPostal,
          string Localidad, string Provincia, string Pais, int TecnicoID, int DomicilioID, string tipodoc, string nrodoc, string pass);
        List<GetPerfilTecnico> tecnicosPerfil(int tecID);
        List<GetPedidosBYtecnicoID> tecnicosPedidos(int tecID);
        List<GetPedidosACerrar> GetPedidosACerrar(int tecnicoID);
        List<GetTecnicosEncuesats> GetTecnicosEncuesats(int ClienteID);
    }
}