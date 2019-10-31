using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Models
{
    public interface IProductRepository
    {
        Product GetBy(int id);
        IEnumerable<Product> GetAll();
        void Add(Product product);
        void Delete(Product product);
        void Update(Product product);
        void SaveChanges();

    }
}
