using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryProductionApi.Data
{
    public class ProductionDataInitializer
    {
        private readonly ProductionContext _dbContext;
        public ProductionDataInitializer(ProductionContext dbContext)
        {
            this._dbContext = dbContext;
        }
        public void InitializeData()
        {
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {
            }
        }
    }
}
