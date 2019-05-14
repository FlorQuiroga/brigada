using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Services;
using WebApplication1.Clases.Modelo;
using WebApplication1.Repositorio.Clases;

namespace WebApplication1
{
    /// <summary>
    /// Descripción breve de Tecnicos
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    // [System.Web.Script.Services.ScriptService]
    public class Tecnicos : System.Web.Services.WebService
    {
        TecnicoRepositorio Tr = new TecnicoRepositorio();
        RetirosRepositorio Rr = new RetirosRepositorio();

        //trae todos los tecnicos
        [WebMethod]
        public string GettecnicosALL()
        {
            string rta = "";
            List<getTecnicosALL> lsta = new List<getTecnicosALL>();
            try
            {
                lsta = Tr.GetTecnicosAll().ToList();
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
                return "ERROR";
            }
        }

        //trae el perfil de un tecnico en especifico
        [WebMethod]
        public string tecnicosPerfil(int TecID)
        {

            string rta = "";
            List<GetPerfilTecnico> lsta = new List<GetPerfilTecnico>();
            try
            {
                lsta = Tr.tecnicosPerfil(TecID).ToList();
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
                return "ERROR";
            }

        }

        //actualiza perfil de un tecnico
        [WebMethod]
        public string UpdatetecnicoPerfil(string Nombre, string Apellido, string Mail, string Telefono,
string Imagen1, string Imagen2, string Calle, string CalleNro, string CodigoPostal,
string Localidad, string Provincia, string Pais, int TecnicoID, int DomicilioID, string tipoDoc, string nroDoc, string pass,int baja)
        {

            string rta = "";
            try
            {
                Tr.ActualizatecnicoPerfil(Nombre, Apellido, Mail, Telefono, Imagen1, Imagen2, Calle, CalleNro,
                        CodigoPostal, Localidad, Provincia, Pais, TecnicoID, DomicilioID, tipoDoc, nroDoc, pass,baja);

                return "OK";
            }
            catch (Exception ex)
            {
                return "ERROR";
            }

        }


        [WebMethod]
        //aceptacion de pedido
        public string GetPedidosTecnicoID(int tecnicoID)
        {
            List<GetPedidosBYtecnicoID> lsta = new List<GetPedidosBYtecnicoID>();
            string rta = "";
            try
            {

                lsta = Tr.tecnicosPedidos(tecnicoID).ToList();
                rta = Newtonsoft.Json.JsonConvert.SerializeObject(lsta).ToString();


                return rta;


            }
            catch (Exception ex)
            {
                return "ERROR";
            }

        }


        //trae los pedidos actualizar por tecnico
        [WebMethod]
        public string GetPedidosACerrar(int tencicoID)
        {
            List<GetPedidosACerrar> lst = new List<GetPedidosACerrar>();

            string rta = "";
            try
            {


                lst = Tr.GetPedidosACerrar(tencicoID);
                rta = Newtonsoft.Json.JsonConvert.SerializeObject(lst).ToString();
                if (lst.Count == 0)
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
                return "ERROR";
            }

        }


        //Cierra retiros



        [WebMethod]
        //Trae los tecnicos relacionados con el cliente
        public string GetTecnicosEncuesats(int ClienteID)
        {
            List<GetTecnicosEncuesats> lsta = new List<GetTecnicosEncuesats>();
            string rta = "";
            try
            {

                lsta = Tr.GetTecnicosEncuesats(ClienteID).ToList();
                rta = Newtonsoft.Json.JsonConvert.SerializeObject(lsta).ToString();


                return rta;


            }
            catch (Exception ex)
            {
                return "ERROR";
            }

        }

    }
}
