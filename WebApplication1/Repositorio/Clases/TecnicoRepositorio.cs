using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Clases.Modelo;

namespace WebApplication1.Repositorio.Clases
{
    public class TecnicoRepositorio
    {
        public List<getTecnicosALL> GetTecnicosAll()
        {
            List<getTecnicosALL> lsta = new List<getTecnicosALL>();
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lsta = context.getTecnicosALL().ToList();
                }
                return lsta;
            }
            catch (Exception ex)
            {
                return lsta;
            }
        }

        public int guardartecnico(Tecnico tecnico)
        {
            int tecnicoID = 0;
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {

                    context.Set<Tecnico>().Add(tecnico);

                    context.SaveChanges();

                }
                return tecnicoID;
            }
            catch (Exception ex)
            {
                return 0;
            }

        }

        public bool ActualizatecnicoPerfil(string Nombre, string Apellido, string Mail, string Telefono,
  string Imagen1, string Imagen2, string Calle, string CalleNro, string CodigoPostal,
  string Localidad, string Provincia, string Pais, int TecnicoID, int DomicilioID,string tipodoc,string nrodoc,string pass,int baja)
        {

            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    context.TecnicosPerfilUPD(Nombre, Apellido, Mail, Telefono, Imagen1, Imagen2, Calle, CalleNro,
                       CodigoPostal, Localidad, Provincia, Pais, TecnicoID, DomicilioID, tipodoc, nrodoc, pass,baja);
                    return true;
                }

            }
            catch (Exception ex)
            {
                return true;
            }
        }

        public List<GetPerfilTecnico> tecnicosPerfil(int tecID)
        {

            List<GetPerfilTecnico> lsta = new List<GetPerfilTecnico>();
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lsta = context.GetPerfilTecnico(tecID).ToList();
                }
                return lsta;
            }
            catch (Exception ex)
            {
                return lsta;
            }
        }



        public List<GetPedidosBYtecnicoID> tecnicosPedidos(int tecID)
        {

            List<GetPedidosBYtecnicoID> lsta = new List<GetPedidosBYtecnicoID>();
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lsta = context.GetPedidosBYtecnicoID(tecID).ToList();
                }
                return lsta;
            }
            catch (Exception ex)
            {
                return lsta;
            }
        }

        public List<GetPedidosACerrar> GetPedidosACerrar(int tecnicoID)
        {
            List<GetPedidosACerrar> lst = new List<GetPedidosACerrar>();

            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lst = (context.GetPedidosACerrar(tecnicoID).ToList());
                    return lst;
                }


            }
            catch (Exception ex)
            {
                return lst;
            }
        }


        //trae los tecnicos de un cliente en particular
        public List<GetTecnicosEncuesats> GetTecnicosEncuesats(int ClienteID)
        {
            List<GetTecnicosEncuesats> lst = new List<GetTecnicosEncuesats>();

            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lst = (context.GetTecnicosEncuesats(ClienteID).ToList());
                    return lst;
                }


            }
            catch (Exception ex)
            {
                return lst;
            }
        }



    }
}