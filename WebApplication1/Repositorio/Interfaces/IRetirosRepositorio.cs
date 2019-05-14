
using System.Collections.Generic;
using WebApplication1.Clases.Modelo;
using WebApplication1.Repositorio.Core;

namespace WebApplication1.Repositorio.Interfaces
{
    public interface IRetirosRepositorio: IRepositorio<Usuarios>
    {
        List<GetRetirosDisponibles> GetRetirosDisponibles();
        bool FinalizaRetiro(int RetiroID);
    }
}