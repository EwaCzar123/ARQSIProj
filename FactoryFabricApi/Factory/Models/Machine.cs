using FactoryApi.Value_objects;
using FactoryFabricApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Models
{
    public class Machine
    {
        public int Id { get; set; }
        public int MachineTypeId { get; set; }
        public int ProductionLineId { get; set; }

        public Position Position { get; set; }

        public ICollection<MachineTypeOperation> MachineTypeOperations { get; set; }

        public Machine(int machineTypeId, int productionLineId)
        {
            this.MachineTypeId = machineTypeId;
            this.ProductionLineId = productionLineId;
        }

                          
    }
}
