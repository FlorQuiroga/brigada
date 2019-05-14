using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Clases.Modelo;

namespace WebApplication1.Repositorio.Clases
{
    public class RetirosRepositorio
    {
        public List<GetRetirosDisponibles> GetRetirosDisponibles()
        {
            List<GetRetirosDisponibles> lst = new List<GetRetirosDisponibles>();

            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    lst = (context.GetRetirosDisponibles().ToList());
                    return lst;
                }


            }
            catch (Exception ex)
            {
                return lst;
            }
        }

        public bool FinalizaRetiro(int RetiroID)
        {
         

            try
            {
                using (TropaNerdEntities context = new TropaNerdEntities())
                {
                    context.FinalizaRetiroTecnico(RetiroID);
                    return true;
                }


            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}