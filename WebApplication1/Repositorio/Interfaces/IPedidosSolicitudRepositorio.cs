using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Clases.Modelo;
using WebApplication1.Repositorio.Core;

namespace WebApplication1.Repositorio.Interfaces
{
    public interface IPedidosSolicitudRepositorio:IRepositorio<Usuarios>
    {
        bool PedidoINS(int CliID, int DomicilioID, string Descripcion, int PRDID, string horario);
        int PedidoDetalleINS(int ArtID, string Lat, string Long, int areasID);
        int PedidoTencioINS(int PedidoReparacionID, int TecnicoID);
        bool TomatecnicoPedido(int pedidoid);

        
        bool CierratecnicoPedido(int pedidoid, bool Repara, string detalle);

        List<GetPedidosDescripcion> GetPedidosDescripcion(int pedidoID);

        List<GetPedidosCerrados> GetPedidosCerrados(DateTime fechadesde, DateTime fechaHasta);

    }
}