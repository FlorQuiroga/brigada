using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Clases.Modelo;
using WebApplication1.Repositorio.Core;

namespace WebApplication1.Repositorio.Interfaces
{
    public interface IUsuariosRepositorio: IRepositorio<Usuarios>
    {//creacion de usu Admin
        string Guardarusuario(string Nombre, string Apellido, int ClienteID, int TecnicoID);
        //valida el logueo
        List<GetValidaUsuario> ValidaUsuario(string Usuario, string Pass);
        //Guarda domicilio
        int GuardarDomicilio(Domicilio domicilio);
        //guarda el cliente
        string GuardarCliente(string nombre, string apellido, string mail, string telefono,
             string tipoDocuemnto, string nroDocumento, string razonsocial, string tipofac, int DomID);
        //guarda tecnico
        int Guardartecnico(string nombre, string apellido, string mail, string telefono,
           int tipoDocuemnto, string nroDocumento, string imagen1, string imagen2, int DomID);
        List<GetPedidosDisponibles> GetPedidosDisponibles();
        bool AsignaRetiro(int retiroID, int tecnicoID);
        List<GetRetirosaCerrar> GetRetirosaCerrar();
        int getAlertaPedidos();
        int getAlertaTecnicos(int tecnicoid);
        int getAlertaClientes(int ClienteID);
    }
}