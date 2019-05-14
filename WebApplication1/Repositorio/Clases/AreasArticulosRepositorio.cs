using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Clases.Modelo;
using WebApplication1.Repositorio.Core;

namespace WebApplication1.Repositorio.Clases
{
    public class AreasArticulosRepositorio
    {
        //cargo todas las areas
        public List<getAreasALL> GetAreasALL()
        {
            List<getAreasALL> lsta = new List<getAreasALL>();
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lsta= context.getAreasALL().ToList();
                }
                return lsta;
            }
            catch (Exception ex)
            {
                return lsta;
            }
        }

        //cargo los articulos en base a las areas seleccionadas
        public List<GetArticulosByArea> GetArticulosByArea(int area)
        {
            List<GetArticulosByArea> lsta = new List<GetArticulosByArea>();
            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lsta = context.GetArticulosByArea(area).ToList();
                }
                return lsta;
            }
            catch (Exception ex)
            {
                return lsta;
            }
        }
    }
}