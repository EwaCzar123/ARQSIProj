using FactoryApi.Models;
using FactoryApi.Value_objects;
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
                MachineType type1 = new MachineType();
                _dbContext.MachineTypes.Add(type1);

                Description desc1 = new Description();
                type1.Descritipion = desc1;

                Machine machine1 = new Machine(type1.Id);

                type1.Machines.Add(machine1);

                Position pos1 = new Position();

                machine1.Position = pos1;
                
                
                
                
                _dbContext.SaveChanges();
            }
        }
    }

}
