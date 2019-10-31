using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FactoryApi.Models;
using FactoryProductionApi.Data;
using Microsoft.EntityFrameworkCore;

namespace FactoryApi.Data.Repositories
{

    public class ProductRepository : IProductRepository
    {
        private readonly ProductionContext _context;
        private readonly DbSet<Product> _products;

        public ProductRepository(ProductionContext dbContext)
        {
            _context = dbContext;
            _products = dbContext.Products;
        }

        public IEnumerable<Product> GetAll()
        {
            return _products.ToList();
        }

        public Product GetBy(int id)
        {
            return _products.SingleOrDefault(product => product.Id == id);
        }
        public void Add(Product product)
        {
            _products.Add(product);
        }

        public void Delete(Product product)
        {
            _products.Remove(product);
        }

        public void Update(Product product)
        {
            _context.Update(product);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }

}
