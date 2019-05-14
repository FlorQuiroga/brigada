using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Services;
using WebApplication1.Clases.Modelo;
using WebApplication1.Repositorio.Clases;

namespace WebApplication1
{
    /// <summary>
    /// Descripción breve de Articulos
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    // [System.Web.Script.Services.ScriptService]
    public class Articulos : System.Web.Services.WebService
    {

        AreasArticulosRepositorio Ar = new AreasArticulosRepositorio();

        [WebMethod]
        public string GetAreasALL()
        {
            string rta = "";
            List<getAreasALL> lsta = new List<getAreasALL>();
            try
            {
                lsta = Ar.GetAreasALL().ToList();
                rta = Newtonsoft.Json.JsonConvert.SerializeObject(lsta).ToString();
            
                    return rta;
                
               
            }
            catch (Exception ex)
            {
                return "ERROR";
            }
        }

        //trae el articulo 
        [WebMethod]
        public string GetArticulosByArea(int AreaID)
        {
            string rta = "";
            List<GetArticulosByArea> lsta = new List<GetArticulosByArea>();
            try
            {
                lsta = Ar.GetArticulosByArea(AreaID).ToList();
                rta = Newtonsoft.Json.JsonConvert.SerializeObject(lsta).ToString();
                if (rta=="")
                {
                    return "ERROR";
                }
                else
                {
                    return rta;
                }
               // return rta;
            }
            catch (Exception ex)
            {
                return "ERROR";
            }
        }


    }
}
