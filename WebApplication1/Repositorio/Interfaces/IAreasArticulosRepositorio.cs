using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Clases.Modelo;
using WebApplication1.Repositorio.Core;

namespace WebApplication1.Repositorio.Interfaces
{
    public interface IAreasArticulosRepositorio : IRepositorio<Areas>
    {
        List<GetArticulosByArea> GetArticulosByArea(int area);
        List<getAreasALL> GetAreasALL();
    }
}