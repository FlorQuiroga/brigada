using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI.WebControls;
using WebApplication1.Clases.Modelo;
using WebApplication1.Repositorio.Clases;

namespace WebApplication1
{
    /// <summary>
    /// Descripción breve de Usuarios
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class Usuarios : System.Web.Services.WebService
    {
 
        UsuariosRepositorio Ur = new UsuariosRepositorio();
        RetirosRepositorio Rr = new RetirosRepositorio();
   
       //Guarda los usuarios
       [WebMethod]
        public string GuardarUsuario(string Nombre, string Apellido, int ClienteID, int TecnicoID)
        {

            string rta = "";
            try
            {

                rta = Ur.Guardarusuario(Nombre, Apellido, ClienteID, TecnicoID);
                if (rta != "")
                {
                    //   rta = "OK";
                    return rta;
                }
                else
                {
                    rta = "ERROR";
                    return rta;
                }

            }
            catch (Exception ex)
            {
                return "ERROR";
            }
        }

        //Valida Usuarios
        [WebMethod]
        public string ValidaUsuario(string Usuario, string Pass)
        {
            List<GetValidaUsuario> lst = new List<GetValidaUsuario>();
            try
            {

                lst = Ur.ValidaUsuario(Usuario, Pass).ToList();
                string rta = JsonConvert.SerializeObject(lst).ToString();
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

        //Guarda descripcion del usuario que es cliente
        [WebMethod]
        public string GuardarCliente(string nombre, string apellido, string mail, string telefono,
            string tipoDocuemnto, string nroDocumento, string razonsocial, string tipofac, string calle,
            string callenro, string cp, string localidad, string provincia, string pais)
        {

            int DomID = 0;
            //guarda primero el domicilio
            DomID = GuardarDomicilio(calle, callenro, cp, localidad, provincia, pais);

            try
            {
                string respuesta = "";
                            //guarda el cliente
                respuesta = Ur.GuardarCliente(nombre, apellido, mail, telefono,
                tipoDocuemnto, nroDocumento, razonsocial, tipofac, DomID);

                if (respuesta != "")
                {
                    if (respuesta == "NO")
                    {
                        return "NO";//ya existe
                    }
                    else
                    {
                        //guarda usuario para logueo.
                        return respuesta;
                    }
                }
                else
                {
                 
                    return "ERROR";
                }

            }
            catch (Exception ex)
            {

                return "ERROR";
            }
        }

        //guarda descripcion del usuario que es tecnico
        [WebMethod]
        public string Guardartecnico(string nombre, string apellido, string mail, string telefono,
           string tipoDocuemnto, string nroDocumento, string imagen1, string imagen2, string calle,
           string callenro, string cp, string localidad, string provincia, string pais)
        {
            int DomID = 0;
            DomID = GuardarDomicilio(calle, callenro, cp, localidad, provincia, pais);

            try
            {
                int respuesta = 0;
                string rta = "";
                respuesta = Ur.Guardartecnico(nombre, apellido, mail, telefono,
                tipoDocuemnto, nroDocumento, imagen1, imagen2, DomID);
                rta = GuardarUsuario(nombre, apellido, 0, respuesta);
                if (respuesta != 0)
                {
                    //  rta = "OK";
                    return rta;
                }
                else
                {
                    rta = "ERROR";
                    return rta;

                }

            }
            catch (Exception ex)
            {
                return "ERROR";
            }
        }
        //Guarda el domicilio de los usuarios(cliente y tecnico)
        public int GuardarDomicilio(string calle, string NroCalle, string cp, string Loc, string Prov, string pais)
        {
            List<GetValidaUsuario> lst = new List<GetValidaUsuario>();
            try
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
                int domiclioID = 0;
                domiclioID = Ur.GuardarDomicilio(dom);
                return domiclioID;

            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        //trae todos los pedidos disponibles
        [WebMethod]
        public string getPedidosDisponibles()
        {

            string rta = "";
            List<GetPedidosDisponibles> lsta = new List<GetPedidosDisponibles>();
            try
            {
                lsta = Ur.GetPedidosDisponibles().ToList();
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
                throw ex;
            }

        }


        //trae todos los retiros disponibles
        [WebMethod]
        public string GetRetirosDisponibles()
        {

            string rta = "";
            List<GetRetirosDisponibles> lsta = new List<GetRetirosDisponibles>();
            try
            {
                lsta = Rr.GetRetirosDisponibles().ToList();
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
                throw ex;
            }

        }


        //Asignar los retiros disponibles a un tecnico
        [WebMethod]
        public string AsignaRetiros(int retiro, int tecnico)
        {
            bool resultado = true;
            try
            {
                resultado = Ur.AsignaRetiro(retiro, tecnico);
                if (resultado == false)
                {
                    return "ERROR";
                }
                else
                {
                    return "OK";
                }

            }
            catch (Exception ex)
            {
                return "ERROR";
            }

        }

        //trae todos los retiros a cerrar
        [WebMethod]
        public string GetRetirosaCerrar()
        {

            string rta = "";
            List<GetRetirosaCerrar> lsta = new List<GetRetirosaCerrar>();
            try
            {
                lsta = Ur.GetRetirosaCerrar().ToList();
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
                throw ex;
            }

        }

        [WebMethod]
        public string FinalizaRetiro(int retiroID)
        {


            string rta = "";
            try
            {


                bool rtas = Rr.FinalizaRetiro(retiroID);
                if (rtas == false)
                {
                    return "ERROR";
                }
                else
                {
                    return "OK";
                }
            }
            catch (Exception ex)
            {
                return "ERROR";
            }

        }
        [WebMethod]
        public string getAlerta()
        {


            string rta = "0";
            try
            {


                rta = Newtonsoft.Json.JsonConvert.SerializeObject(Ur.getAlertaPedidos()).ToString();
                return rta;
            }
            catch (Exception ex)
            {
                return "0";
            }

        }

        [WebMethod]
        public string getAlertaClientes(int ClienteID)
        {


            string rta = "0";
            try
            {


                rta = (Ur.getAlertaClientes(ClienteID)).ToString();
                return rta;
            }
            catch (Exception ex)
            {
                return "0";
            }

        }

        [WebMethod]
        public string getAlertaTecnicos(int TecnicoID)
        {


            string rta = "0";
            try
            {


                rta = Newtonsoft.Json.JsonConvert.SerializeObject(Ur.getAlertaTecnicos(TecnicoID)).ToString();
                return rta;
            }
            catch (Exception ex)
            {
                return "0";
            }

        }


        //trae todos los retiros disponibles
        [WebMethod]
        public string GetPerfilAdministrador(int AdminID)
        {

            string rta = "";
            List<getAdministradorPerfil> lsta = new List<getAdministradorPerfil>();
            try
            {
                lsta = Ur.getAdministradorPerfil(AdminID).ToList();
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
                throw ex;
            }

        }


        [WebMethod]
        public string UpdateAdministradorPerfil(int AdministradorID, string pass,int baja)
        {

            string rta = "";
            try
            {
                Ur.ActualizaAdministradorPerfil(AdministradorID, pass, baja);
                return "OK";
            }
            catch (Exception ex)
            {
                rta = "ERROR";
                return rta;
            }

        }

    }
}
