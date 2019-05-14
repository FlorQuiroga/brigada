using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Services;
using WebApplication1.Clases.Modelo;
using WebApplication1.Repositorio.Clases;

namespace WebApplication1
{
    /// <summary>
    /// Descripción breve de Clientes
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class Clientes : System.Web.Services.WebService
    {
        ClientesRepositorio Cr = new ClientesRepositorio();
        UsuariosRepositorio Ur = new UsuariosRepositorio();

        //guarda la encuesta del cliente
        [WebMethod]
        public string GuardarEncuestaDelCliente(int tecnico, string obs, int califica, int clienteid,int pedido)
        {
            string rta = "";
            Encuestas enC;

            enC = new Encuestas()
            {
                Calificacin = califica,
                ClienteID = clienteid,
                EncuestasID = 0,
                fecha = DateTime.Now,
                Observacion = obs,
                TecnicoID = tecnico,
                PedidoReparacionID= pedido

            };


            try
            {
                Cr.GuardarEncuestaCliente(enC);
                rta = "OK";
                return rta;
            }
            catch (Exception ex)
            {
                rta = "ERROR";
                return rta;
            }
        }

        //trae todos los clientes
        [WebMethod]
        public string GetClientesALL()
        {

            string rta = "";
            List<GetClientesAll> lsta = new List<GetClientesAll>();
            try
            {
                lsta = Cr.GetClientesALL().ToList();
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

        //trae el eprfil de un cliente especifico
        [WebMethod]
        public string ClientesPerfil(int CliID)
        {

            string rta = "";
            List<ClientesPerfil> lsta = new List<ClientesPerfil>();
            try
            {
                lsta = Cr.ClientesPerfil(CliID).ToList();
                rta = Newtonsoft.Json.JsonConvert.SerializeObject(lsta).ToString();
                if (lsta.Count == 0)
                {
                    return "ERROR";
                }
                else
                {
                    return rta;
                }
              //  return rta;
            }
            catch (Exception ex)
            {
                rta = "ERROR";
                return rta;
            }

        }
        //actualiza el eprfil de un cliente especifico
        [WebMethod]
        public string UpdateClientePerfil(string Nombre, string Apellido, string Mail, string Telefono,
    string RazonSocial, string TipoFactura, string Calle, string CalleNro, string CodigoPostal,
    string Localidad, string Provincia, string Pais, int ClienteID, int DomicilioID,string pass)
        {

            string rta = "";
            try
            {
                Cr.ActualizaClientePerfil(Nombre, Apellido, Mail, Telefono, RazonSocial, TipoFactura, Calle, CalleNro,
                        CodigoPostal, Localidad, Provincia, Pais, ClienteID, DomicilioID,pass);
                return "OK";
            }
            catch (Exception ex)
            {
                rta = "ERROR";
                return rta;
            }

        }


        [WebMethod]
        //Trae los tecnicos relacionados con el cliente
        public string GetClientesEncuesats(int tecnicoID)
        {
            List<GetClientesEncuesats> lsta = new List<GetClientesEncuesats>();
            string rta = "";
            try
            {

                lsta = Cr.GetClientesEncuesats(tecnicoID).ToList();
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
