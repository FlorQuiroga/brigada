using System;
using System.Collections.Generic;
using System.Linq;
using WebApplication1.Clases.Modelo;

namespace WebApplication1.Repositorio.Clases
{
    public class UsuariosRepositorio
    {
        public string Guardarusuario(string Nombre, string Apellido, int ClienteID, int TecnicoID)
        {
            string usu = "";
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    usu=context.UsuariosINS(Nombre, Apellido, ClienteID, TecnicoID).FirstOrDefault().ToString();
                }
                return usu;
            }
            catch (Exception ex)
            {
                return usu;
            }
        }

        public string GuardarCliente(string nombre, string apellido, string mail, string telefono,
            string tipoDocuemnto, string nroDocumento, string razonsocial, string tipofac, int DomID)
        {
            string CliID = "";
            string purbea = "";
            try
            {
                if (DomID != 0)
                {

                    using (TropaNerdEntities context = new TropaNerdEntities())
                    {
                        CliID =(context.ClienteINS(nombre, apellido, mail, telefono, tipoDocuemnto, nroDocumento, razonsocial, DomID, tipofac).First().ToString());
                    }
                }
                return CliID;
            }
            catch (Exception ex)
            {
                return CliID;
            }

        }

        public List<GetValidaUsuario> ValidaUsuario(string Usuario, string Pass)
        {
            using (TropaNerdEntities context = new TropaNerdEntities())
            {
                List<GetValidaUsuario> listas = new List<GetValidaUsuario>();
                listas = context.ValidaUsuario(Usuario, Pass).ToList();
                return listas;
            }
        }


        public int GuardarDomicilio(Domicilio domicilio)
        {
            int domicilioid = 0;
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {

                    context.Set<Domicilio>().Add(domicilio);

                    context.SaveChanges();

                    domicilioid = domicilio.DomicilioID;


                }
                return domicilioid;
            }
            catch(Exception ex)
            {
                return 0;
            }

       
        }

        public int Guardartecnico(string nombre, string apellido, string mail, string telefono,
           string tipoDocuemnto, string nroDocumento, string imagen1, string imagen2, int DomID)
        {
            int tecID =0;
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    tecID=Convert.ToInt32(context.TecnicoINS(nombre, apellido, mail, telefono, tipoDocuemnto, nroDocumento,  DomID, imagen1,imagen2).First());
                }
                return tecID;
            }
            catch (Exception ex)
            {
                return tecID;
            }

        }

        public int GuardapedidoDetalle(PedidoReparacionDetalle pedido)
        {
            int domicilioid = 0;
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {

                    context.Set<PedidoReparacionDetalle>().Add(pedido);

                    context.SaveChanges();

                }
                return domicilioid;
            }
            catch (Exception ex)
            {
                return 0;
            }

        }



        public List<GetPedidosDisponibles> GetPedidosDisponibles() {
            List<GetPedidosDisponibles> lsta = new List<GetPedidosDisponibles>();
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lsta = context.GetPedidosDisponibles().ToList();
                }
                return lsta;
            }
            catch (Exception ex)
            {
                return lsta;
            }

        }

        public bool AsignaRetiro(int retiroID, int tecnicoID)
        {
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                     context.AsignaRetiroTecnico(retiroID, tecnicoID);
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        public List<GetRetirosaCerrar> GetRetirosaCerrar()
        {
            List<GetRetirosaCerrar> lsta = new List<GetRetirosaCerrar>();
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lsta = context.GetRetirosaCerrar().ToList();
                }
                return lsta;
            }
            catch (Exception ex)
            {
                return lsta;
            }

        }
        public int getAlertaPedidos() {
            int cantidad = 0;
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    cantidad =Convert.ToInt32(context.getPedidosAlerta().First());
                }
                return cantidad;
            }
            catch (Exception ex)
            {
                return cantidad;
            }
        }

        public int getAlertaClientes(int ClienteID)
        {
            int cantidad = 0;
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    cantidad = Convert.ToInt32(context.getAlertaClientes(ClienteID).First());
                }
                return cantidad;
            }
            catch (Exception ex)
            {
                return cantidad;
            }
        }

        public int getAlertaTecnicos(int tecnicoid)
        {
            int cantidad = 0;
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    cantidad = Convert.ToInt32(context.getAlertaTecnicos(tecnicoid).First());
                }
                return cantidad;
            }
            catch (Exception ex)
            {
                return cantidad;
            }
        }

        public List<getAdministradorPerfil> getAdministradorPerfil(int AdminID)
        {
            List<getAdministradorPerfil> lsta = new List<getAdministradorPerfil>();
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lsta = context.getAdministradorPerfil(AdminID).ToList();
                }
                return lsta;
            }
            catch (Exception ex)
            {
                return lsta;
            }

        }
        public bool ActualizaAdministradorPerfil(int AdminID,string pass,int baja)
        {

            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    context.UpdateAdministrador(AdminID, pass,baja);
                    return true;
                }

            }
            catch (Exception ex)
            {
                return true;
            }
        }


    }
}