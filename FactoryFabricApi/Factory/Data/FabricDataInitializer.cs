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
                MachineType machineType1 = new MachineType();
                _dbContext.MachineTypes.Add(machineType1);

                ProductionLine pl = new ProductionLine("Line A");
                _dbContext.ProductionLines.Add(pl);

                Description desc1 = new Description();
                machineType1.Descritipion = desc1;

                MachineType mt2 = new MachineType();
                Description desc2 = new Description();
                mt2.Descritipion = desc2;
                _dbContext.MachineTypes.Add(mt2);

                Machine machine1 = new Machine(machineType1.Id, pl.Id);
                _dbContext.Machines.Add(machine1);

                machineType1.Machines.Add(machine1);

                Position pos1 = new Position();

                machine1.Position = pos1;

                Operation op = new Operation();
                Duration dur = new Duration();

                op.Duration = dur;

                _dbContext.Operations.Add(op);
                
                
                
                
                _dbContext.SaveChanges();
            }
        }
    }

}
