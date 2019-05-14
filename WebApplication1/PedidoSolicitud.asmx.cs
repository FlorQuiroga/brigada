using System;
using System.Collections.Generic;
using System.Web.Services;
using WebApplication1.Clases.Modelo;
using WebApplication1.Repositorio.Clases;
using System.Linq;

namespace WebApplication1
{
    /// <summary>
    /// Descripción breve de PedidoSolicitud
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    // [System.Web.Script.Services.ScriptService]
    public class PedidoSolicitud : System.Web.Services.WebService
    {
        UsuariosRepositorio Ur = new UsuariosRepositorio();
        PedidosSolicitudRepositorio Pr = new PedidosSolicitudRepositorio();

        //inserta los pedidos de los clientes
        [WebMethod]
        public string INSPedido(int ClienteID, int DomicilioID, int ArticuloID, string calle, string NroCalle, string cp, string Loc, string Prov, string pais, string descripcion, string Horarios, string latitud, string Longitud, int AreaID)
        {
            int pedidid = 0;
            //verifico si tiene domicilio
            try
            {
                if (DomicilioID == 0)//es un domicilio nuevo, no el propio
                {
                    Domicilio dom;
                    dom = new Domicilio()
                    {
                        Calle = calle,
                        CalleNro = NroCalle,
                        CodigoPostal = cp,
                        Localidad = Loc,
                        Provincia = Prov,
                        Pais = pais,
                        Baja = 0

                    };
                    int domiID = Ur.GuardarDomicilio(dom);

                    pedidid = Pr.PedidoDetalleINS(ArticuloID, latitud, Longitud, AreaID);
                    Pr.PedidoINS(ClienteID, domiID, descripcion, pedidid, Horarios);


                }
                else
                {
                    pedidid = Pr.PedidoDetalleINS(ArticuloID, latitud, Longitud, AreaID);
                    Pr.PedidoINS(ClienteID, DomicilioID, descripcion, pedidid, Horarios);
                }


                return "OK";
            }
            catch (Exception ex)
            {

                return "ERROR";
            }
        }
        
        //Le asigna un pedido a un tecnico
        [WebMethod]
        public string PedidoTecnicoINS(int PedidoReparacionID, int TecnicoID)
        {

            int pedidotecncioid = 0;
            string rta = "";
            //verifico si tiene domicilio
            try
            {

                pedidotecncioid = Pr.PedidoTencioINS(PedidoReparacionID, TecnicoID);
                if (pedidotecncioid != 0)
                {
                    rta = "OK";
                }
                else
                {
                    rta = "ERROR";
                }

                return rta;
            }
            catch (Exception ex)
            {
                rta = "ERROR";
                return rta;
            }

        }

        //actualiza el pedido cuando lo toma el tecnico
        [WebMethod]
        public string TomatecnicoPedido(int pedidoid)
        {
            bool rta = true;
            string resultado = "";
            try
            {

                rta = Pr.TomatecnicoPedido(pedidoid);
                if (rta == true)
                {
                    resultado = "OK";
                }
                else
                {
                    resultado = "ERROR";
                }

                return resultado;
            }
            catch (Exception ex)
            {
                resultado = "ERROR";
                return resultado;
            }

        }


        //actualiza el pedido cuando lo toma el tecnico
        [WebMethod]
        public string CierratecnicoPedido(int pedidoid,string detalle,int Retiro)
        {
            bool rta = true;
            bool retiro = true;
            string resultado = "";
            try
            {

                if (Retiro == 1)
                {
                    retiro = true;
                }
                else {
                    retiro = false;
                }
                rta = Pr.CierratecnicoPedido(pedidoid, retiro, detalle);
                if (rta == true)
                {
                    resultado = "OK";
                }
                else
                {
                    resultado = "ERROR";
                }

                return resultado;
            }
            catch (Exception ex)
            {
                resultado = "ERROR";
                return resultado;
            }

        }

        //Trae la descripcion de un pedido
        [WebMethod]
        public string GetPedidosDescripcion(int pedidoid)
        {
            string rta = "";
            List<GetPedidosDescripcion> lsta = new List<GetPedidosDescripcion>();
            try
            {
                lsta = Pr.GetPedidosDescripcion(pedidoid).ToList();
                rta = Newtonsoft.Json.JsonConvert.SerializeObject(lsta).ToString();
                if (lsta.Count == 0)
                {
                    return "ERROR";
                }
                else
                {
                    return rta;
                }
                //   return rta;
            }
            catch (Exception ex)
            {
                rta = "ERROR";
                return rta;

            }

        }



        //Trae la descripcion de un pedido
        [WebMethod]
        public string GetPedidosCerrados(DateTime fechadesde, DateTime fechaHasta)
        {
            string rta = "";
            List<GetPedidosCerrados> lsta = new List<GetPedidosCerrados>();
            try
            {
                lsta = Pr.GetPedidosCerrados(fechadesde, fechaHasta).ToList();
                rta = Newtonsoft.Json.JsonConvert.SerializeObject(lsta).ToString();
                if (lsta.Count == 0)
                {
                    return "ERROR";
                }
                else
                {
                    return rta;
                }
        
            }
            catch (Exception ex)
            {
                rta = "ERROR";
                return rta;

            }

        }
    }
}
