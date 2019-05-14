using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Clases.Modelo;

namespace WebApplication1.Repositorio.Clases
{
    public class PedidosSolicitudRepositorio
    {
        public int PedidoDetalleINS(int ArtID, string Lat, string Long, int areasID)
        {

            int prd = 0;
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    prd = Convert.ToInt32(context.PedidoReparacionDetalleINS(ArtID, Lat, Long, areasID).First());
                }
                return prd;
            }
            catch (Exception ex)
            {
                return prd;
            }
        }

        public bool PedidoINS(int CliID, int DomicilioID, string Descripcion, int PRDID, string horario)
        {


            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    context.PedidoReparacionINS(CliID, DomicilioID, Descripcion, PRDID, horario).ToString();
                    return true;
                }

            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public int PedidoTencioINS(int PedidoReparacionID, int TecnicoID)
        {
            int id = 0;

            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    id = Convert.ToInt32(context.PredidoTecnicoINS(PedidoReparacionID, TecnicoID).First());
                    return id;
                }

            }
            catch (Exception ex)
            {
                return id;
            }


        }


        public bool TomatecnicoPedido(int pedidoid)
        {

            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    context.TomarPedido(pedidoid);
                    return true;
                }

            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool CierratecnicoPedido(int pedidoid, bool Repara, string detalle)
        {
            if (Repara == true)
            {
                //tiene que insertar el metodo de reparacion
                try
                {
                    using (TropaNerdEntities context = new TropaNerdEntities())
                    {
                        context.CerrarPedido(pedidoid);
                        context.RetiroINS(pedidoid, detalle, detalle);
                        return true;
                    }

                }
                catch (Exception ex)
                {
                    return false;
                }
            }
            else
            {
                try
                {
                    using (TropaNerdEntities context = new TropaNerdEntities())
                    {
                        context.CerrarPedido(pedidoid);

                        return true;
                    }

                }
                catch (Exception ex)
                {
                    return false;
                }

            }

        }

        public List<GetPedidosDescripcion> GetPedidosDescripcion(int pedidoID)
        {
            List<GetPedidosDescripcion> lsta = new List<GetPedidosDescripcion>();
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lsta = context.GetPedidosDescripcion(pedidoID).ToList();
                }
                return lsta;
            }
            catch (Exception ex)
            {
                return lsta;
            }
        }


        public List<GetPedidosCerrados> GetPedidosCerrados(DateTime fechadesde, DateTime fechaHasta)
        {
            List<GetPedidosCerrados> lsta = new List<GetPedidosCerrados>();
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lsta = context.GetPedidosCerrados(fechadesde, fechaHasta).ToList();
                }
                return lsta;
            }
            catch (Exception ex)
            {
                return lsta;
            }
        }
    }
}