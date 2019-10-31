using FactoryApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Data.Repositories
{
    public class ProductionLineRepository : IProductionLineRepository
    {
        private readonly FabricContext _context;
        private readonly DbSet<ProductionLine> _productionLines;

        public ProductionLineRepository(FabricContext dbContext)
        {
            _context = dbContext;
            _productionLines = dbContext.ProductionLines;
        }

        public IEnumerable<ProductionLine> GetAll()
        {
            return _productionLines.ToList();
        }

        public ProductionLine GetBy(int id)
        {
            return _productionLines.SingleOrDefault(productionline => productionline.Id == id);
        }
        public void Add(ProductionLine productionLine)
        {
            _productionLines.Add(productionLine);
        }

        public void Delete(ProductionLine productionLine)
        {
            _productionLines.Remove(productionLine);
        }

        public void Update(ProductionLine productionLine)
        {
            _context.Update(productionLine);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
