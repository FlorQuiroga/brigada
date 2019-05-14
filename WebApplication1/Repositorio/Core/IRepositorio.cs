using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace WebApplication1.Repositorio.Core
{
    public interface IRepositorio<TEntity> where TEntity : class
    {
        TEntity Insert(TEntity Entidad);
        void Update(TEntity Entidad);
        void Delete(TEntity Entidad);

        TEntity GetOne(Expression<Func<TEntity, Boolean>> Filtro);
        TEntity GetOne(Expression<Func<TEntity, Boolean>> Filtro, String[] Includes);

        List<TEntity> GetList();
        List<TEntity> GetList(String[] Includes);

        List<TEntity> GetList(Expression<Func<TEntity, Boolean>> Filtro);
        List<TEntity> GetList(Expression<Func<TEntity, Boolean>> Filtro, String[] Includes);
    }
}