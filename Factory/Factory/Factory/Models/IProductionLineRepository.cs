using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Models
{
    public interface IProductionLineRepository
    {
        ProductionLine GetBy(int id);
        IEnumerable<ProductionLine> GetAll();
        void Add(ProductionLine productionLine);
        void Delete(ProductionLine productionLine);
        void Update(ProductionLine productionLine);
        void SaveChanges();
    }
}
