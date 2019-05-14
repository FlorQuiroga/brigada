using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Clases.Modelo;

namespace WebApplication1.Repositorio.Clases
{
    public class ClientesRepositorio
    {
        public bool GuardarEncuestaCliente(Encuestas encuestas)
        {

            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {

                    context.Set<Encuestas>().Add(encuestas);

                    context.SaveChanges();

                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        public List<GetClientesAll> GetClientesALL()
        {

            List<GetClientesAll> lsta = new List<GetClientesAll>();
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lsta = context.GetClientesAll().ToList();
                }
                return lsta;
            }
            catch (Exception ex)
            {
                return lsta;
            }
        }

        public List<ClientesPerfil> ClientesPerfil(int cliID)
        {

            List<ClientesPerfil> lsta = new List<ClientesPerfil>();
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lsta = context.ClientesPerfil(cliID).ToList();
                }
                return lsta;
            }
            catch (Exception ex)
            {
                return lsta;
            }
        }
          public bool ActualizaClientePerfil(string Nombre, string Apellido, string Mail, string Telefono,
    string RazonSocial, string TipoFactura, string Calle, string CalleNro, string CodigoPostal,
    string Localidad, string Provincia, string Pais, int ClienteID, int DomicilioID,string pass)
        {

            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    context.ClientesPerfilUPD(Nombre, Apellido, Mail, Telefono, RazonSocial, TipoFactura, Calle, CalleNro,
                       CodigoPostal, Localidad, Provincia, Pais, ClienteID, DomicilioID, pass);
                    return true;
                }

            }
            catch (Exception ex)
            {
                return true;
            }
        }


        public List<GetClientesEncuesats> GetClientesEncuesats(int tecnicoID)
        {
            List<GetClientesEncuesats> lst = new List<GetClientesEncuesats>();

            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lst = (context.GetClientesEncuesats(tecnicoID).ToList());
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