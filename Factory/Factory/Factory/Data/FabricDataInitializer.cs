using FactoryApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Data
{
    public class FabricDataInitializer
    {
        private readonly FabricContext _dbContext;

        public FabricDataInitializer(FabricContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public void InitializeData()
        {
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {
                Machine machine1 = new Machine();
                _dbContext.Machines.Add(machine1);
                _dbContext.SaveChanges();
            }
        }
    }

}
